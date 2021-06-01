const Candidate = require("../models/candidate.model.js");


// Create and Save a new candidate
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  // Create a Candidate
  const candidate = new Candidate({
    RollNo: req.body.RollNo,
    EmailAddress: req.body.EmailAddress,
    Name: req.body.Name
    
  });

  


  // Save Customer in the database
  Candidate.create(candidate, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Candidate."
      });
    else res.send(data);
  });
};

// Retrieve all Customers from the database.
exports.findAll = (req, res) => {
    Candidate.getAll((err, data) => {
        if (err)
          res.status(500).send({
            message:
              err.message || "Some error occurred while retrieving candidates."
          });
        else res.send(data);
      });
};
