const express = require('express');

const app = express();
const data = require("../Controllers/Tollywood");


const dataRouter = express.Router();
dataRouter.route('/tollywood').get(data.tollywoodData)

module.exports = dataRouter;