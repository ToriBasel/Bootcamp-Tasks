const john_team_scors = [89, 120, 103];
const mike_team_scors = [116, 94, 123];


average = (arr) => arr.reduce((a, b) => a + b, 0) / arr.length;

const john_team_avg = average(john_team_scors);
const mike_team_avg = average(mike_team_scors);

//2
winnerAnnouncing = () => {
  let winner = '';
  let winner_avg = 0;
  if (john_team_avg > mike_team_avg) {
    winner = "Johan's team";
    winner_avg = john_team_avg;
  } else {
    winner = "Mike's team";
    winner_avg = mike_team_avg;
  }

  console.log(`${winner} wins, with arerage score of ${winner_avg}`);
};

winnerAnnouncing();