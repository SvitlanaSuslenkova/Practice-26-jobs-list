const express = require("express");
const cors = require("cors");
const jobsData = require("./data/data.json");

const app = express();
app.use(cors());

app.get("/", (req, res) => {
  res.json(jobsData);
});

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
