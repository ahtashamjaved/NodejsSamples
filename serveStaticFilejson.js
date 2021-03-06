// Serving Static files with http and file System Modules

const http = require('http');
const fs = require('fs');
http.createServer((req, res)=>{
    const readStream = fs.createReadStream('./static/example.json');
    res.writeHead(200, {'Content-type': 'application/json'});
    readStream.pipe(res);
}).listen(3000);