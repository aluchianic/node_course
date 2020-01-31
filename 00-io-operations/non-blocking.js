const Helpers = require('./helpers')

Helpers.getUser(1, (err, data) => {
    console.log(data)
})

Helpers.getUser(2, (err, data) => {
    console.log(data)
})

const sum = 1 + 30
console.log(sum)

