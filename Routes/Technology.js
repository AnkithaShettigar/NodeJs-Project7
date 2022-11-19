const express = require('express');

const app = express();
const data = require("../Controllers/Technology");


const dataRouter = express.Router();
dataRouter.route('/technology').get(data.technologyData)

module.exports = dataRouter;