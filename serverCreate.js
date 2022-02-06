const http  = require('http');
const server = http.createServer((req, res)=>{
    if(req.url === '/'){ // if called from root
        res.write('you are using root domain');
        res.end();
    }
    else{
        res.write('you are using some domain other than root');
        res.end();
    }
});

server.listen('3000');