const express = require("express");
const app = express();
const port = 3001;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/message", (req, res) => {
  const rawData = req.body;
  const { name, message } = req.body;
  console.log(rawData);

  res.status(200).json({ data: rawData });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
