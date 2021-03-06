// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

// Chiedo i dati al utente
const userEvenOrOdd = prompt('Scegli pari o dispari');
const userNumber = parseInt(prompt('Inserisci un numero da 1 a 5'));
console.log('Numero del utente ' + userNumber);

// Numero random dal computer 
const computerNumber = getRndInteger(1, 5);
console.log('Numero del computer ' + computerNumber);

// Somma tra il numero del utente e il computer
const result = sumGenerator(userNumber, computerNumber);
console.log('Somma ' + result);

// Stabilire se la somma è pari o dispari
const resultEvenOrOdd = isEvenOrOdd(result);
console.log('Pari o Dispari: ' + resultEvenOrOdd);


// Genero un numero per il computer usando una funzione
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

// Sommo il numero del utente e il numero del computer usando una funzione
function sumGenerator (num1, num2) {
    const sum = num1 + num2;
    return sum
    
}

// Stabilisco attraverso una funzione
// La somma dei numeri dati dal utente e dal computer è pari o dispari
function isEvenOrOdd (number) {
    let EvenOrOdd;

    if (result % 2 === 0) {
        EvenOrOdd = 'pari';
    }else{
        EvenOrOdd = 'dispari';
    }

    return EvenOrOdd;
 
}

// Decreto il risultato 
if (userEvenOrOdd === resultEvenOrOdd) {
    alert('Hai vinto');
}else{
    alert('Hai perso');
}
















