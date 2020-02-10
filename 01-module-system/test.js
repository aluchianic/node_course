//
// var i=99
//
// for(let i=0; i<10;i++){
//     console.log(i)
// }
//
// console.log(i)
//
// if(true){
//     i=88
// }
//
// console.log(i)

// вспомни Js  сюка!!!!!!!!!

// const obj = {
//     prop: {
//         types: ['str', 'obj'],
//         isValid: true
//     },
//     prop2: {
//         type: 'wtr',
//         isValid: true
//     }
// }
//
//
// for (let key in obj) {
//     for (let key2 in obj[key]) {
//         console.log(key2)
//     }
// }
//
//
// console.log('prop2h' in obj)

//setTimeout(() => console.log("test"), 2000)

function sum(x, y) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(x + y)
        }, 2000)
        setTimeout(() => {
            reject(x - y)
        }, 3000
    )
    });
}

const promise = new Promise(() => {

})

sum(1, 2).then(data => console.log(data)).catch(err => console.log(err))


























