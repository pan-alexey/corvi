import express from "express";
const app = express();

const sleep: (timeout: number) => Promise<unknown> = (timeout) => {
  return new Promise((resolve)=>{
    setTimeout(()=>{
      resolve(timeout);
    },timeout);
  });
};

app.get("/", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.status(200).send("ok");
});
app.get("/code/:code", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  const code: number = parseInt(req.params.code);
  res.status(code).send("ok");
});


app.get("/timeout/:ms", async (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  const ms: number = parseInt(req.params.ms);
  await sleep(ms);

  res.status(200).send(`timeout ${ms}`);
});

export default app;
