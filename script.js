// JavaScript Document 
//else if (isDenot==false && pressTwice==true)
//} else if (isDenot==true && pressTwice==false){
var score="";

console.log=("come into the water")


var savedCard = null;

function onClickAa() {
	document.getElementById("a012").src="images/A rti.jpg"
	
	if(savedCard == null) {
		savedCard = "a";
	} else {
		if(savedCard == "a") {
			//zelfde -> laten staan
			savedCard = null;
		} else{
			// niet zelfde -> terug omdraaien
			document.getElementById("a012").src="images/bg.png"
			
			savedCard = null;
		} 
	} 
}
function onClickAb() {
	document.getElementById("a022").src="images/A rti.jpg"
	
	if(savedCard == null) {
		savedCard = "a";
	} else {
		if(savedCard == "a") {
			//zelfde -> laten staan
			
			savedCard = null;
		} else{
			// niet zelfde -> terug omdraaien
			document.getElementById("a022").src="images/bg.png"
			
			savedCard = null;
		} 
	}
}
function onClickBa() {
	document.getElementById("b012").src="images/B ms.avif"
	
}
function onClickBb() {
	document.getElementById("b022").src="images/B ms.avif"
	
}
function onClickCa() {
	document.getElementById("c012").src="images/C nit.jpg"
	
}
function onClickCb() {
	document.getElementById("c022").src="images/C nit.jpg"
	
}
function onClickDa() {
	document.getElementById("d012").src="images/D enot.avif"
	
}
function onClickDb() {
	
 }



