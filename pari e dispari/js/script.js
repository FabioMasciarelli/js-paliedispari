const inputBtn = document.getElementById("button");

inputBtn.addEventListener("click", function () {

    const userNumber = parseInt(document.getElementById("user-number").value);
    console.log(userNumber, typeof userNumber);

    const userChoice = document.getElementById("user-choice").value;
    console.log(userChoice);

    const computerNumber = rndNumber(5,1);
    console.log(computerNumber, typeof computerNumber);


    const somma = computerNumber + userNumber;
    console.log(somma, typeof somma);

    const num = typeOfNumber(somma);
    console.log(num);

    if (num === true && userChoice === "pari") {
        console.log("hai vinto!");
    } else if (num === false && userChoice === "dispari") {
        console.log("hai vinto!");
    } else {
        console.log("hai perso!");
    }
});
