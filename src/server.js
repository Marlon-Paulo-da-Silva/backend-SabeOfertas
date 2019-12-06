const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");

const routes = require("./routes");

const app = express();

mongoose.connect(
  "mongodb+srv://admin:admin@cluster0-icbuf.mongodb.net/buscaofertas?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true }
);

app.use(cors({ origin: "https://sabeofertas.netlify.com/" }));
app.use(express.json());
app.use("/files", express.static(path.resolve(__dirname, "..", "uploads")));
app.use(routes);

const port = process.env.PORT || 8080 || 3333;
app.listen(port);
