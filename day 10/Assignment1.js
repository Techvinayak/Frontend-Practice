const h = require('http');
var url = require('url');

const server = h.createServer(
    function (request, response) {
        let d = request.url;
        let d1 = url.parse(d, true).query;
        response.writeHead(200, { 'content-type': 'text/JSON' });
        console.log(request.headers);
        if (d1.name == 'XYZ') {
            response.write("<h1>" + d1.name + "</h1>");
        }
        else
            response.write(JSON.stringify({
                message: "Hello From Vinayak "
            }));

        response.end();
    }
);

server.listen(3000);
