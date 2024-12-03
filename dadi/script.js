//Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
//Stabilire il vincitore, in base a chi fa il punteggio più alto.

// 1 - Faccio generare un numero casuale tra 1 e 6 all'utente visualizzabile in console
const valoreUtente = Math.floor(Math.random() * 6) + 1;
console.log(`Il valore del dado che ho lanciato è di ${valoreUtente}`);
// 2 - Faccio generare un numero casuale tra 1 e 6 al computer visualizzabile in console
const valoreCpu = Math.floor(Math.random() * 6) + 1;
console.log(`Il valore del dado che ha lanciato la cpu è di ${valoreCpu}`);
// 3 - SE il punteggio dell'utente è più alto di quello del computer, l'utente vince e mostro il relativo messaggio tramite alert,
//   - ALTRIMENTI SE il numero del computer è più alto di quello dell'utente, il computer vince e mostro il relativo messaggio tramite alert
//   - ALTRIMENTI mostro un messaggio tramite alert che indica un pareggio
if (valoreUtente > valoreCpu){
    alert('Hai vinto')
} else if (valoreCpu > valoreUtente) {
    alert('Hai perso')
} else {
    alert('Avete pareggiato')
}

