const express = require('express');

const routes = express.Router();

routes.get('/add-product',(req, res, next) => { // '/add-product is a path used call callback and send response. specific path must be called
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

routes.use('/product', (req, res, next) => {
    console.log(req.body.productName);
    console.log(req.body.productSize);
    res.redirect("/");
})

module.exports = routes;




