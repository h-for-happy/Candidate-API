const sql = require("./db.js");

//constructor

const TestScore = function(testScore){
    this.RollNo = testScore.RollNo;
    this.first_round = testScore.first_round;
    this.second_round = testScore.second_round;
    this.third_round = testScore.third_round;
}

//Queries for different Operations to be performed

TestScore.insert = (newTestScore, result) => {
    sql.query("INSERT INTO test_score SET ?", newTestScore, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
  
      console.log("Test Score Inserted: ", { newTestScore });
      result(null, { newTestScore });
    });
  };
  
  TestScore.getHighest = result => {
    sql.query("select RollNo, (first_round + second_round + third_round) as highest_score from test_score WHERE (first_round + second_round + third_round)=(select max((first_round + second_round + third_round))from test_score ) ;", (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      console.log("result: ", res);
      result(null, res);
    });
  };

  TestScore.getAverage = result => {
    sql.query("select avg(first_round) as Average_First_Round,avg(second_round) as Average_Second_Round, avg(third_round) as Average_Third_Round from test_score;", (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      console.log("result: ", res);
      result(null, res);
    });
  };

module.exports = TestScore;

// select C.Name, t.RollNo,MAX(t.first_round + t.second_round + t.third_round) as total from test_score t, Candidate C;