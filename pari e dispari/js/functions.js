/**
 * Description placeholder funzione per generare un numero random
 *
 * @returns {number}
 */
function rndNumber () {
    const rdnValue = parseInt(Math.floor(Math.random() * 5) + 1);
    return rdnValue;
};





/**
 * Description placeholder funzione per definire un numero pari o dispari
 * @param {number} num1  
 * @param {number} num2 
 * @returns {boolean}
 */
function typeOfNumber (num1, num2) {
    let flag = false;
    const sum = num1 + num2;
    if (sum % 2 === 0) {
        flag = true;
    }

    return flag;
};