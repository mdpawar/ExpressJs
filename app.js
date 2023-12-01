// const http = require("http");
// W;hen using express we do not need to install http or htpps

const express = require("express");

const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended: false}));

// app.use((req, res, next) => {
//     console.log(" I am in the middleware");
//     next(); // allows request to continue to other middleware.
// });

app.use('/add-product',(req, res, next) => { // '/add-product is a path used call callback and send response. specific path must be called
    // before general '/' path otherwise it will call all callbaks. addig specoic path will insure we call that path only. 
    // adding path we need not to write next();. 
    console.log(' I am middleware');
    res.send(`
    <form action="/product" method="post">
      <label for="productName">Product Name:</label>
      <input type="text" id="productName" name="productName"><br><br>

      <label for="productSize">Product Size:</label>
      <input type="text" id="productSize" name="productSize"><br><br>

      <button type="submit">Submit</button>
    </form>
  `);
});

app.use('/product', (req, res, next) => {
    console.log(req.body.productName);
    console.log(req.body.productSize);
    res.redirect("/");
})

app.use('/',(req, res, next) => {
    console.log(' I am another middleware');
    res.send('<h1>Hello Express Js</h1>')
})

// const server = http.createServer(app);

// server.listen(4000);
//  rather we can write :
app.listen(4000); 