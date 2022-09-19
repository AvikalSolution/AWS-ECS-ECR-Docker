const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const port = 3000;

//app.use(express.static("public"));
var filepath = "/images/Groot.jpeg";
app.get("/", (req, res) => res.send("Docker NodeJS : AWS ECS ECR EFS Demo"));
app.get("/groot", function (req, res) {
  res.sendFile(filepath);
});
console.log(__dirname);
console.log(process.cwd());

//const filePath = path.join(__dirname, '/images');
//app.use("images", express.static("images"));

//fs.openSync(filePath, 'groot.jpeg');

app.listen(port, () => console.log(`listening on port ${port}!`));
