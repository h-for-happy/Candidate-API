const TestScore = require("../models/testscore.model.js");

// Insert Test Score
exports.insert = (req, res) => {
    // Validate request
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }
  
    // Create a TestScore
    const testScore = new TestScore({
      RollNo: req.body.RollNo,
      first_round: req.body.first_round,
      second_round: req.body.second_round,
      third_round: req.body.third_round
      
    });
  
    
  
  
    // Save Test Score in the database
    TestScore.insert(testScore, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while inserting Test Score"
        });
      else res.send(data);
    });
  };

  //Get highest scoring candidate
  exports.findHighest = (req, res) => {
    TestScore.getHighest((err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while Getting Highest Score"
        });
      else res.send(data);
    });
  };

  //Get average scores per round for all candidates
    exports.findAverage = (req, res) => {
    TestScore.getAverage((err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while Getting Average Score"
        });
      else res.send(data);
    });
  };