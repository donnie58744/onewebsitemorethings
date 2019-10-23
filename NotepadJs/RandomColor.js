function RandomColor() {
    var randomNumber = Math.floor(Math.random() * 11);

    if (randomNumber == 1) {
        TextColor.style.color = "white"
    } else if (randomNumber == 2) {
        TextColor.style.color = "black"
    } else if (randomNumber == 3) {
        TextColor.style.color = "blue"
    } else if (randomNumber == 4) {
        TextColor.style.color = "orange"
    } else if (randomNumber == 5) {
        TextColor.style.color = "pink"
    } else if (randomNumber == 6) {
        TextColor.style.color = "green"
    } else if (randomNumber == 7) {
        TextColor.style.color = "aqua"
    } else if (randomNumber == 8) {
        TextColor.style.color = "purple"
    } else if (randomNumber == 9) {
        TextColor.style.color = "yellow"
    } else if (randomNumber == 10) {
        TextColor.style.color = "red"
    }
}
