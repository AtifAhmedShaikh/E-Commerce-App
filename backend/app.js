const express = require("express");
const router = require("./routes");
const app = express();
const port = 5000;

app.get("/", (req, res) => {
    res.send("Welcome E-coommerce App ");
});
app.get("/about", (req, res) => {
    res.send("Welcome About ");
});
app.use(router);
app.listen(port, () => {
  console.log("server runnng on port ", port);
});
