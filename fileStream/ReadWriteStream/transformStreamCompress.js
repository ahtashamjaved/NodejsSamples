const fs = require('fs');
const zlib = require('zlib');
const gzip = zlib.createGzip();

filePathToRead = './ReadWriteStream/sample.txt';
filePathToWrite = './ReadWriteStream/sample2.txt.gz';

const readStream = fs.createReadStream(filePathToRead,'utf8');
const writeStream = fs.createWriteStream(filePathToWrite);

readStream.pipe(gzip).pipe(writeStream);