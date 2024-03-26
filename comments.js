// Create web server
// 1. Load the http module
var http = require('http');
var fs = require('fs');
var url = require('url');
var path = require('path');
var mime = require('mime');

// 2. Create a http server
http.createServer(function (req, res) {
    // 3. Get the URL of the request
    var urlObj = url.parse(req.url);
    var urlPathName = urlObj.pathname;
    // 4. Get the file path based on the URL
    var filePath = path.join(__dirname, urlPathName);
    // 5. Read the file content
    fs.readFile(filePath, 'utf-8', function (err, data) {
        if (!err) {
            // 6. Write the file content to the response
            res.writeHead(200, { 'Content-Type': mime.lookup(filePath) });
            res.write(data);
            res.end();
        } else {
            res.writeHead(404, { 'Content-Type': 'text/html' });
            res.write('<h1>404 Not Found</h1>');
            res.end();
        }
    });
}).listen(8080);

console.log('Server started on http://localhost:8080/');