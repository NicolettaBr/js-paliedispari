//utente sceglie pari o dispari 
//inserisce un numero da 1 a 5
//Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione)
//Sommiamo i due numeri 
//Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
//Dichiariamo chi ha vinto

//chiedere all' utente di scegliere pari o dispari (stringa)
var pariODispari = prompt('scegli pari o dispari');
console.log(pariODispari);


//chiedere di inserire un numero da 1 a 5 (numero)
var numeroUtente = parseInt(prompt('Inserisci un numero tra 1 e 5'));
console.log(numeroUtente);


//genera numero random da 1 a 5 per il computer (con funzione) (numero)

//funzione deve generare un numero random compreso tra 1 e 5
// 1 --> min (argomento)
// 5 --> max (argomento)
// return --> numero random

var numeroComputer = getRandomNumber(1, 5);
console.log(numeroComputer);

function getRandomNumber (min, max) {

  var numeroRandom = Math.floor(Math.random() * (max - min) ) + min;
  return numeroRandom;
}

//somma numeri (numero)

var somma = numeroUtente + numeroComputer;
console.log(somma);


//stabilire se numero ottenuto è pari o dispari (con funzione)
numeroPariODispari(somma);
console.log(somma);

//funzione deve valutare se numero è pari o dispari
//numero da valutare (argomento)
//return --> pari se / 2, altrimenti dispari (stringa)

function numeroPariODispari (numeroDaValutare){
  var risultato;

  if (numeroDaValutare % 2 == 0){
    risultato = 'pari'; 
  }else{
    risultato = 'dispari';
  }

  return risultato;
}

//stampa chi ha vinto

if(pariODispari == somma){
  alert('Bravo! Hai vinto');
}else{
  alert('Peccato! Hai perso!');
}
