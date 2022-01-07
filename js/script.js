/*
1- Chiedi all' utente il suo nome
2- poi chiedi il suo cognome
3- poi chiedi il suo colore preferito
4- monta password con pattern nomecognomecolorepreferito21
5- inserisci nell' elemento in pagina
*/

console.log('JS OK');

// recupero elemento che mi servirà alla fine
const displayElement = document.getElementById('user-password');

// 1-2-3 raccolgo info utente
const firstName = prompt('Qual è il tuo nome?', 'Gianluca');
const lastName = prompt('Qual è il tuo cognome?', 'Ingrao');
const color = prompt('Qual è il tuo colore preferito?', 'Blu');

console.log('firstName:', firstName);
console.log('lastName:', lastName);
console.log('color:', color);

// monto password
const password = firstName + lastName + color + '21';
console.log(password);

// stampo in pagina
displayElement.innerText = password;