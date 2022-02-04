const fs = require('fs');
fileName = "exampleFile.txt"; // name of file which you want to Delete

fs.unlink(fileName, (err)=>{
    if(err)
        console.log(err);
    else
        console.log(fileName + ' was successfully Deleted');
});
