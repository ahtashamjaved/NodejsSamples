const fs = require('fs');
const zlib = require('zlib');
const gUnzip = zlib.createGunzip();  // to unzip the compressed file

filePathToRead = './ReadWriteStream/sample2.txt.gz'; // compressed file
filePathToWrite = './ReadWriteStream/unCompressed.txt'; // new uncompressed file

const readStream = fs.createReadStream(filePathToRead);
const writeStream = fs.createWriteStream(filePathToWrite);

readStream.pipe(gUnzip).pipe(writeStream);