import express from "express";
import data from "./data.js";
import cors from "cors";
import dotenv from "dotenv";

const app = express();

dotenv.config();
app.use(express.json());
app.use(cors());

app.get("/api/products", (req, res) => {
  res.send(data.products);
});
app.get("/api/products/slug/:slug", (req, res) => {
  const product = data.products.find((x) => x.slug === req.params.slug);
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: "Product not found" });
  }
});

const port = process.env.PORT || 5001;
app.listen(port, () => {
  console.log(`server is running on ${port}`);
});
