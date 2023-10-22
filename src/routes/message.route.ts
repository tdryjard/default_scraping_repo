// const express = require("express");
const messageExpress = require("express");
const messageRouter = messageExpress.Router();
const checkToken = require("../middlewares/checkToken");

const Create = require("../controllers/Message/create");
const Find = require("../controllers/Message/find");
const Update = require("../controllers/Message/update");
const Delete = require("../controllers/Message/delete");

messageRouter.post("/", checkToken, Create.create);
messageRouter.get("/", checkToken, Find.find);
messageRouter.put("/:id", checkToken, Update.update);
messageRouter.delete("/:id", checkToken, Delete.delete);


module.exports = messageRouter;