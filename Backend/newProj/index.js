const express = require("express");
const app = express();

const PORT = 3000;

app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  }
  console.log(`server running at port ${PORT}`);
});

app.use(express.static("public"));
app.use(express.json({ limit: "1mb" }));

app.post("/api", (req, res) => {
  console.log(req.body);
  const data = req.body;
  res.json({
    status: "success",
    latitude: data.lat,
    longitude: data.lon,
  });
});
