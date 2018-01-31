/*
let monTitre = document.querySelector('h1');
monTitre.textContent = 'Hello world';
*/

/*
let parfumGlace = 'chocolat';
if (parfumGlace === 'chocolat') {
  alert("J'adore la glace au chocolat !");    
} else {
  alert("J'aurai préféré du chocolat.");    
}
*/

/*
document.querySelector('html').onclick = function() {
    alert('Aïe, arrêtez de cliquer !!');
}
*/

//Script pour changer d'image au click
let monImage = document.querySelector('img');

monImage.onclick = function() {
    let maSrc = monImage.getAttribute('src');
    if(maSrc === 'img/ragout.jpg') {
      monImage.setAttribute ('src','img/buche.jpg');
    } else {
      monImage.setAttribute ('src','img/ragout.jpg');
    }
}

//Script pour afficher le nom de l'utlisateur sur la page
let monBouton = document.querySelector('button');
let monTitre = document.querySelector('h1');

function définirNomUtilisateur() {
  let monNom = prompt('Veuillez saisir votre nom.');
  localStorage.setItem('nom', monNom);
  monTitre.textContent = 'Mozilla est cool, ' + monNom;
}

if(!localStorage.getItem('nom')) {
  définirNomUtilisateur();
} else {
  let nomEnregistré = localStorage.getItem('nom');
  monTitre.textContent = 'Mozilla est cool, ' + nomEnregistré;
}

monBouton.onclick = function() {
  définirNomUtilisateur();
}