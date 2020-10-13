//First we want to ask a user, 'are we there yet?'

// var answer = prompt("are we there yet?");

// //Without a while loop we could do this, but it would only run one time: 

// // if(answer==="yes"){
// // 	alert("YAY, we made it!")
// // } else {
// // 	var answer =prompt("are we there yet?");
// // }

// while(answer !=="yes" && answer !="yeah"){
// 	var answer =prompt("are we there yet?");
// }

// alert("Yay, we made it!")

//So elegant! 
//If you want it so you can enter any string as long as it contains yes in it, use 'index of'
//index of returns back the number where the letter you input occurs in the string, but if it doesn't exist 
//in the string it spits out -1

var answer = prompt("are we there yet?");
while((answer.indexOf("yes") ===-1) && (answer.indexOf("yeah") ===-1)) {
	var answer =prompt("are we there yet?");
}

alert("Yay, we made it!")