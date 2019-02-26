const express = require("express");
const userRoute = require("./routes/user");
const path = require("path");
const app = express();
const db = require("./Util/database");
app.set("view engine", "pug");
app.set("views", "views");

app.use(userRoute);
app.use(express.static(path.join(__dirname, "css")));
// db.execute("select * from virtusa_test.tbluser")
//   .then(result => {
//     console.log(result);
//   })
//   .catch(err => {
//     console.log(err);
//   });

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});
app.listen(3000);
