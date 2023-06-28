const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.json({ hello: "Hello World!" });
});

app.listen(3333, () => {
  console.log(`Servidor Rodando`);
});
