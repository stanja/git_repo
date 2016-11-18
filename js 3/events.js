var numOne = document.getElementById("num-one");
var numTwo = document.getElementById("num-two");
var addSum = document.getElementById("add-sum");

//	numOne.addEventListener("click", function(){
//		alert("Hi");
//		});
//	
//	numTwo.addEventListener("mouseenter", function(){
//		alert("Hi");
//	    });
//

numOne.addEventListener("input", add);
numTwo.addEventListener("input", add);
	
 function add(){
	 var one = parseFloat(numOne.value) || 0;
     var two = parseFloat(numTwo.value) || 0;
	 sum = one + two
	 addSum.innerHTML = "Your sum is: " + sum;
	 }

	 
var simon = document.getElementById("simon");
var bruce = document.getElementById("bruce");

simon.addEventListener("click", picLink);
bruce.addEventListener("click", picLink);

function picLink() {
	var allImages = document.querySelectorAll("img");
	for(var i = 0; i < allImages.length;i++){
		allImages[i].className = "hide";
	}

	var picId = this.attributes["data-img"].value;
	console.log(picId);
	var pic = document.getElementById(picId);
	if(pic.className === "hide") {
		pic.className = "";
	} else {
		pic.className = "hide";
		}
	}
	

