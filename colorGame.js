var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var modeButtons = document.querySelectorAll(".mode");
var resetButton = document.querySelector("#reset");


init();

function init() {
  setUpModeButtons();
  setUpSquares();
  reset();

}



function setUpModeButtons(){
  for (var i = 0; i < modeButtons.length; i++) {
    modeButtons[i].addEventListener("click", function() {
      modeButtons[0].classList.remove("selected");
      modeButtons[1].classList.remove("selected");
      this.classList.add("selected");
      //do tha same as the if statement
      this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
      // if (this.textContent==="Easy") {
      //   numSquares=3;
      // }else {
      //   numSquares=6;
      // }
      reset();
    });
  }
}

function setUpSquares(){
  for (var i = 0; i < squares.length; i++) {
    //add initial colors to squares
    squares[i].style.backgroundColor = colors[i];
    //add click listeners to squares
    squares[i].addEventListener("click", function() {
      //alert of color on clicked square
      var clickedColor = this.style.backgroundColor;
      console.log(clickedColor, pickedColor);
      if (clickedColor === pickedColor) {
        messageDisplay.textContent = "That's it!";
        resetButton.textContent = "Play Again?"
        changeColors(clickedColor);
        h1.style.backgroundColor = clickedColor;
      } else {
        this.style.backgroundColor = "#232323";
        messageDisplay.textContent = "Try Again";
      }
    });
  }
  reset();
}

function reset() {
  colors = generateRanDomColors(numSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  messageDisplay.textContent = "";
  resetButton.textContent = "New Colors"
  for (var i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.display = "block";
      squares[i].style.backgroundColor = colors[i];
    } else {
      squares[i].style.display = "none";
    }
    squares[i].style.backgroundColor = colors[i];
  }
  h1.style.background = "steelblue";

}

resetButton.addEventListener("click", function() {
      reset();
      //   colors = generateRanDomColors(numSquares);
      //   pickedColor = pickColor();
      //   colorDisplay.textContent = pickedColor;
      //   messageDisplay.textContent = "";
      //   this.textContent = "New Colors"
      //   for (var i = 0; i < squares.length; i++) {
      //     squares[i].style.backgroundColor = colors[i];
      //   }
      //   h1.style.background = "steelblue";
      //
      // })

      //colorDisplay.textContent = pickedColor;

});

function changeColors(color) {
  //loop colors on squares
  for (var i = 0; i < colors.length; i++) {
    squares[i].style.backgroundColor = color;
  }
}

function pickColor() {
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRanDomColors(num) {
  var arr = [];
  for (var i = 0; i < num; i++) {
    arr.push(randomColor())
  }
  return arr;

}

function randomColor() {
  //pick blue, gree, red from 0 to 255
  var r = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);

  return "rgb(" + r + ", " + b + ", " + g + ")";
}

// easyBtn.addEventListener("click", function() {
//   easyBtn.classList.add("selected");
//   hardBtn.classList.remove("selected");
//   numSquares = 3;
//   colors = generateRanDomColors(numSquares);
//   pickedColor = pickColor();
//   colorDisplay.textContent = pickedColor;
//   for (var i = 0; i < squares.length; i++) {
//     if (colors[i]) {
//       squares[i].style.backgroundColor = colors[i];
//     } else {
//       squares[i].style.display = "none";
//     }
//   }
// })
//
// hardBtn.addEventListener("click", function() {
//   hardBtn.classList.add("selected");
//   easyBtn.classList.remove("selected");
//   numSquares = 6;
//   colors = generateRanDomColors(numSquares);
//   pickedColor = pickColor();
//   colorDisplay.textContent = pickedColor;
//   for (var i = 0; i < squares.length; i++) {
//     squares[i].style.backgroundColor = colors[i];
//     squares[i].style.display = "block";
//   }
// })
