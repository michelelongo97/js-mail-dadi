//Chiedi all’utente la sua email,
//controlla che sia nella lista di chi può accedere,
//stampa un messaggio appropriato sull’esito del controllo.
//Non è necessario provvedere alla validazione delle email.

// 1 - Creo una lista che contiene le email degli utenti registrati tramite array
const registeredUsers = [
    'michele@email.com',
    'michele@email.it',
    'michele@gmail.com',
    'michele@outlook.com',
    'michele@live.it',
    'longo@gmail.com'
];
// 2 - Chiedo all'utente di inserire la sua email
const userEmail = prompt('Inserisci la tua email');
// 3 - Creo una variabile per capire se la email è nella lista e la imposto su false
let isRegistered = false;
// 4 - Controllo se l'utente è registrato al sito con la sua email tramite ciclo for
for(let i = 0; i < registeredUsers.length; i++) {
    if (registeredUsers[i] === userEmail){
        isRegistered = true;
    }
}
// 4 - Mostra un messaggio che dice SE l'utente è registrato o no
if (isRegistered) {
    alert(`${userEmail}, Login avvenuto con successo`);
} else {
    alert(`${userEmail}, Non sei registrato, ma potrai farlo quando imparerò a implementare questa funzione. Torna tra qualche giorno`);
}
