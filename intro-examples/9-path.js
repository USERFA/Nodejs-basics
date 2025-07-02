const path = require('path');
console.log(path.sep);
//returns the relative path
const filePath = path.join('/content','subfolder','test.txt');
console.log(filePath);
//returns the file name
const base = path.basename(filePath);
console.log(base);
//returns the absolute path
const absolute = path.resolve(__dirname,'content','subfolder','test.txt');
console.log(absolute);
