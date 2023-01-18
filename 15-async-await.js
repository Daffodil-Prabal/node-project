const { readFile, writeFile } = require('fs').promises;
// const util = require('util');
// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);

const start = async () => {
    try {
        const first = await readFile('./content/first.txt', 'utf-8')
        const second = await readFile('./content/second.txt', 'utf-8')
        await writeFile('./content/result-mind-grenade.txt',`This is awesome : ${first} ${second}`)
        console.log(first, second);
    }
    catch (err) {
        console.log(err);
    }
}

start();


// const getText = (path) => {
//     return new Promise((resolve, reject) => {
//         readFile(path, 'utf-8', (err, data) => {
//             if (err) {
//                 reject(err)
//             } else {
//                 resolve(data)
//             }
//         })
//     })
// }

// getText('./content/first.txt')
//     .then((data) => {
//         console.log(data);
//     })
//     .catch((err) => {
//         console.log(err);
//     });


const EventEmitter = require('events');

const customEmitter = new EventEmitter();

customEmitter.on('response', () => {
    console.log(`data received`);
})


customEmitter.on('response', () => {
    console.log(`some other logic`);
})


customEmitter.on('responses', () => {
    console.log(`some other logic`);
})

customEmitter.emit('response')
customEmitter.emit('responses')

const { writeFileSync } = require('fs');

for (let i = 0; i < 100000; i++) {
    writeFileSync('./content/big.txt', `hello world ${i} 
    `, { flag: 'a' })
}
