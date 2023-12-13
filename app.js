const express = require('express');
const cors = require('cors');
const morgan = require('morgan')

const snackRouter = require('./routers/snack');

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan('dev'))

app.get("/", (req, res) => {
  res.json({
    title: "Snack Rankings",
    description: "Find and rate the best snacks ever!"
  })
})

app.use("/snacks", snackRouter);

module.exports = app;
