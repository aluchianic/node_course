const fs = require('fs')

const getUserSync = (id) => {
    const users = fs.readFileSync( 'users.json', 'utf-8')

    return JSON.parse(users)
        .find(user => user.id === id)
}

const getUser = (id, callback) => {
    return fs.readFile( 'users.json', 'utf-8', ((err, data) => {
        if (err) callback(err, null)

        const json = JSON.parse(data)
        const user = json.find(user => user.id === id)

        return callback(null, user)
    }))
}

const getUserAsync = async (id) => {
    return new Promise((resolve, reject) => {
        fs.readFile('users.json', 'utf-8', ((err, data) => {
            if (err) reject(err)

            const json = JSON.parse(data)
            const user = json.find(user => user.id === id)

            return resolve(user)
        }))
    })

}

module.exports = {
    getUser,
    getUserSync,
    getUserAsync
}
