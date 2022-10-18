const colors = ["#E9EDC9", "#FEFAE0", "#FCF4D7"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");
const maxArray = colors.length;

btn.addEventListener("click", function () {
    //random number from colors array (0-3)
    const randomNumber = getRandomNumber();
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
})

function getRandomNumber() {
    return Math.floor(Math.random() * maxArray);
}