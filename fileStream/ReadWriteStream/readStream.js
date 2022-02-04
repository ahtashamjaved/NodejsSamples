const fs = require('fs');

filePathToRead = './ReadWriteStream/sample.txt';
const readStream = fs.createReadStream(filePathToRead,'utf8');

readStream.on('data', (chunk)=>{
    console.log(chunk);
});
