// external imports here
const express = require("express");
const router = express.Router();

// internal imports here
const { getUsers, addUser } = require("../controllers/usersController");
const avatarUpload = require("../middlewares/users/avatarUpload");
const {
  addUserValidators,
  addUserValidatorsHandler,
} = require("../middlewares/users/usersValidator");

// login route here
router.get("/", getUsers);

// avatar upload api here
router.post(
  "/",
  avatarUpload,
  addUserValidators,
  addUserValidatorsHandler,
  addUser
);

module.exports = router;
