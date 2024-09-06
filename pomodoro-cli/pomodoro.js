// Game
// setTimer for 25 mins to study and then 5 minutes break
// after 4 such 20 mins study take a break of 30 mins long break and then continue thre steps from start

// input from CLI

const readline = require("node:readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const studyTime = 25 * 60; // 25 minutes
const shortBreakTime = 5 * 60;
const longBreakTime = 20 * 60;

const startTimer = (streak, zone, time) => {
  console.log(`Currently started with the ${zone} Zone`);
  setTimeout(() => {
    console.log("Successfully completed your", zone);
    if (zone === "study") {
      if (streak == 3) {
        // after 4 times studying then we go to long break
        startTimer(streak, "break", longBreakTime);
      } else {
        startTimer(streak, "break", shortBreakTime);
      }
    } else {
      startTimer((streak + 1) % 4, "study", studyTime);
    }
  }, time * 1000);
};

rl.question(`Let us Start the Timer (Y/N) : `, (start) => {
  if (start.toLowerCase() === "y") {
    startTimer(0, "study", studyTime);
  } else {
    console.log("The Timer Does not Start.... Thank You Visit Again");
  }
  rl.close();
});
