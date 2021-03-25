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
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
  }


//somma numeri (numero)


//stabilire se numero ottenuto è pari o dispari (con funzione)


//stampa chi ha vinto
