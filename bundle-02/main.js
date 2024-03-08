/*******************************************************************************
​
    Per questo esercizio, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?
​
    Inserisci i tuoi commenti con le risposte alla fine dell'esercizio
​
*******************************************************************************/


// ESERCIZIO 1
function checkAge() {
    const myAge = 32;
    const message = '';

    if (myAge < 18) {
        message = `Sei troppo giovane! Hai ${myAge} anni!`;
    } else {
        message = 'Hai più di 18 anni!';
    }
}
checkAge();

//funzione per stabilire se sei maggiorenne o minorenne.
// message dovrebbe essere chiamato let non const.
// non viene stampato da nessuna parte, dovremmo aggiungere un console log di message


// ESERCIZIO 2
function printColorsNumber() {
    const colors = ['blue', 'red', 'yellow', 'green', 'black'];
    console.log(`Nella mia palette ci sono ${colors.lenght} colori!`);
}
printColorsNumber();

// stampiamo in console i colori.
// ma length è scritto male

// ESERCIZIO 3
function addNumbers() {
    const userNumber = prompt('Inserisci un numero');
    const total = userNumber + 12;

    console.log(`Il risultato finale è ${total}`);
}
addNumbers();

//  chiede all'utente di inserire un numero alla quale poi viene fatta una somma.
// ma nel formato corretto dovremmo aggiungere parseInt() per far fornire all'utente sempre un numero.

// ESERCIZIO 4
function checkAccess() {
    const addresses = ['mymail@mail.com', 'yourmail@mail.com', 'hermail@mail.com', 'hismail@mail.com'];
    const userEmail = prompt('Inserisci il tuo indirizzo email');

    let grantAccess = 'false';

    if (addresses.includes(userEmail)) {
        grantAccess = 'true';
    }

    if (grantAccess === true) {
        console.log('Accesso consentito!');
    } else {
        console.log('Accesso negato!');
    }
}
checkAccess();


// il prompt chiede all'utente l'email, e controlla se è presente.
// sia false che true non sono 2 stringhe quindi bisogna levare gli apici.



// ESERCIZIO 5 (suggerimento: c'è un solo errore)
function checkAccessImproved() {
    const addresses = ['mymail@mail.com', 'yourmail@mail.com', 'hermail@mail.com', 'hismail@mail.com'];
    const userEmail = prompt('Inserisci il tuo indirizzo email');
    let grantAccess = 'false';

    for (let i = 0; i < addresses.length; i++) {
        const email = addresses[i];
        if (userEmail.length > 5) {
            if (email === userEmail) {
                grantAccess = 'true';
            }
        }
        if (grantAccess) {
            console.log('Accesso consentito!');
        } else {
            console.log('Accesso negato!');
        }
    }
    checkAccessImproved();

// il prompt chiede all'utente l'email, e controlla se è presente. ma deve anche essere più lunga di 5 caratteri.
// sia true che false non sono stringhe.
























