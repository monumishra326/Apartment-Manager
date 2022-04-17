

const express = require('express');
const cors = require("cors");
const managerController = require('./controllers/Manager.controller');
const flatController = require('./controllers/flat.controller');
// const residentController = require('./controllers/resident.controller');

const app = express();

app.use(cors());
app.use(express.json());

app.use("/manager", managerController);
app.use("/flat", flatController);


module.exports = app;

