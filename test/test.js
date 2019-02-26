const chai = require("chai");
const userController = require("../controllers/users");
const User = require("../models/user");

const should = chai.should();
const expect = chai.expect;

describe("Virtusa-TestCode", function() {
  it("test case for GET Request", function(done) {
    User.fetchAll().then(([row, fields]) => {
      if (row.length > 0) {
        row[0].should.have.property("userName");
        row[0].should.have.property("userEmail");
        row[0].should.have.property("userAddress");
      }
    });
    done();
  });
});
