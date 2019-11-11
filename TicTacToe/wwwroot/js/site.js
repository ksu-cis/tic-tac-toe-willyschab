// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your Javascript code.

var turn = "x";

function setTurns() {
	var turnElement = document.getElementById("turn");
	turnElement.innerText = "It is player ${turn}'s turn";
	if(cells[0].innerText === cells[1].innerText && cells[1].innerText === cells[2].innerText){
		setWinner(cells[0]);
	}
}
function setWinner(winner) {
	var turnElement = document.getElementById("turn");
	turnElement.innerText = "Player ${winner} wins!";
}
function checkForWin() {
	var cells = document.getElementByClassName("square");
		for(var i = 0; i < 9; i++) {
			if(cells[i].innerText !== "" && cells[0+i].innerText === cells[1+i].innerText && cells[1+i].innerText === cells[2+i].innerText){
			setWinner(cells[i]);
			return true;
		}
		for(var j = 0; j < 9; j++){
			if(cells[j].innerText !== "" && cells[j].innerText === cells[3+j].innerText && cells[3+j].innerText === cells[6+j].innerText){
				setWinner(cells[j].innerText);
				return true;
			}
		}
	}
}
function onClick(event){
	event.preventDefault();
	if(!event.target.innerText) {
		event.target.innerText = turn;
		if(turn === "x"){
			turn = "o";
		}
		else{
			turn = "x";
		}
		if(!checkForWin){
			setTurns();
		}
	}
}

var cells = document.getElementByClassName("square");
for(var i = 0; i < cells.length; i++) {
	cells[i].addEventListener("click", onClick);
}

setTurns();