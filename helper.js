const fs = require('fs')
const chalk = require('chalk')

function getNotes() {
    try {
        const data = fs.readFileSync('notes.json')
        const content = data.toString()
        return JSON.parse(content)
    } catch (error) {
        return []
    }
}

function saveNotes(data) {
    const dataFile = JSON.stringify(data)
    fs.writeFileSync('notes.json', dataFile)
}

function addNotes(title, body) {
    const notes = getNotes()
    const duplicates = notes.find(element => element.title === title)

    if (duplicates) {
        console.log('error')
    } else {
        notes.push({ title, body })
        saveNotes(notes)
    }
}

function readNotes(title) {
    const notes = getNotes()

    notes.forEach(element => {
        if (element.title === title) {
            console.log(chalk.red(element.body))
            console.log(chalk.green(element.title))
        }
    });
}

function listNotes() {
    const notes = getNotes()

    notes.forEach(element => {
        console.log(element.body, element.title)
    })
}

function removeNotes(title) {
    const notes = getNotes()
    const notesToKeep = notes.filter(element => element.title !== title)

    if (notes.length !== notesToKeep.length) {
        saveNotes(notesToKeep)
    }
}

module.exports = {
    removeNotes,
    listNotes,
    readNotes,
    addNotes,
    getNotes,
    saveNotes
}
