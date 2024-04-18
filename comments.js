//Create web server
var http = require('http');
var fs = require('fs');
var url = require('url');
var querystring = require('querystring');
var comments = [];
var server = http.createServer(function (req, res) {
    //Parse url
    var parseUrl = url.parse(req.url, true);
    var path = parseUrl.pathname;
    if (path === '/') {
        fs.readFile('./index.html', function (err, data) {
            if (err) {
                res.end('404 Not Found');
            } else {
                res.end(data);
            }
        });
    } else if (path === '/post') {
        fs.readFile('./post.html', function (err, data) {
            if (err) {
                res.end('404 Not Found');
            } else {
                res.end(data);
            }
        });
    } else if (path === '/comment') {
        //Get data
        var data = parseUrl.query;
        if (data.name && data.comment) {
            comments.push(data);
        }
        //Redirect
        res.statusCode = 302;
        res.setHeader('Location', '/');
        res.end();
    } else if (path === '/getComments') {
        //Send comments
        res.end(JSON.stringify(comments));
    } else {
        res.end('404 Not Found');
    }
});
server.listen(3000, function () {
    console.log('Server is running on port 3000');
});