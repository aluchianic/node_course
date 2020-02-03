const fs = require('fs')
const chalk = require('chalk');
function getNotes () {
    try {
        const data = fs.readFileSync('notes.json')
        const content = data.toString()
        const jsonData = JSON.parse(content)
        return jsonData
    }catch(err){
        console.log(chalk.red("err"))
       return []
    }
    }

const saveNotes = (data)=>{
    const jsonData = JSON.stringify(data)
    fs.writeFileSync('notes.json',jsonData)
}
const addNotes=(title,body)=>{
    const jsonData =getNotes()
    jsonData.push({"title": title, "body": body})
    saveNotes(jsonData)
}
module.exports={
    getNotes,
    saveNotes,
    addNotes
}

