// Palindroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

const userMessage = prompt('Dimmi una parola');

let thisMessage;
for(let i = userMessage.length -1; i >= 0; i-- ) {
    let thisMessage = userMessage[i]
}

function checkWord(text) {
    let trueOrFalse = false;

    if (userMessage === thisMessage) {
        trueOrFalse = true; 
    }

    return trueOrFalse;
    
}


const result = checkWord(userMessage);
console.log(result);

