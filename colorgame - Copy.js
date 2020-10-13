var numSquares = 6;
var colors = [];
var squares = document.querySelectorAll(".square");
var pickedColor;
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message")
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");


init();

function init(){
	//mode buttons event listener
	for (var i = 0; i < modeButtons.length; i++){
	modeButtons[i].addEventListener("click", function(){
		modeButtons[0].classList.remove("selected");
		modeButtons[1].classList.remove("selected");
		this.classList.add("selected");
		this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
		reset();
	});
}

	for(var i=0; i<squares.length; i++){
	//add click listeners to squares
	squares[i].addEventListener("click", function(){
		//grab color of clicked square
		var clickedColor = this.style.backgroundColor;
		//compare color to picked color
		if(clickedColor === pickedColor){
			messageDisplay.textContent = "Correct";
			resetButton.textContent = "Play Again?";
			changeColors(clickedColor);
			h1.style.backgroundColor = clickedColor
		} else {
			this.style.background = "#232323";
			messageDisplay.textContent = "Try again";
		}
	});
}
	reset();
}



function reset(){
	colors = generateRandomColors(numSquares);
	//pick a new random color from array
	pickedColor=pickColor();
	//change colorDisplay to match picked color
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = "New Colors"
	messageDisplay.textContent = "";
	for(var i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];		
	} else {
		squares[i].style.display = "none";
		}
	}
	h1.style.background = "steelblue";


}
// easyBtn.addEventListener("click", function(){
// 	hardBtn.classList.remove("selected");
// 	easyBtn.classList.add("selected");
// 	numSquares = 3; 
// 	colors = generateRandomColors(numSquares);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor; 
// 	for(var i = 0; i< squares.length; i++){
// 		if(colors[i]){
// 			squares[i].style.backgroundColor = colors[i];
// 		} else {
// 			squares[i].style.display = "none";
// 		}
// 	}
// })

// hardBtn.addEventListener("click", function(){
// 	easyBtn.classList.remove("selected");
// 	hardBtn.classList.add("selected");
// 	numSquares = 6;
// 	colors = generateRandomColors(numSquares);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor; 
// 	for(var i = 0; i< squares.length; i++){
// 			squares[i].style.backgroundColor = colors[i];
// 			squares[i].style.display = "block";

// 	}
// })


resetButton.addEventListener("click", function(){
	// //generate all new colors
	// colors = generateRandomColors(numSquares);
	// //pick a new random color from array
	// pickedColor=pickColor();
	// //change colorDisplay to match picked color
	// colorDisplay.textContent = pickedColor;
	// this.textContent = "New Colors"
	// messageDisplay.textContent = "";
	// for(var i=0; i<squares.length; i++){
	// 	squares[i].style.backgroundColor = colors[i];
	// }
	// h1.style.background = "steelblue";
	reset();
})



// for(var i=0; i<squares.length; i++){
// 	//add initial colors
// 	squares[i].style.backgroundColor = colors[i];
// 	//add click listeners to squares
// 	squares[i].addEventListener("click", function(){
// 		//grab color of clicked square
// 		var clickedColor = this.style.backgroundColor;
// 		//compare color to picked color
// 		if(clickedColor === pickedColor){
// 			messageDisplay.textContent = "Correct";
// 			resetButton.textContent = "Play Again?";
// 			changeColors(clickedColor);
// 			h1.style.backgroundColor = clickedColor
// 		} else {
// 			this.style.background = "#232323";
// 			messageDisplay.textContent = "Try again";
// 		}
// 	})
// }

function changeColors(color){
	//loop through all squares, we've already done taht 
	for(var i=0; i<squares.length; i++){
	//Change each color to match given color
	squares[i].style.backgroundColor= color; 
	}
}

function pickColor (){
	var random = Math.floor(Math.random() * colors.length);
	return colors [random];	
}

function generateRandomColors(num){
	//make an array
	var arr = []
	//add num random colors to array
	for(var i = 0; i<num; i++)
		arr.push(randomColor())
		//change each color to match given color
	//return that array
	return arr; 
}

function randomColor(){
	//pick a "red" from 0-255, same for red, blue
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";

}