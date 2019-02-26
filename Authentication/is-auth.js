const isLoggedIn = require("../config/config");
module.exports = (req, res, next) => {
  if (!isLoggedIn)
    return res.send(
      "<h1>Please login first to add and view User details. To do so Please go to config folder, and update config.js file and set isLoggedIn = true</h1>"
    );
  next();
};
