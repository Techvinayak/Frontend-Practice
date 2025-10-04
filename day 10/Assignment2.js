const h = require('http');
const { URL } = require('url');

let todos = [
    { id: 1, task: 'Welcome to IET' },
    { id: 2, task: 'Hello this Vinayak' }
];

const server = h.createServer(function (request, response) {
    const { method, url } = request;
    const parsedURL = new URL(url, `http://${request.headers.host}`);
    const pathname = parsedURL.pathname;

    if (method === 'GET' && pathname === '/todos') {
        response.writeHead(200, { 'Content-Type': 'application/json' });
        response.end(JSON.stringify(todos));
    }
});

server.listen(4000, () => console.log("Server is switched on"));
