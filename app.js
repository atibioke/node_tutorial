
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

const addValues = async ()=>{
   await new Promise((resolve, reject) => {
    let a = 1+1;
    if(a == 2){
        resolve('success')
    }else{
        reject('failed')
    }
})
}

// addValues
// .then((message) => console.log('This is a resolve ' + message + ' message'))
// .catch((message) => console.log('This is a reject ' + message))

// const { readFile, writeFile } = require("fs");
// const util = require("util");
// const readFilePromise = util.promisify(readFile); 
// const writeFilePromise = util.promisify(writeFile); 


// const start = async () => {
//     try {
//       const first = await readFilePromise("./content/first.txt", 'utf8');
//       const second = await readFilePromise("./content/second.txt", 'utf8');
//       await writeFilePromise("./content/result-mind-grenade.txt", `THIS IS AWESOME : ${first} ${second}`); 
  
//       console.log(first, second);
//     } catch (error) {
//       console.log(first);
//     }
//   };
   
//   start();









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
