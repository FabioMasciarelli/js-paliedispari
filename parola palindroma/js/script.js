// chiedre all'utente una parola
const userWord = prompt("dimmi una parola palindroma");

checkWord(userWord); // dichirazione funzione


if (checkWord(userWord)) {
    console.log('è palindroma');
} else {
    console.log('non è palindroma');
}