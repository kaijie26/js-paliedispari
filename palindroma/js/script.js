// Palindroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

// Chiedo al utente di inserire una parola
const userWord = prompt('Dimmi una parola');

// Controllo della parola se è palindroma o meno
const result = checkWord(userWord);
console.log(result);

// Decreto il risultato 
if (result) {
    alert('ok è palindroma');
}else{
    alert('non è palindroma');
}

// Creo una funzione per verificare se la parola data dal utente è palindroma
function checkWord(originalWord) {
    // Ottengo una stringa che rappresenti la parola al contrario
    // Creo una stringa vuota e scorro la parola al contrario col ciclo for
    // Per ogni lettera --> la aggiungo alla stringa vuota
    let reverseWord = '';
    for(let i = originalWord.length -1; i >= 0; i-- ) {

        let thisLetter = originalWord[i];

        reverseWord += thisLetter;
    }

    // Se la parola al contrario è === alla parola originale (iniziale) la condizione è true altrimenti false
    let isPalindrome;

    if (originalWord === reverseWord) {
        isPalindrome = true; 
    }else{
        isPalindrome = false;
    }

    return isPalindrome;
    
}


