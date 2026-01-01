const score = { nos: 0, ellos: 0 };
const current_row = { nos: 1, ellos: 1 };
let id = "";
let image_index = 0;
let current_row_aux = 1;
const score_img = [
	'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
	'imagenes/1.png',
	'imagenes/2.png', 
	'imagenes/3.png',
	'imagenes/4.png',
	'imagenes/5.png'];

function newGame() {
	if (confirm("¿Querés empezar una partida nueva?") == true) {
		location.reload();
	}
}

function changeScore(side, value) { 
	score[side] = score[side] + value;
	if (score[side] < 0) {score[side] = 0;}
	if (score[side] > 30) {score[side] = 30;}

	current_row_aux = current_row[side];
	current_row[side] = Math.ceil(score[side]/5) || 1; // Funcion de parte entera techo 

	if (current_row[side] < current_row_aux) {
		id = "fila" + current_row_aux + side;
		const img = document.getElementById(id);
		if (img) {img.src = score_img[0];}
	}

	image_index = score[side] % 5;
	if (image_index === 0 && score[side] > 0){image_index = 5;}

	id = "fila" + current_row[side] + side;
	const img = document.getElementById(id);

	if (img) {img.src = score_img[image_index];}
	if (score[side] >= 30) {
		setTimeout(function() {newGame();},250); // Timeout para que el ultimo fosforo aparezca 
	}
}

const add_nos_btn = document.getElementById("add_nos");
add_nos_btn.addEventListener('click', changeScore('nos',+1));
const sub_nos_btn = document.getElementById("-nos");
sub_nos_btn.addEventListener("click", changeScore('nos',-1));
const add_ellos_btn = document.getElementById("+ellos");
add_ellos_btn.addEventListener("click", changeScore('ellos',+1));
const sub_ellos_btn = document.getElementById("-ellos");
sub_ellos_btn.addEventListener("click", changeScore('ellos',-1));

console.log("sourced");
