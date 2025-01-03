import express from "express";
import reportRoutes from "./routes/reports/index.js";
import userRoutes from "./routes/users/index.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use("/reports", reportRoutes);
app.use("/users", userRoutes);

app.get("/", (req, res) => {
    res.send("hello world");
})

app.get("/test", (req, res) => {
    res.send("testing");
})

app.listen(PORT, () => {
    console.log(`Server listening to port ${PORT}`);
})
