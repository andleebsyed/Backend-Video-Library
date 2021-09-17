const express = require("express");
const bcrypt = require("bcrypt");
const UsersRouter = express.Router();
const { UserSignUp, UserSignIn, GuestAccess } = require("../controllers/users");

UsersRouter.route("/signup").post(UserSignUp);

UsersRouter.route("/signin").post(UserSignIn);
UsersRouter.route("/guest").post(GuestAccess);

module.exports = { UsersRouter };
