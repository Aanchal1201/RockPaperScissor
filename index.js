let yourSelection = document.getElementById("yourSelection");
let ComSelection = document.getElementById("ComSelection");
let userScore = document.getElementById("userScore");
let ComScore = document.getElementById("ComScore");
let message = document.getElementById("message");
const choices = ["Rock", "Paper", "Scissor"];

function ComputerSelection() {
  var selectIndex = Math.floor(Math.random() * 3);
  return choices[selectIndex];
}

function Selection(e) {
  yourSelection = e;
  ComSelection = ComputerSelection();
  document.getElementById("yourSelection").innerHTML = String(yourSelection);
  document.getElementById("ComSelection").innerHTML = String(ComSelection);
  if (yourSelection == ComSelection) {
    message.innerHTML = "Its a Draw";
  } else if (yourSelection == "Rock") {
    if (ComSelection == "Paper") {
      ComputerWins();
    } else {
      UserWins();
    }
  } else if (yourSelection == "Paper") {
    if (ComSelection == "Scissor") {
      ComputerWins();
    } else {
      UserWins();
    }
  } else if (yourSelection == "Scissor") {
    if (ComSelection == "Rock") {
      ComputerWins();
    } else {
      UserWins();
    }
  }
}

function ComputerWins() {
  ComScore.innerHTML = Number(ComScore.innerHTML) + 1;
  message.innerHTML = "Computer Wins";
}

function UserWins() {
  userScore.innerHTML = Number(userScore.innerHTML) + 1;
  message.innerHTML = "User Wins";
}

function ResetAll() {
  ComScore.innerHTML = 0;
  userScore.innerHTML = 0;
  document.getElementById("yourSelection").innerHTML = "";
  document.getElementById("ComSelection").innerHTML = "";
  message.innerHTML = "";
}
