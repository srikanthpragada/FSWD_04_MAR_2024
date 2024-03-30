const http = require('http'); // load library

const server = http.createServer(
    (req, res) => {
        res.statusCode = 200; // ok
        res.setHeader('Content-Type', 'text/html');
        if (req.url === '/hello') {
            res.end(`<h1>Hello!</h1>`);
        }
        else
            if (req.url === '/now') {
                var ct = new Date().toString()
                res.end(`<h1>Now = ${ct}</h1>`); // send to client
            }
            else {
                res.end(`<h4>Invalid URL</h4>`);
            }
    }
);

// Http sever runs at port 8888
server.listen(8888, 'localhost',
    () => {
        console.log('Server running...');
    }
);