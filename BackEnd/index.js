const express = require("express");
const cors = require('cors');
require("dotenv").config();
require("./models/db");
const app = express();
app.use(express.json());
app.use(cors());
const PORT = process.env.PORT || 5000;;
const CatsRouter = require("./routes/cats");
app.use("/cats", CatsRouter);
app.use("*", (req, res) => res.status(404).json("NO content at this path"));

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
