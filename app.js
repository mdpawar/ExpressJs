// const http = require("http");
// W;hen using express we do not need to install http or htpps

const express = require("express");

const bodyParser = require("body-parser");

const app = express();

const adminRoutes = require('./routes/admin');

const shopRoutes = require('./routes/shop');

const notFound = require('./routes/notFound');

app.use(bodyParser.urlencoded({extended: false}));

// app.use((req, res, next) => {
//     console.log(" I am in the middleware");
//     next(); // allows request to continue to other middleware.
// });

app.use(adminRoutes);

app.use(shopRoutes);

app.use(notFound);



// const server = http.createServer(app);

// server.listen(4000);
//  rather we can write :
app.listen(4000); 