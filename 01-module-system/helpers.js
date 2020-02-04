const fs = require('fs')
const clr = require ("chalk")

const getNotes = () => {
    try{
const data = fs.readFileSync('notes.json')
const content = data.toString()
const jsonData=JSON.parse(content)
return jsonData 
    }catch(err){
        console.log(clr.red("ERROR! Invalid input format in 'notes.json'"))
        return []
    }
}

const saveNotes = (object) => {
    const jsonObject = JSON.stringify(object)
    fs.writeFileSync('notes.json',jsonObject)
}

const addNotes = (title, body) => { 
    const jsonData = getNotes()
    if(!jsonData.find(x=>{if(x.title===title) return true})){
        jsonData.push({"title": title, "body": body})
        saveNotes(jsonData)
}
else{
    console.log('Title already exists')
}
}

const readNotes = (title) => {
    const jsonData = getNotes()
    const y = jsonData.find(x=>{if(x.title===title) return true})
    if(y){
        console.log(clr.yellow(y.title) + ' ' + clr.greenBright(y.body))
    }
    else console.log(clr.red('There is no such title'))
}

const listNotes = () => {
    const jsonData = getNotes()
    jsonData.forEach(element => {
        console.log(clr.yellowBright(element.title))
    });
}

const removeNotes = (title) => {
    const jsonData = getNotes()
    const jsonDataModified = jsonData.filter(x=>x.title!==title)
    if(jsonData.length===jsonDataModified.length)console.log(clr.red("There is no such title"))
    saveNotes(jsonDataModified)
}
module.exports = {
    getNotes,
    saveNotes,
    addNotes,
    readNotes,
    listNotes,
    removeNotes
} 