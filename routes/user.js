const express = require("express");
const bodyParser = require("body-parser");
//const path = require("path");
const userController = require("../controllers/users");
const router = express.Router();
const isAuth = require("../Authentication/is-auth");

router.use(bodyParser.urlencoded({ extended: false }));

router.get("/add-user", isAuth, userController.getAddUser);

router.post("/user", isAuth, userController.addNewUser);

router.get("/", isAuth, userController.showUser);

module.exports = router;
