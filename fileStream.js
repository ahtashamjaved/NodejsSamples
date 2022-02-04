const fs = require('fs');

fileName = "exampleFile.txt"; // name of file which you want to create
filetext = "This is a sample text"; // text which you want to write in file
// Create a file
fs.writeFile(fileName, filetext, (err)=>{
    if(err)
    console.log(err); // if error print it
    else{
        console.log('File ' + fileName + ' Sucessfully created');
        
        // now we will read the file which we just created
        fs.readFile(fileName,'utf-8', (err, file)=>{
            if(err)
                console.log(err); // if error print it
            else
                console.log(file); // print the content of file which is read
        });
    }
} );
