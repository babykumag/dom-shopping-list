// var button = document.getElementById("enter");
// var input = document.getElementById("userinput");
// var ul = document.querySelector("ul");
// var li = document.getElementsByTagName('li')


// function inputLength() {
// 	return input.value.length;
// }

// //get length/count of list items
// function liLength() {
// 	return li.length;
// }

// function addListButton(){
// 	var remove = document.createElement("button");
// 	remove.appendChild(document.createTextNode("Remove"));
// 	li[i].appendChild(remove);
// 	remove.onclick = removeList;
// }


// for( i=0;i<liLength();i++){
// 	addListButton();
// }

// function createListElement() {

// 	//----Start of Adding List
// 	//declare variables
// 	var li = document.createElement("li");
// 	//ready to put name
// 	li.appendChild(document.createTextNode(input.value));
// 	//add it on the list of items
// 	ul.appendChild(li);
// 	//clear field input
// 	input.value = "";
// 	//----End of Adding List Item
	
// 	//----Start of Adding Remove button on the list
// 	var remove = document.createElement("button");
// 	remove.appendChild(document.createTextNode("Remove"));
// 	li.appendChild(remove);
// 	remove.onclick = removeList;
// 	//----End of Adding Remove button on the list

// }

// function removeList(event){
// 	event.target.classList.toggle("done");
// 	event.target.parentNode.remove();
// }

// function addListAfterClick() {
// 	if (inputLength() > 0) {
// 		createListElement();
// 	}
// }

// function addListAfterKeypress(event) {
// 	if (inputLength() > 0 && event.keyCode === 13) {
// 		createListElement();
// 	}
// }



// button.addEventListener("click", addListAfterClick);
// input.addEventListener("keypress", addListAfterKeypress);

//===========================OPTION 2==========================================================
var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var li = document.getElementsByTagName('li')


function inputLength() {
	return input.value.length;
}


function createListElement() {

	//----Start of Adding List
	//declare variables
	var li = document.createElement("li");
	//ready to put name
	li.appendChild(document.createTextNode(input.value));
	//add it on the list of items
	ul.appendChild(li);
	//clear field input
	input.value = "";
	//----End of Adding List Item
	
	//----Start of Adding Remove button on the list
	var remove = document.createElement("button");
	remove.appendChild(document.createTextNode("Remove"));
	li.appendChild(remove);


	//----End of Adding Remove button on the list

	for( i=0; i<li.length; i++){
	li[i].addEventListener('click', li[i].classList.toggle("done"))
	}

	//declare the two created element which is list and buttons
	var button = document.querySelectorAll("li button");
	for( i=0; i<button.length; i++){
	button[i].addEventListener('click', clearElement)
	}

}


function clearElement(){
	for(var i=0; i<li.length; i++){
		this.parentNode.remove()
	}
}


function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

for( i=0;i<li.length;i++){
	var remove = document.createElement("button");
	remove.appendChild(document.createTextNode("Remove"));
	li[i].appendChild(remove);
}



button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);