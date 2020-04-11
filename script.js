//MAIN
let main = document.createElement('main');
main.className = "main-container";
document.body.prepend(main);

//TEXTAREA
let textarea = document.createElement('textarea');
textarea.className = "textarea-container";
textarea.id = "textarea-container";
main.prepend(textarea);
document.getElementById("textarea-container").autofocus = true;

let h3 = document.createElement('h3');
h3.innerHTML = "To change language press CTRL + SHIFT";
textarea.after(h3);
//KEYBOARD CONTAINER
let keyboard = document.createElement('div');
keyboard.className = "keyboard-container";
textarea.after(keyboard);

//KEYBOARD CONSTRUCTION
let layout = [["`","1","2","3","4","5","6","7","8","9","0","Backspace"],
            ["Tab","q","w","e","r","t","y","u","i","o","p","[","]","DEL"],
            ["CapsLock","a","s","d","f","g","h","j","k","l",";","'","Enter"],
            ["Shift","z","x","c","v","b","n","m",",",".","/","Up","LANG"],
			["Ctrl","Win","Alt"," ","Left","Down","Right"]];
let Rus_layout = ["`","1","2","3","4","5","6","7","8","9","0","Backspace",
            "Tab","й","ц","у","к","е","н","г","ш","щ","з","х","ъ","DEL",
            "CapsLock","ф","ы","в","а","п","р","о","л","д","ж","э","Enter",
            "Shift","я","ч","с","м","и","т","ь","б","ю",".","Up","LANG",
			"Ctrl","Win","Alt"," ","Left","Down","Right"];
			
for(let i = 0; i < layout.length; i++){	
	section = document.createElement('section');
	section.className = "keyboard-row";
	keyboard.append(section);
for(let j = 0; j < layout[i].length; j++){
	button = document.createElement('button');
	button.innerHTML = layout[i][j];
	button.id = layout[i][j] + "-btn";
	button.className = layout[i][j] + "-btn";	
	section.append(button);
}
}

let TAB = document.getElementById("Tab-btn"),
	CAPSLOCK = document.getElementById("CapsLock-btn"),
	CTRL = document.getElementById("Ctrl-btn"),
	WIN = document.getElementById("Win-btn"),
	ALT = document.getElementById("Alt-btn"),
	BACKSPACE = document.getElementById("Backspace-btn"),
	ENTER = document.getElementById("Enter-btn"),
	SHIFT = document.getElementById("Shift-btn"),
	DEL = document.getElementById("DEL-btn"),
	LEFT = document.getElementById("Left-btn"),
	RIGHT = document.getElementById("Right-btn"),
	UP = document.getElementById("Up-btn"),
	DOWN = document.getElementById("Down-btn");
	CTRL.id = "Control-btn";
	WIN.id = "Meta-btn";
	DEL.id = "Delete-btn";
	UP.id = "ArrowUp-btn";
	DOWN.id = "ArrowDown-btn";
	LEFT.id = "ArrowLeft-btn";
	RIGHT.id = "ArrowRight-btn";
	
//INPUT DATA FROM REAL KEYBOARD
document.addEventListener('keydown', function(event) {
let x = event.code;
let y = x.indexOf('Key');
let z = x.indexOf('Digit');
let n = event.key;
let k = event.code;
let m, ID;

ID = (n.length < 2 && n != " " && n != "`")? (k.slice(-1).toLowerCase() + "-btn"):(n + "-btn");
m = document.getElementById(ID);		 
m.style.background = "yellow";
m.style.color = "black";		 
	

let str = textarea.innerHTML;	


	if(n == "Backspace")
		textarea.innerHTML = str.slice(0,-1);
	if(n == "Delete")
		textarea.innerHTML = str.slice(0,-2) + str.slice(-1);	
	if(n == "Tab")	
		textarea.innerHTML +="   ";
	if(n == " ")	
		textarea.innerHTML +=" ";
	if(n == "Enter")	
		textarea.innerHTML +="\n";
	if(n == "CapsLock")
		CapsLock();
	if(document.getElementById("Control-btn").style.background == "yellow" && document.getElementById("Shift-btn").style.background == "yellow"){
		LangChange();
		LangIconChange();
	}	
	if(n == "ArrowRight")
		textarea.innerHTML +="→";
	if(n == "ArrowLeft")
		textarea.innerHTML +="←";
	if(n == "ArrowUp")
		textarea.innerHTML +="↑";
	if(n == "ArrowDown")
		textarea.innerHTML +="↓";
	if(y != -1 || z != -1)
		textarea.innerHTML += event.key;
});

