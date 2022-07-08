const fs = require('fs');

fs.readFile('file.txt','utf-8',(err,data)=>{
    console.log(err,data)
})

const a = fs.readFileSync('file.txt')
// console.log(a)
console.log(a.toString())

fs.writeFile('file2.txt',"This a data",()=>{
    console.log("written to the file")
})

console.log("Finished Reading File.")