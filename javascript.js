i = null;
var s = 0;

function startGameCode() { // function to run when game starts
  var startResetStatus = document.getElementById('startOrReset'); // checking to see if we're starting a new game, or resetting a game
  if (startResetStatus.textContent == 'Start') { // checking if the button says "Start"; "textContent" gets the actual text inside a span

    // intilizing page
    startResetStatus.textContent = 'Reset'; // change text to "Reset"
    var score = document.getElementById('scoreValue');
    score.textContent = 0; // setting the score to equal 0
    var timerBox = document.getElementById('timeRemaining'); // this is our timer
    timerBox.style.display = 'block' // this makes our timer div visible; "block" is the default for "visible" display
    var counter = document.getElementById('timeValue'); // this is the actual value of the timer; starts at 60
    var t = 60; // initial time timeValue
    myCounter = setInterval(function(){
      t--;
      counter.innerHTML = t;
      if (t == 0) {
        clearInterval(myCounter);
        finishBox();
      }
    },1000); // decrements timer every second
    // page initialized

    // choosing which type of math game to play
    whichMath();
    // math game is chosen

    // generating a math problem to display
    mathChoose(whichMath1)
    // math problem chosen and displayed

    // populating answer boxes and storing correct one
    whichBox(correctAnswer);
    return i;
    // end of "start" click function
  } else {
    s = 0;
    location.reload(); // reloading game if user clicks "reset"
  }
}

function xCheck() { // checking to see if they've clicked the correct box
  if (x == 1) { // code to run if they clicked the correct box
    s++;
    var score = document.getElementById('scoreValue'); // adding 1 to the score each time the correct answer is clicked
    score.textContent = s;

    var correct = document.getElementById('correct'); // fading the "correct" box in and out
    correct.style.opacity = 1;
    setTimeout(()=>{correct.style.opacity = 0},750);

    // choosing which type of math game to play
    whichMath();
    // math game is chosen

    // generating a math problem to display
    mathChoose(whichMath1);
    // math problem chosen and displayed

    // populating answer boxes and storing correct one
    whichBox(correctAnswer);
    return i;
    // end of "start" click function
  } else {
    var wrong = document.getElementById('wrong'); // fading the "wrong" box in and out
    wrong.style.opacity = 1;
    setTimeout(()=>{wrong.style.opacity = 0},750);  }
}
// ------------------------------------------------------------------------------------------------------------------------------------------
// same function repeated for each box; there should be a way to do this with "activeElement" in just one function, but I haven't figured it
// out yet
function boxClick1() { // code to execute each time box 1 is clicked
  var startResetStatus = document.getElementById('startOrReset'); // checking to see if we're starting a new game, or resetting a game
  var box1 = document.querySelector('#box1'); // calling the actual boxes
  var box2 = document.querySelector('#box2');
  var box3 = document.querySelector('#box3');
  var box4 = document.querySelector('#box4');

  const boxes = [box1,box2,box3,box4];
  var correctBox = boxes[i]; // calling correct box

  if (correctBox === document.querySelector('#box1')) { // checking if "i" exists; if it  does, that means the game has started
    x = 1; // this will be how to tell if the correct box is clicked; may be a better way
  } else {
    x = 0;
  }
  return x;
}

function boxClick2() { // code to execute each time box 2 is clicked
  var startResetStatus = document.getElementById('startOrReset'); // checking to see if we're starting a new game, or resetting a game
  var box1 = document.querySelector('#box1'); // calling the actual boxes
  var box2 = document.querySelector('#box2');
  var box3 = document.querySelector('#box3');
  var box4 = document.querySelector('#box4');

  const boxes = [box1,box2,box3,box4];
  var correctBox = boxes[i]; // calling correct box

  if (correctBox === document.querySelector('#box2')) { // checking if "i" exists; if it  does, that means the game has started
    x = 1; // this will be how to tell if the correct box is clicked; may be a better way
  } else {
    x = 0;
  }
  return x;
}

function boxClick3() { // code to execute each time box 3 is clicked
  var startResetStatus = document.getElementById('startOrReset'); // checking to see if we're starting a new game, or resetting a game
  var box1 = document.querySelector('#box1'); // calling the actual boxes
  var box2 = document.querySelector('#box2');
  var box3 = document.querySelector('#box3');
  var box4 = document.querySelector('#box4');

  const boxes = [box1,box2,box3,box4];
  var correctBox = boxes[i]; // calling correct box

  if (correctBox === document.querySelector('#box3')) { // checking if "i" exists; if it  does, that means the game has started
    x = 1; // this will be how to tell if the correct box is clicked; may be a better way
  } else {
    x = 0;
  }
  return x;
}

