const fs = require('fs');

filePathToRead = './ReadWriteStream/sample.txt';
filePathToWrite = './ReadWriteStream/sample2.txt';

const readStream = fs.createReadStream(filePathToRead,'utf8');
const writeStream = fs.createWriteStream(filePathToWrite);

readStream.pipe(writeStream);