// external imports here
const express = require("express");
const router = express.Router();

// internal imports here
const { getInbox } = require("../controllers/inboxController");

// login route here
router.get("/", getInbox);

module.exports = router;
