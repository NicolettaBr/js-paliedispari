//Chiedere all’utente di inserire una parola 
//Creare una funzione per capire se la parola inserita è palindroma

//chiedere una parola all' utente (stringa)

var parolaUtente = prompt('Dimmi una parola');
console.log(parolaUtente);


//crea funzione se le 2 parole = --> palindroma altrimenti --> non palindroma

function valutaParola (parolaDaValutare){
        //crea ciclo per leggere parolaUtente da sinistra a destra
    for (var i = 0; i < parolaUtente.length; i++){
        var parolaDritta = parolaUtente[i];
        console.log(parolaDritta);
        
    }

    //crea ciclo per leggere parolaUtente da destra a sinistra
    for (var i = parolaUtente.length; i >= 0; i--){
        var parolaContraria = parolaUtente[i];
        console.log(parolaContraria);
    }
        var risultato;
        
    //se (paroladritta = parolacontraria) = palindroma
    //altrimenti no palindroma
    if(parolaDritta == parolaContraria){
        risultato = 'palindroma';
    }else{
        risultato = 'non palindroma';
    }
    return risultato;
}


var parolaValutata = valutaParola(parolaUtente);
console.log(parolaValutata);

//stampa
alert(parolaValutata);
