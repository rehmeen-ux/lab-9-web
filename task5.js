const http = require('http');
const server = http.createServer((req, res) => {
    if (req.url === '/api') {
        const student = {
            name: "Rehmeen",
            course: "ADSCS"
        };
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(student));
    } else {
        res.write("Invalid Route");
        res.end();
    }
});
server.listen(3000, () => {
    console.log("API running at http://localhost:3000/api");
});