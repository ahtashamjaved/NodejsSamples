const { dir } = require('console');
const fs = require('fs');
directoryName = 'SampleDirectory'; // name of the folder you want to Delete

fs.rmdir(directoryName,(err)=>{
    if(err)
    console.log(err);
    else{
        console.log(directoryName + " Deleted Successfully");
    }
});
