let colorSelect = 0
let colorRed = document.querySelector("#colorRed");
let colorBlue = document.querySelector("#colorBlue");
let colorWhite = document.querySelector("#colorWhite");
let colorYellow = document.querySelector("#colorYellow");
let colorBlack = document.querySelector("#colorBlack");
let select = [];
let openColor = false;



function affichageCouleur(){

    if(openColor === false){
    colorSelect = document.querySelector("#colorSelect");
    colorSelect.style.height = "260px";
    openColor = true;
    } else{
        colorSelect = document.querySelector("#colorSelect");
        colorSelect.style.height = "53px";
        openColor = false;

    }
    
}

function colorPicked(colorPickedClass){
	if(openColor===true){
		//On récupère la 1ère couleur de la liste
		let firstColor = document.getElementsByClassName("colorPanier")[0];
		//On récupère le contenu de sa propriété background
		let firstColorPicked = window.getComputedStyle(firstColor,null).getPropertyValue("background");
		//On récupère la couleur sur laquelle l'utilisateur clique
		let clickedColor = document.getElementById(colorPickedClass);
		//On récupère son background
		let clickedColorSelected = window.getComputedStyle(clickedColor,null).getPropertyValue("background");
		
		//On donne à la 1ère couleur le background de celle cliquée
		firstColor.style.background = clickedColorSelected;
		//On donne à la couleur cliquée celle de la 1ère
		clickedColor.style.background = firstColorPicked;
		//On referme la div
		document.getElementsByClassName("colorSelect")[0].style.height="53px";
		colorSelected=false;
	}
}
