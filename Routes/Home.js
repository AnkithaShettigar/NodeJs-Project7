const express = require('express');

const app = express();
const data = require("../Controllers/Home");


const dataRouter = express.Router();
dataRouter.route('/homepage').get(data.homeData)

module.exports = dataRouter;