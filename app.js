
const eventBox = require('events')

console.log(eventBox);

const customEmitter = new eventBox()

customEmitter.on('response', ()=>{
    console.log(`data recieved`);
})

customEmitter.emit('response')






// let p = new Promise((resolve, reject) => {
//     let a = 10;
//     if (a > 11) {
//         resolve('success')
//     } else {
//         reject('failed')
//     }
// })

// const asyncSample = async () => {
//     try {
//         const result = await p;
//         const result1 = await new Promise((resolve) => setTimeout(() => resolve('1')))
//         const result2 = await new Promise((resolve) => setTimeout(() => resolve('2')))
//         console.log(result);
//         console.log(result1);
//         console.log(result2);
//     } catch (error) {
//         console.log(error)
//     }
// }

// asyncSample()








// let p = new Promise((resolve, reject) => {
//     let a = 1+1;
//     if(a == 2){
//         resolve('success')
//     }else{
//         reject('failed')
//     }
// })

// p
// .then((message) => console.log('This is a resolve ' + message + ' message'))
// .catch((message) => console.log('This is a reject ' + message))













// function getText(path) {
//   return new Promise((resolve, reject) => {
//     readFile(path, "utf8", (err, data) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(data);
//       }
//     });
//   });
// }  



// getText("./content/first.txt")
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
