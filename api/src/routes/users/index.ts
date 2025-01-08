import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("users route testing");
})

app.post("/user", (req, res) => {
  res.send("users route testing");
})


export default app;
