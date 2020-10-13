var button = document.querySelector("button"); 
var div = document.querySelector("div");

button.addEventListener("click", function (){
	div.classList.toggle("clicked");
})