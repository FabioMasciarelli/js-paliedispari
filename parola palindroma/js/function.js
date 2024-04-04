/**
 * Description placeholder creare una funzione che sia in grado di riconoscere una parola paindroma
 *
 * @param {}
 */
function checkWord (word) {
    const normalWord = word;
    // const splitWord = word.split;
    // console.log(splitWord);
    const reverseWord = normalWord.reverse;

    if (normalWord == reverseWord) {
        console.log("la parola è palindroma");
    } else {
        console.log("la parola non è palindroma");
    }
}