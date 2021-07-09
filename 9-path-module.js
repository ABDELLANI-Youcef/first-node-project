const path = require('path');
// path separator
console.log(path.sep);
//formated path
const filePath = path.join('/content/','subfolder','test.txt');

console.log(filePath);
// file name
const base = path.basename(filePath);
console.log(base);

// the absolute path
console.log('__dirname will give you', __dirname);

const absolute = path.resolve(__dirname, 'content', 'subfolder','test.txt');
console.log(absolute);