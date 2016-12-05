var checklist = document.getElementById("checklist");

var items = checklist.querySelectorAll("li");
var inputs = checklist.querySelectorAll("input");

for (var i = 0; i < items.length; i++) {
	items[i].addEventListener("click", editItem);
	inputs[i].addEventListener("blur", updateItem);
}

function editItem() {
	this.className = "edit";
	var input = this.querySelector("input");
	input.focus();
	console.log("my current value is ", input.value.length);
	//input.setSelectionRange(0, input.value.length);
}

function updateItem() {
	this.previousElementSibling.innerHTML = this.value;
	//console.log(this.parentNode.className);
    this.parentNode.className = "";
}