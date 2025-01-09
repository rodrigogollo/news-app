import express from "express";

const app = express();

app.get("/", (_, res) => {
  res.send("Get Users");
})

app.get("/:id", (req, res) => {
  let id = req.query.id;
  res.send(`Get User with id of ${id}`);
})

app.post("/user", (req, res) => {
  let body = req.body;
  res.send(`Create new user ${body}`);
})

app.put("/user/:id", (req, res) => {
  let id = req.query.id;
  res.send(`Edit User with id of ${id}`);
})

app.delete("/user/:id", (req, res) => {
  let id = req.query.id;
  res.send(`Delete User with id of ${id}`);
})
export default app;
