// const _ = require('lodash')

// const items = [1,[2, [3, [4, [5, [6, [7, [8,]]]]]]]]
// const newItems = _.flattenDeep(items)
// console.log(newItems);
// console.log('Hello people');

const { readFile } = require('fs')
console.log('start a first task');
readFile('./content/first.txt', 'utf8', (err, result) => {
    if(err){
        console.log(err);
        return
    }
    console.log(result);
    console.log('complete first task');
})
console.log('starting next task');























