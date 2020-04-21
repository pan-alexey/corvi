import express from "express";

const app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get("/", (req, res) => {
  res.status(200).send("/root/");
});

app.get("/400", (req, res) => {
  res.status(400).send("Hello World!");
});

export default app;
