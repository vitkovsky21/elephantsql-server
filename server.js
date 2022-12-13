const express = require("express");
const bodyParser = require("body-parser"); /* deprecated */
const cors = require("cors");

const app = express();
const corsOptions = {
  credentials: true,
  origin: 'http://127.0.0.1:3000'
}
app.use(cors(corsOptions));

app.use(bodyParser.json());  

app.use(bodyParser.urlencoded({ extended: true }));

const db = require("./app/models");
db.sequelize.sync({ force: true });

app.get("/", (req, res) => {
  res.json({ message: "Welcome." });
});
app.post("/", (req, res) => {
  res.json({ message: "Post Req." });
});

require("./app/routes/forum.routes")(app);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
