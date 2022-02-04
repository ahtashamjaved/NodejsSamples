const fs = require('fs');

fileName = "exampleFile.txt"; // name of file which you want to append
textAppend = "\nThis is the new appended text in file";

fs.appendFile(fileName, textAppend, (err)=>{
    if(err)
        console.log(err)
    else
        console.log('Text was successfully appended to ' + fileName);
} );

//==================== Note =================
// appendFile() function also creates a new file if file does not exist. And then append the text to file.