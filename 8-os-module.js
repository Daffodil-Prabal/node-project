const os = require('os')

//current user info
const user = os.userInfo()
console.log(user);

//method returns the system uptime
console.log(`The System Uptime is ${os.uptime() / 60} minutes`);

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}

console.log(currentOS);