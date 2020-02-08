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
    const jsonData1 = getNotes()
    const duplicate=jsonData1.find(x=>{if(x.title===title)return true})
    console.log(duplicate)
    if(!duplicate){
    const jsonData =getNotes()
    jsonData.push({"title": title, "body": body})
        saveNotes(jsonData)
    }else{
        console.log("exist")
    }
const readNotes=(title)=>{
    const jsonData =getNotes()
    jsonData.forEach(x=>{if(x.title===title) console.log(chalk.red(x.title),chalk.green(x.body))})
}
const listNotes=()=>{
    const jsonData =getNotes()
    jsonData.forEach(x=>{console.log(x.title)})

}
const removeNotes=(title)=>{
    const jsonData =getNotes()
    const newData = jsonData.filter(x=>(x.title!==title))
    if(jsonData.length!==newData.length){
        saveNotes(newData)
    }else{console.log("there is no such el")}




}
module.exports={
    getNotes,
    saveNotes,
    addNotes,
    readNotes,
    listNotes,
    removeNotes
}

