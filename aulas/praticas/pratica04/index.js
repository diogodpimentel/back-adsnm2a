const express = require("express");

const app = express();

app.get("/", function (req, res) {
  console.log("URL=", req.url);
  console.log("Metodo=", req.method);
  console.log("Cabecalho=", req.headers);
  console.log("Paramemtros=", req.params);
  console.log("Corpo=", req.body);
  res.status(200).send("Você fez uma requisição GET");
});

app.post("/", function (req, res) {
  console.log(req.body);
  res.status(201).end();
});

app.put("/", function (req, res) {
  res.status(200).end();
});

app.delete("/", function (req, res) {
  res.status(204).end();
});

app.listen(3000, function () {
  console.log("API está ON");
});

module.exports = app;
