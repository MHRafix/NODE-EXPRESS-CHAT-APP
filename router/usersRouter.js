// external imports here
const express = require("express");
const router = express.Router();

// internal imports here
const { getUsers } = require("../controllers/usersController");

// login route here
router.get("/", getUsers);

module.exports = router;
