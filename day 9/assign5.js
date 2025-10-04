const http = require('http');
const server = http.createServer((req, res) => {
    res.writeHead
        (200, { 'content-type': 'text/html' });
    res.end('Hello there from Vinayak \n');
});
server.listen(8080);
