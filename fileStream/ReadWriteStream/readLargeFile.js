const fs = require('fs');
filePathToRead = './ReadWriteStream/sample.txt';
fs.readFile(filePathToRead, (err, file)=>{
    if(err)
        console.log(err);
    else{
        console.log(file);
    }
})