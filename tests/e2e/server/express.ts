import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.status(200).send("Hello World!");
});

app.get("/400", (req, res) => {
  res.status(400).send("Hello World!");
});

export default app;