document.addEventListener('keyup', function(event) {
	let n = event.key;
	let k = event.code;
	let ID;

	ID = (n.length < 2 && n != " " && n != "`")? (k.slice(-1).toLowerCase() + "-btn"):(n + "-btn");
	
	let y = document.getElementById(ID);
	y.style.background = "#348de6";
	y.style.color = "white";
	
});	


keyboard.addEventListener("mouseover", e => {
	
	let x = event.target;
	if(x.tagName == "BUTTON" && x.id != "LANG-btn"){
	x.style.background = "yellow";
	x.style.color = "black";
	console.log(x.tagName);
	}	
})

keyboard.addEventListener("mouseout", e => {
	console.log(event.target);
	let x = event.target;
	if(x.tagName == "BUTTON" && x.id != "LANG-btn") {
	x.style.background = "#348de6";
	x.style.color = "white";	

	}
})

//INPUT DATA FROM VIRTUAL KEYBOARD
 document.addEventListener('click', function(event) {
let n = event.target.innerText;
let str = textarea.innerHTML;
	if (event.target.tagName == 'BUTTON' && event.target.innerText.length < 2) { 
      textarea.innerHTML += event.target.innerText;
    }
	if(n == "Backspace")
		textarea.innerHTML = str.slice(0,-1);
	if(n == "DEL")
		textarea.innerHTML = str.slice(0,-2) + str.slice(-1);	
	if(n == "Tab")	
		textarea.innerHTML +="   ";
	if(n == "")	
		textarea.innerHTML +=" ";
	if(n == "Enter")	
		textarea.innerHTML +="\n";
	if(n == "CapsLock")
		CapsLock();
	if(n == "LANG"){
		LangChange();
		LangIconChange();
	}	
	if(n == "Right")
		textarea.innerHTML +="→";
	if(n == "Left")
		textarea.innerHTML +="←";
	if(n == "Up")
		textarea.innerHTML +="↑";
	if(n == "Down")
		textarea.innerHTML +="↓";
 });

//CAPSLOCK

let b = document.getElementsByTagName("button");
function CapsLock(){

	if(b[13].innerText == "q" || b[13].innerText == "й") {
		for(let i = 0; i < b.length; i++){
			if(b[i].innerText.length < 2)
			b[i].innerText = b[i].innerText.toUpperCase();
		}
	}
		else {
			for(let i = 0; i < b.length; i++){
				if(b[i].innerText.length < 2)
				b[i].innerText = b[i].innerText.toLowerCase();
	}
		}
			
}	

//LANG SELECTOR

function LangChange(){
let ENG_layout = ["`","1","2","3","4","5","6","7","8","9","0","Backspace",
            "Tab","q","w","e","r","t","y","u","i","o","p","[","]","DEL",
            "CapsLock","a","s","d","f","g","h","j","k","l",";","'","Enter",
            "Shift","z","x","c","v","b","n","m",",",".","/","Up","LANG",
			"Ctrl","Win","Alt"," ","Left","Down","Right"];	
	if(b[13].innerText == "q" || b[13].innerText == "Q") {
		for(let i = 0; i < b.length; i++) {
			b[i].innerText = Rus_layout[i];
		}		
	}
		else {
			for(let i = 0; i < b.length; i++) {
			b[i].innerText = ENG_layout[i];
		}		
		}
}

function LangIconChange(){
	
	var x = document.getElementById("LANG-btn");
	if(b[13].innerText == "й" || b[13].innerText == "Й") {
		x.style.background = "url(assets/rus.jpg)"
		x.style.backgroundSize = "contain";
	}
		else {
			x.style.background = "url(assets/uk.svg)"
			x.style.backgroundSize = "cover";
			x.style.backgroundPosition = "center";
		}
}
