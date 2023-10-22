// const express = require("express");
const checkTokenMessageHistory = require("../middlewares/checkToken");
const messageHistoryExpress = require("express");
const messageHistoryRouter = messageHistoryExpress.Router();

const {create} = require("../controllers/MessageHistory");

messageHistoryRouter.post("/", checkTokenMessageHistory, create);


module.exports = messageHistoryRouter;