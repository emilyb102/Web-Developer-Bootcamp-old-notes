window.setTimeout(function(){


var todos = ["Sleep"];

var input=prompt("What would you like to do");



while(input !=="quit"){
// handle input
	if(input==="list"){
		listTodos()
	}	else if(input ==="new"){
		addTodo()
	}	else if(input ==="delete"){
		deleteTodo()
	}
//ask again for new input
	input=prompt("What would you like to do");

}
console.log("Ok, you quit the app")

//Function list to clean up our loop-
function listTodos(){
	console.log("_/-\__/-\__/-\__/-\_")
	todos.forEach(function(todo, index){
		console.log(index +": " +todo)
	});
	console.log("_/-\__/-\__/-\__/-\_")
}

function addTodo(){
	//ask for new to do
	var newTodo=prompt("Enter new todo");
	//add to todos array
	todos.push(newTodo);
	console.log("Added Todo");
}

function deleteTodo(){
		//ask for index of todo to be deleted
	index=prompt("Enter index of todo to delete");
	//delete that todo
	todos.splice(index,1);
	console.log("Deleted Todo");
}

}, 500);