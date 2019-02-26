const db = require("../Util/database");

module.exports = class User {
  constructor(userId, userName, userEmail, userAddress) {
    (this.userId = userId),
      (this.userName = userName),
      (this.userEmail = userEmail),
      (this.userAddress = userAddress);
  }

  save() {
    return db.execute(
      "INSERT INTO tbluser (userName,userEmail,userAddress) VALUES (?,?,?)",
      [this.userName, this.userEmail, this.userAddress]
    );
  }

  static fetchAll() {
    return db.execute("SELECT * FROM tbluser");
  }
};
