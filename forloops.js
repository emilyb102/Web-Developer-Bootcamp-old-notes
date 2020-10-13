//Print all numbers between -10 and 19//
// While loop reference: 
// var count = -11
// while (count <20){
// 	console.log(count)
// 	count++
// }

for(var i=-11; i<20; i++){
	console.log(i)
}

//Print all even numbers betwen 10 and 40
// While loop reference: 
// var alpha =10
// while(alpha<=40) {
// 	console.log(alpha);
// 	alpha+=2;
// }

for(var i=10; i<=40; i+=2){
	console.log(i);
}
//Print all odd numbers between 300 and 333
// While Loop Reference: 
// var beta=301
// while(beta<334) {
// 	console.log(beta);
// 	beta+=2;
// }

for(var i=301; i<334; i+=2){
	console.log(i);
}
//Print numbers divisible by 5 AND 3 between 5 and 50
// While Loop Reference: 
// var gamma =5
// while (gamma<51){
// 	if (gamma%5===0 && gamma%3===0){
// 		console.log(gamma)
// 	}
// 	gamma++
// }

for(i=5; i<50; i++){
	if (i%5===0 && i%3===0){
		console.log(i)
	}
}