let jwt = require("jsonwebtoken");
const express = require("express");
const cookieParser = require("cookie-parser");

require("dotenv").config();

const router = express.Router();

const Message = require("./message.route");
const MessageHistory = require("./messageHistory.route");

router.use(cookieParser());

router.use("/message", Message);
router.use("/message-history", MessageHistory);

module.exports = router;
