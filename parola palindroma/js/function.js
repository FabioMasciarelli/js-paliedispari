/**
 * Description placeholder creare una funzione che sia in grado di riconoscere una parola paindroma
 *
 * @param {}
 */
function checkWord (word) {
    const normalWord = word;
    const reverseWord = normalWord.split('').reverse().join('');

    if (normalWord == reverseWord) {
        return true;
    } else {
        return false;
    }
}
