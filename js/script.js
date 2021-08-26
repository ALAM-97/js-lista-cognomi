// 1. Chiedo il cognome all'utente.
var userSurname = prompt("Inserisci il tuo cognome");
// 2. Inseriscilo in un array con altri cognomi.
var allSurnames = ["Bianchi", "Neri", "Rossi", "Verdi", "Gialli"];
allSurnames.push(userSurname);
// 3. Stampa la lista in ordine alfabetico.
console.log(allSurnames.sort());
console.log(allSurnames.indexOf(userSurname) + 1);
// 4. Scrivi il n° della posizione del cognome nella lista.