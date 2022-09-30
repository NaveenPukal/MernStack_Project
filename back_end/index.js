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

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`server is running on ${port}`);
});
