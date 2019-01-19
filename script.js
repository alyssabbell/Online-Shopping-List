var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var listItems = document.getElementsByTagName("li");

var i = 0;
/* populates all list items with delete button */
for(i=0; i < listItems.length; i++) {
	addDeleteButtonForListItem(listItems[i]);
}

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);
ul.addEventListener("click", crossOutItem);


/* - - - - - - - - - - FUNCTION DECLARATIONS - - - - - - - - - */

/* adds delete button to list item but keeps it hidden */
function addDeleteButtonForListItem(listItems) {
	var delButton = document.createElement("button");
	// added delButtons class to all Delete buttons
	delButton.classList.add("delButtons");
	/* append text to delButton */
	delButton.appendChild(document.createTextNode("Delete"));
	/* append button to listItems */
	listItems.appendChild(delButton);

	delButton.addEventListener("click", function() {
		listItems.parentNode.removeChild(listItems); 

	});

	/* immediately hide the delete buttons when they're created - 
	only display when list item is toggled */
	delButton.style.visibility = "hidden";
}

function inputLength() {
	return input.value.length;
}


function createListElement() {
	if (inputLength() > 0 ) {
		var li = document.createElement("li");
		li.appendChild(document.createTextNode(input.value));
		ul.appendChild(li);
		addDeleteButtonForListItem(li);
		input.value = "";
	} else {
		alert("You must enter a value before you hit enter.");
	}
}

/* adds item to list after Enter button is clicked */
function addListAfterClick() {

		createListElement();
}

/* adds item to list after return key is pressed */
function addListAfterKeypress(event) {
	if (event.keyCode === 13) {
		createListElement();
	}
}

/* toggles line through item that is clicked on, and then 
displays delete button if the item has line through it*/
function crossOutItem(event) {
	// storing the li item that is the target of the click event
	var item = event.target;

	var deleteButton = item.getElementsByClassName("delButtons")[0];
	
	item.classList.toggle("done");
	

	if (deleteButton.classList.toggle("done")) {
		deleteButton.style.visibility = "visible";
	} else {
		deleteButton.style.visibility = "hidden";
	}

}


/* - - - - - - - - - END FUNCTION DECLARATIONS - - - - - - - - */

