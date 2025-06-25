const {readFileSync,writeFileSync} = require('fs');
console.log("Start");

//read from file
const first = readFileSync('./content/first','utf-8');
const second = readFileSync('./content/second','utf-8');


writeFileSync('./content/result-sync.txt',`Here is the result:${first}, ${second}`,{flag:'a'}); //append
// console.log(first , second);
console.log("Done with this task!");
console.log("Starting the next one!");


