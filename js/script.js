var allSurnames = ["Bianchi", "Neri", "Rossi", "Verdi", "Gialli"];
// 1. Chiedo il cognome all'utente.
var userSurname = prompt("Inserisci il tuo cognome");
userSurname = userSurname[0].toUpperCase() + userSurname.slice(1);
// 2. Inseriscilo in un array con altri cognomi.
allSurnames.push(userSurname);
// 3. Stampa la lista in ordine alfabetico.
console.log(allSurnames.sort());
// 4. Scrivi il n° della posizione del cognome nella lista.
var surnamePosition = allSurnames.indexOf(userSurname) + 1;
console.log('La posizione del cognome è: ' + surnamePosition);