const Helpers = require('./helpers')

; (async () => {
    const userOne = await Helpers.getUserAsync(1)
    console.log(userOne)
    const userTwo = await Helpers.getUserAsync(2)
    console.log(userTwo)
})()

const sum = 1 + 30
console.log(sum)

