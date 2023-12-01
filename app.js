// const http = require("http");
// W;hen using express we do not need to install http or htpps

const express = require("express");

const app = express();

app.use((req, res, next) => {
    console.log(" I am in the middleware");
    next(); // allows request to continue to other middleware.
});

app.use((req, res, next) => {
    console.log(' I am another middleware');
    res.send('<h1>Hello Express Js</h1>')
})
// const server = http.createServer(app);

// server.listen(4000);
//  rather we can write :
app.listen(4000); 