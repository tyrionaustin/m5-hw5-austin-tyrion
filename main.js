var close = document.getElementById('box1');

function showAlert() {
  alert("Oooh - so close, but no cigar")
}

close.onclick = showAlert;


var winner = document.getElementById('box2');

function showAlert2() {
  alert("DING DING DING - We have a winner")
}

winner.addEventListener('click', showAlert2);

var oops = document.getElementById('box3');

function showAlert3() {
  alert("Oops, better luck next time")
}

oops.addEventListener('click', showAlert3);


var box = document.getElementsByTagName('div');

function changeBackground() {
  document.div.style.backgroundColor = 'orange';
} false

box.addEventListener('onmouseover', changeBackground);
