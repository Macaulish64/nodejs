var http=require('http');
http.createServer(function (req,res) {
    res.end('Hello World\n');
}).listen(8080,"127.0.0.1");
console.log('Server Running 8080');