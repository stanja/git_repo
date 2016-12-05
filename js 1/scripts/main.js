//Functions: piece of code that does one or more actions

//	var name=prompt();
//	function go(name, age) {
//		if (age < 20) {
//			return name+'!';
//		} else {
//			return name
//		}	
//	}
//	
//	
//	alert (go(name, 21));
function go(){
	alert('hi');
}
//Arrays

	var myList = ['apples', 12, go, ['Tanja', 'Ika']];
//	myList[0] = 'waterlemon';
//	
//	myList.forEach(function(value, index){
//		console.log(value, index);
//	});

//Loop
//while do for

var times = 0;
while (times<10) {
	console.log('tried it', times);
	times++;
}

//for(setup variable, comparation, change)
	

for(var i=0; i < myList.length; i++) {
	console.log('you have '+myList[i]);
}
