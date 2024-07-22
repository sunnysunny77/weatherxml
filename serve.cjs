const https = require("https");
const http = require("http");
const fs = require("fs");
const express = require("express");
const app = express();
app.use(express.static("site"));
app.use('/scss', express.static('scss'))
app.get('/', function(req, res) {
    req.pipe(http.request({
        host: "127.0.0.1",
        port: "2998",
        path: req.url,
        method: req.method,
        headers: req.headers,
        body: req.body
    }, (resp) => {
        res.writeHead(resp.statusCode,resp.headers);
        resp.pipe(res);
    }));
});
https.createServer({
    key: fs.readFileSync("./certs/server.key"),
    cert: fs.readFileSync("./certs/server.crt")
},app).listen(3000);
