    const fs = require('fs')

const PATH = "d:\\"


function readdirPromise(path) {
    return new Promise((resolve, reject) =>
        fs.readdir(path, (err, data) => {
            if (err) {
                reject(err.message)
            }
            resolve(data)
        })
    )
}

readdirPromise(PATH).then(data => console.log(data)).catch(err => console.log(err))
