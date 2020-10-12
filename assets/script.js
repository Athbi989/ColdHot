var targert = Math.floor(Math.random() * 100) + 1  //رقم عشوائي
var currentLifes = 0;
var lifeLimt = 10;

console.log(targert)

function checkNumber() {
    let answer = document.getElementById("answer").value
    let count = document.getElementById("Lifes")
    let statusContainer = document.getElementById("status_div")
    let statusText = document.getElementById("status_text")

    if (currentLifes < lifeLimt) {
        currentLifes++;
        let diff = answer - targert;
        count.innerHTML = lifeLimt - currentLifes
        if (answer == targert) {
            //Win
            statusText.innerHTML = " مبروووك لقد فزت !"
            statusContainer.style.background = "rgb(2 144 46 / 81%)"
            document.getElementById("button").disabled = true
        } else if (diff <= 15 && diff >= -15) {
            //Hot
            statusText.innerHTML = "حااارر"
            statusContainer.style.background = "rgb(255 0 0 / 42%)"
        } else {
            //Cold
            statusText.innerHTML = "بارد"
            statusContainer.style.background = "rgb(2 144 144 / 42%)"
        }
    } else {
        //Lost the game
        statusText.innerHTML = "للأسف خسرت"
        statusContainer.style.background = "rgb(255 0 0 / 42%)"
    }
}