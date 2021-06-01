const sql = require("./db.js");

// constructor
const Candidate = function(candidate) {
  this.RollNo = candidate.RollNo;
  this.Name = candidate.Name;
  this.EmailAddress = candidate.EmailAddress;
  
  
};
//Queries for different Operations to be performed

Candidate.create = (newCandidate, result) => {
  sql.query("INSERT INTO candidate SET ?", newCandidate, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created candidate: ", { newCandidate });
    result(null, { newCandidate });
  });
};


Candidate.getAll = result => {
  sql.query("SELECT * FROM candidate", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("candidate: ", res);
    result(null, res);
  });
};


module.exports = Candidate;