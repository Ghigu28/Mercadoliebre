const express = require("express");
const app = express();
const path = require("path");
app.use(express.static("public"));
app.listen(3000, () => {
  console.log("Servidor corriendo en Http://localhost:3000");
});

app.get("/", (req, res) => {
  let htmlPath = path.resolve(__dirname, "./views/index.html");
  res.sendFile(htmlPath);
});


app.get("/login", (req, res) => {
  let htmlPath = path.resolve(__dirname, "./views/login.html");
  res.sendFile(htmlPath);
});

app.get("/register", (req, res) => {
  let htmlPath = path.resolve(__dirname, "./views/register.html");
  res.sendFile(htmlPath);
});

app.post("/login", (req, res) => {
    res.send("LLego form de login");
});