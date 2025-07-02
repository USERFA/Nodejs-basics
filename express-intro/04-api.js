const express = require("express");
const app = express();

const { products } = require("./data"); //to get the rray of data for example

app.get("api/product"); 

app.get("/", (req, res) => {
  res.send('<h1>Home Page</h1><a href="/api/products">Products</a>');
  //   res.json(products);
  // res.json([{name:"Product 1"},{name:"Product 2"}])
});

app.get("/api/products", (req, res) => {
  const newProducts = products.map((product) => {
    const { id, name, image } = product;
    return { id, name, image };
  });
  res.json(newProducts);
});

app.get("/api/products/:productID", (req, res) => {
  const singleProduct = products.find(
    (product) => product.id === Number(req.params.productID)
  );
  if (!singleProduct) {
    return res.status(404).send("Product Does Not Exist");
  } else {
    return res.json(singleProduct);
  }
});

app.get("/api/products/:productID/reviews/:reviewID", (req, res) => {
  console.log(req.params);
  res.send("Hello World");
});

app.get("/api/v1/query", (req, res) => {
  const { search, limit } = req.query;
  let sortedProducts = [...products];
  console.log(req.query);
  if (search) {
    sortedProducts = sortedProducts.filter((product) => {
      return product.name.startsWith(search);
    });
    // res.send(sortedProducts);
  }
  if (limit) {
    sortedProducts = sortedProducts.slice(0, Number(limit));
    // res.send(sortedProducts)
  }
  if (sortedProducts.length < 1) {
    // return res.status(200).send("No products match your search");
    return res.status(200).json({ success: true, data: [] });
  }
  res.status(200).json(sortedProducts);
});

app.listen(5000, () => {
  console.log("Server is listening on port 5000....");
});