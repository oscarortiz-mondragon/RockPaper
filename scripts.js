
let bot = document.getElementsByClassName("bot")
let human = document.getElementsByClassName("human")
let button = document.getElementsByClassName("button")
button.onclick = function () {
if(
    bot.item() == "Rock") {
        return human.textContent("human","Paper")
    }
}
