// Konami code
var i = 0;
document.addEventListener('keydown', function(event) {
    if (event.keyCode == 38) {
		setTimeout(konami2(),200)
    }
}, true);

function konami2(){
	document.addEventListener('keydown', function(event) {
    if (event.keyCode == 38) {
		setTimeout(konami3(),200)
    }
}, true);
}

function konami3(){
	document.addEventListener('keydown', function(event) {
    if (event.keyCode == 40) {
		setTimeout(konami4(),200)
    }
}, true);
}

function konami4(){
	document.addEventListener('keydown', function(event) {
    if (event.keyCode == 40) {
		setTimeout(konami5(),200)
    }
}, true);
}

function konami5(){
	document.addEventListener('keydown', function(event) {
    if (event.keyCode == 37) {
		setTimeout(konami6(),200)
    }
}, true);
}
function konami6(){
	document.addEventListener('keydown', function(event) {
    if (event.keyCode == 39) {
		setTimeout(konami7(),200)
    }
}, true);
}
function konami7(){
	document.addEventListener('keydown', function(event) {
    if (event.keyCode == 37) {
		setTimeout(konami8(),200)
    }
}, true);
}
function konami8(){
	document.addEventListener('keydown', function(event) {
    if (event.keyCode == 39) {
		setTimeout(konami9(),200)
    }
}, true);
}
function konami9(){
	document.addEventListener('keydown', function(event) {
    if (event.keyCode == 66) {
		setTimeout(konami10(),200)
    }
}, true);
}
function konami10(){
	document.addEventListener('keydown', function(event) {
    if (event.keyCode == 65 && i == 0) {
		i = 1;
		window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ','RICKROLL','width=600,height=400')
		}
	}, true);
}
