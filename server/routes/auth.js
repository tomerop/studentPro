const jwt = require("jsonwebtoken");
const express = require("express");
const mongoose = require("mongoose");
const Joi = require("joi");
const { Users, validateLogIn } = require("../models/users");
const logInRouter = express.Router();

logInRouter.post("/", async (req, res) => {
  const { error } = validateLogIn(req.body);
  
  if (error) {
    res.status(401).send(error.details[0].message);
    return;
  }

  let user = await Users.findOne({ email: req.body.email });
  if (!user) {
    return res.status(401).send("email or password wrong ");
  }
  console.log(user);
  let phoneNumber = user.phoneNumber;
  if (phoneNumber) {
    const token = jwt.sign({_id: user._id }, "impactStudio");
    return res
      .header("x-auth-token", token)
      .header("access-control-expose-headers", "x-auth-token")
      .send(token);
  }
  return res.status(401).send("email or phone number is wrong");
});

module.exports = logInRouter;