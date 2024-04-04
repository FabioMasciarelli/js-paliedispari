const userNumber = document.getElementById("user-number");

const inputBtn = document.getElementById("button");

inputBtn.addEventListener("click", function () {
    const userChoice = document.getElementById("user-choice").value;
    console.log(userChoice);

    let computerNumber = rndNumber();
    console.log(computerNumber);

    const num = typeOfNumber(userNumber, computerNumber);
    console.log(num);

    if (num === true && userChoice === "pari") {
        console.log("hai vinto!");
    } else if (num === false && userChoice === "dispari") {
        console.log("hai vinto!");
    } else {
        console.log("hai perso!");
    }
});
