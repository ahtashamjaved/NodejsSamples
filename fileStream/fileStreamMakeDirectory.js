const fs = require('fs');
newFolderName = 'SampleDirectory'; // name of the folder you want to create
fs.mkdir(newFolderName,(err)=>{
    if(err)
        console.log(err);
    else{
        console.log(newFolderName +' was successfully created');
    }
})