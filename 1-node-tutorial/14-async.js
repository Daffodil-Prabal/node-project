const _ = require('lodash')

const items = [1, [2, [3, [4, [5]]]]]
const newItems = _.flattenDeep(items);
console.log(newItems);

console.log('task started');
setInterval(()=>{
    console.log("inside interval");
}, 1000);
setTimeout(()=>{
    console.log("inside timeout");
},10000);
console.log("task ended");