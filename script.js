// JavaScript Document 
//else if (isDenot==false && pressTwice==true)
//} else if (isDenot==true && pressTwice==false){
var score = 0;
var pairs = 4;
var pairsFound = 0;

console.log=("come into the water")


var savedCard = null;
var savedTileId = null;

function onClickAa() {
	document.getElementById("a012").src="images/A rti.jpg";
	
	setTimeout( () => {
		compareTile("a","a012");
	}, 500);
	
}

function compareTile(tile, tileId) {
	if(savedCard == null) {
		savedCard =tile;
		savedTileId = tileId;
	} else {
		scoreCounter();
		if(savedCard == tile) {
			//zelfde -> laten staan
			
			pairsFound = pairsFound + 1;
			doWeWinThough();
		} else{
			// niet zelfde -> terug omdraaien
			document.getElementById(tileId).src="images/bg.png";
			document.getElementById(savedTileId).src="images/bg.png";
			
		} 
		
		savedCard = null;
		savedTileId = null;
	} 
}


function onClickAb() {
	document.getElementById("a022").src="images/A rti.jpg"
	setTimeout( () => {
		compareTile("a","a022");
	}, 500);
}
function onClickBa() {
	document.getElementById("b012").src="images/B ms.avif"
	
	setTimeout( () => {
		compareTile("b","b012");
	}, 500);
	
}
function onClickBb() {
	document.getElementById("b022").src="images/B ms.avif"
	
	setTimeout( () => {
		compareTile("b","b022");
	}, 500);
}
function onClickCa() {
	document.getElementById("c012").src="images/C nit.jpg"
	
	setTimeout( () => {
		compareTile("c","c012");
	}, 500);
}
function onClickCb() {
	document.getElementById("c022").src="images/C nit.jpg"
	
	setTimeout( () => {
		compareTile("c","c022");
	}, 500);
}
function onClickDa() {
	document.getElementById("d012").src="images/D enot.avif"
	
	setTimeout( () => {
		compareTile("d","d012");
	}, 500);
}
function onClickDb() {
	document.getElementById("d022").src="images/D enot.avif"
	
	setTimeout( () => {
		compareTile("d","d022");
	}, 500);
 }

function scoreCounter(){
	score = score + 1;
	document.getElementById("scoredisplayer").textContent=score;
}

function doWeWinThough() {
	if(pairsFound == pairs) {
		alert("won game in "+  score +" tries yay!!!! such a gamer!!" );
	}	
}
