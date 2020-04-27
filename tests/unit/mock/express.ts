import express from "express";
const app = express();

const sleep: (timeout: number) => Promise<unknown> = (timeout) => {
  return new Promise((resolve)=>{
    setTimeout(()=>{
      resolve(timeout);
    },timeout);
  });
};

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get("/", (req, res) => {
  res.status(200).send("ok");
});

app.get("/code/:code", (req, res) => {
  const code: number = parseInt(req.params.code);
  res.status(code).send("ok");
});


app.get("/timeout/:ms", async (req, res) => {
  const ms: number = parseInt(req.params.ms);
  await sleep(ms);

  res.status(200).send(`timeout ${ms}`);
});

export default app;
