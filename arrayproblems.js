//1. PrintReverse()	Write a function printReverse() that takes an array as 
//an argument and prints out the elements in the 
//array in reverse order (don't actually reverse the array itself)

var frontways=["work", "to", "reverse", "print", "the", "go", "you", "Wow,"]

function printReverse(frontways){
	for(var i=frontways.length-1; i>=0; i--){
	console.log(frontways[i]);
	}
}

// //2. isUniform() wrie a function isUniform() which
// takes an array as an argument and returns true 
//if all elements in the array are identical

function isUniform (frontways){
for(var i = 0; i<frontways.length-1; i++){
	return(frontways[i] == frontways[i+1]);
	}
}

// //3. sumArray() Write a function sumArray() that accepts
// an array of numbers and returns teh sum of 
//all numbers in the array

function sumArray(array){
	var result = 0; 
	for(var i=0; i<array.length; i++){
		result=result+array[i];
	}
	return result;

}

//4. max() Write a function max() that accepts an array of numbers and 
//returns the maximum number in the array

  function max(bigArray){
  	var result = bigArray[0]
  	for(var i=1; i<bigArray.length; i++){
  		if (bigArray[i]>result){
  			result=bigArray[i];
  		}
}
  		return result;
}