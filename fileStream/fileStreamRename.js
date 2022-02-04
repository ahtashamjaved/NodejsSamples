const fs = require('fs');

oldFileName = "exampleFile.txt"; // name of file which you want to rename
newFileName = "newExampleFile.txt" // name of file after rename

fs.rename(oldFileName, newFileName, (err)=>{
    if(err)
        console.log(err);
    else
        console.log(oldFileName + ' was successfully renamed to '+ newFileName);
});
