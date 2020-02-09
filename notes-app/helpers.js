const fs = require('fs')
const clr = require("chalk")

const getNotes = () => {
    try {
        const data = fs.readFileSync('notes.json')
        const content = data.toString()
        return JSON.parse(content)
    } catch (err) {
        console.log(clr.red("ERROR! Invalid input format in 'notes.json'"))
        return []
    }
}

const saveNotes = (object) => {
    const jsonObject = JSON.stringify(object)
    fs.writeFileSync('notes.json', jsonObject)
}

const addNotes = (title, body) => {
    const notes = getNotes()
    if (!notes.find(x => x.title === title)) {
        notes.push({ "title": title, "body": body })
        saveNotes(notes)
    } else {
        console.log('Title already exists')
    }
}

const readNotes = (title) => {
    const notes = getNotes()
    const y = notes.find(x => x.title === title)
    if (y) {
        console.log(clr.yellow(y.title) + ' ' + clr.greenBright(y.body))
    } else console.log(clr.red('There is no such title'))
}

const listNotes = () => {
    const notes = getNotes()
    notes.forEach(element => {
        console.log(clr.yellowBright(element.title))
    });
}

const removeNotes = (title) => {
    const notes = getNotes()
    const notesModified = notes.filter(x => x.title !== title)
    if (notes.length === notesModified.length) 
        console.log(clr.red("There is no such title"))
    saveNotes(notesModified)
}
module.exports = {
    getNotes,
    saveNotes,
    addNotes,
    readNotes,
    listNotes,
    removeNotes
} 