module.exports = app => {
    const candidates = require("../controllers/candidate.controller.js");
    const testScore = require("..//controllers/testscore.controller.js");
    // Create a new Candidate
    app.post("/candidate", candidates.create);
  
    // Retrieve all Candidates
    app.get("/candidates", candidates.findAll);
  
    // Find Result
    app.get("/highestScore", testScore.findHighest);

    // Find Average per Round
    app.get("/average", testScore.findAverage);
  
    // Assign Score to a Candidate
    app.post("/testscore", testScore.insert);
  
    
  };