function boxClick4() { // code to execute each time box 4 are clicked
  var startResetStatus = document.getElementById('startOrReset'); // checking to see if we're starting a new game, or resetting a game
  var box1 = document.querySelector('#box1'); // calling the actual boxes
  var box2 = document.querySelector('#box2');
  var box3 = document.querySelector('#box3');
  var box4 = document.querySelector('#box4');

  const boxes = [box1,box2,box3,box4];
  var correctBox = boxes[i]; // calling correct box

  if (correctBox === document.querySelector('#box4')) { // checking if "i" exists; if it  does, that means the game has started
    x = 1; // this will be how to tell if the correct box is clicked; may be a better way
  } else {
    x = 0;
  }
  return x;
}
// ------------------------------------------------------------------------------------------------------------------------------------------

function whichMath() { // function that chooses which math game
  const whichGame = ['addition','subtraction','multiplication','division'] // array of math operations
  i = Math.floor(Math.random() * 4); // chooses a random math operation
  whichMath1 = whichGame[i];
  return whichMath1;
}

function mathChoose(whichMath) { // generating a math problem to display
  if (whichMath === 'addition') { // checking to see which math problem has been randomly selected
    addition();
  } else if (whichMath==='subtraction') {
    subtraction();
  } else if (whichMath==='multiplication') {
    multiplication();
  }  else {
    division();
  }
  return correctAnswer;
}

function addition() { // function for addition question
  var firstNumber = Math.floor(Math.random() * 101); // chooses a number between 0 and 100
  var secondNumber = Math.floor(Math.random() * 101);
  document.getElementById('firstNumber').textContent = firstNumber; // setting the span text to be equal to the two random numbers
  document.getElementById('secondNumber').textContent = secondNumber;
  document.getElementById('operator').textContent = '+'; // showing a plus sign
  correctAnswer = firstNumber + secondNumber; // adding the numbers for result
  return correctAnswer;
}

function subtraction() { // function for subtraction question
  var firstNumber = Math.floor(Math.random() * 101); // chooses a number between 0 and 100
  var secondNumber = Math.floor(Math.random() * 101);
  document.getElementById('firstNumber').textContent = firstNumber; // setting the span text to be equal to the two random numbers
  document.getElementById('secondNumber').textContent = secondNumber;
  document.getElementById('operator').textContent = '-'; // showing a minus sign
  correctAnswer = firstNumber - secondNumber; // subracting the numbers for result
  return correctAnswer;
}

function multiplication() { // function for multiplication question
  var firstNumber = Math.floor(Math.random() * 11); // chooses a number between 0 and 10
  var secondNumber = Math.floor(Math.random() * 11);
  document.getElementById('firstNumber').textContent = firstNumber; // setting the span text to be equal to the two random numbers
  document.getElementById('secondNumber').textContent = secondNumber;
  document.getElementById('operator').textContent = 'x'; // showing a multiply sign
  correctAnswer = firstNumber * secondNumber; // multiplying the numbers for result
  return correctAnswer;
}

function division() { // function for division question
  correctAnswer = .1 // we need a while loop to make sure the result is an integer; this is a dummy non-integer value
  while (Number.isInteger(correctAnswer) != true) { // this loop will run each time "correctAnswer" is not a whole number
    var firstNumber = Math.floor(Math.random() * 101); // chooses a number between 0 and 100
    var secondNumber = Math.floor(Math.random() * 101);
    correctAnswer = firstNumber / secondNumber; //dividing numbers for result
  }
  document.getElementById('firstNumber').textContent = firstNumber; // setting the span text to be equal to the two random numbers
  document.getElementById('secondNumber').textContent = secondNumber;
  document.getElementById('operator').textContent = '/'; // showing a divide sign
  return correctAnswer;
}

function whichBox(correct) {
  var box1Value = document.getElementById('box1Value'); // calling the spans that will hold potential answers
  var box2Value = document.getElementById('box2Value');
  var box3Value = document.getElementById('box3Value');
  var box4Value = document.getElementById('box4Value');

  var correctBoxValue = [box1Value,box2Value,box3Value,box4Value]; // array of each answer box;
  i = Math.floor(Math.random() * 4); // randomly choosing a box
  correctBoxValue[i].textContent = correct; // populating box

  var box1 = document.getElementById('box1'); // calling the qctual box that will hold potential answers
  var box2 = document.getElementById('box2');
  var box3 = document.getElementById('box3');
  var box4 = document.getElementById('box4');
  var boxArray = [box1,box2,box3,box4];
  correctBox = boxArray[i]; // storing which box is correct

  for (var j = 0;j < 4;j++){ // populating the rest of the boxes with incorrect answers
    if (j != i) { // runs only if the box number isn't the same as the correct one
      incorrect = Math.floor(Math.random() * 401) - 200;
      correctBoxValue[j].textContent = incorrect; // populating the rest of the boxes
    }
  }

  return i;
}

function finishBox() {
  var gameOver = document.getElementById('gameOver');
  gameOver.style.opacity = 1;
  var finalScore = document.getElementById('finalScore');
  var scoreValue = document.getElementById('scoreValue');
  finalScore.textContent = scoreValue.textContent;
}
