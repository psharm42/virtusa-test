const path = require("path");
const User = require("../models/user");

exports.getAddUser = (req, res, next) => {
  res.sendFile(path.join(__dirname, "../", "views", "add-user.html"));
};

exports.addNewUser = (req, res, next) => {
  const objUser = new User(
    1,
    req.body.userName,
    req.body.userEmail,
    req.body.userAddress
  );

  objUser
    .save()
    .then(data => {
      res.redirect("/");
    })
    .catch(err => {});
};

exports.showUser = (req, res, next) => {
  User.fetchAll()
    .then(([rows, filedData]) => {
      res.render("user", { userData: rows });
    })
    .catch(err => {});
};
