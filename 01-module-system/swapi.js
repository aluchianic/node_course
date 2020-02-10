const request = require('request');
const fs = require('fs');

const PATH = 'https://swapi.co/api/people/'


// request(PATH, function (error, response, body) {
//         var jsonData = JSON.parse(body);
//         var jsonArr = []
//         jsonArr.push(...jsonData.results
//         )
//         //fs.writeFileSync('people.json', JSON.stringify(jsonArr))
//
//
//         // while (jsonData.next) {
//         //     request(jsonData.next, function (error, response, body) {
//         //             jsonData = JSON.parse(body)
//         //             jsonArr.push(...jsonData.results)
//         //             console.log("fdsfdds")
//         //         }
//         //     )
//         // }
//         console.log(jsonArr.length)
//     }
// )

function readPeoplePromise(PATH) {
    return new Promise((resolve, reject) =>
        request(PATH, function (error, response, body) {
                let data = JSON.parse(body)
                if (error) {
                    reject(error.message)
                }
                resolve(request(PATH, function (error, response, body) {
                        let data = JSON.parse(body)
                        if (error) {
                            reject(error.message)
                        }
                        resolve()
                    }
                    )
                )
            }
        )
    )
}

readPeoplePromise(PATH).then(data => console.log(data)).catch(err => console.log(err))


