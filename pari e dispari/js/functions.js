/**
 * Description placeholder funzione per generare un numero random
 *
 * @returns {number}
 */
function rndNumber (max, min) {
    const rdnValue = Math.floor(Math.random() * (max - min + 1 ) + 1 );
    return rdnValue;
};





/**
 * Description placeholder funzione per definire un numero pari o dispari
 * @param {number} number
 * @returns {boolean}
 */
function typeOfNumber (number) {
    let flag = false;

    if (number % 2 === 0) {
        flag = true;
    }

    return flag;
};