const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/home') {
        res.write("Welcome to Home Page");
    } else if (req.url === '/about') {
        res.write("Welcome to About Page");
    } else {
        res.write("Page Not Found");
    }
    res.end();
});

server.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});