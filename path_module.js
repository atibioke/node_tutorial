const path = require('path');

console.log(path.sep)


const pathFinder = path.join('./content', 'subfolder', 'text.txt')

console.log(pathFinder);

const base = path.basename(pathFinder)
console.log(base)


const absolute = path.resolve(__dirname, 'content', 'subfolder', 'text.txt')
console.log(absolute);



