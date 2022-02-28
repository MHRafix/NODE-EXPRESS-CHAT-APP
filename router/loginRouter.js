// external imports here
const express = require("express");
const router = express.Router();

// internal imports here
const { getLogin } = require("../controllers/loginController");

// login route here
router.get("/", getLogin);

module.exports = router;
