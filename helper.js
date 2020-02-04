const fs = require('fs')
const chalk = require('chalk')

function getNotes() {
    const data = fs.readFileSync('notes.json')
    const content = data.toString()

    try {
       const jsonData = JSON.parse(content)
       return jsonData
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

    const duplicates = notes.find(elem => {
        if (elem.title === title) {
            return true
        }
    })

    if (duplicates) {
        console.log('error')
    } else {
        notes.push({title, body})
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

    notes.forEach(elem => {
        console.log(elem.body, elem.title)
    })
}

function removeNotes(title) {
    const notes = getNotes()

    const array = notes.filter(element => {
        if (element.title !== title) {
            return true
        }
    })

    if (notes.length !== array.length) {
        saveNotes(array)
    } 
}

module.exports = { removeNotes: removeNotes, listNotes : listNotes, readNotes : readNotes, addNotes : addNotes, getNotes : getNotes, saveNotes : saveNotes }