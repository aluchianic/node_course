const fs = require('fs')
const chalk = require('chalk');
const FILE = 'notes.json'

function getNotes() {
    const data = fs.readFileSync(FILE);
    const content = data.toString()
    try {
        const jsonData = JSON.parse(content)
        return jsonData;
    } catch (e) {
        console.log(chalk.red(e))
        return [];
    }

}


function saveNotes(path, data) {
    let note = JSON.stringify(data)
    fs.writeFileSync(path, note)
}


function addNotes(title, body) {
    let notes = getNotes();
    notes.push({title, body})
    saveNotes(FILE, notes)
}


module.exports = {addNotes}