const http = require("http");

const fs = require("fs");

http
  .createServer((req, res) => {
    // const text = fs.readFileSync('./content/big.txt')
    // res.end(text)
    const fileStream = fs.createReadStream("./content/big.txt",  "utf8"
    );
    fileStream.on('open', () => {
      fileStream.pipe(res)
    });
    fileStream.on('error', (err) => {
      res.end(err);
    });
  })
  .listen(5000);

// const http = require('http')

// const server = http.createServer((req, res) => {
//     res.end('Welcome')
// })

//USING EVENTS EMITTER.

// const server = http.createServer

// server.on('request', (req, res) => {
//     res.end('Welcome!')
// })

// server.listen(5000)

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
