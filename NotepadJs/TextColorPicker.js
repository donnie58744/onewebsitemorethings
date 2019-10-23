function getSelectFontColor() {
    var selectedValue = document.getElementById("FontColor").value;
    var TextColor = document.getElementById("text");
    var Saved = localStorage.getItem("TextColorSaved");

    if (selectedValue == "Black") {
        TextColor.style.color = "black"
        localStorage.setItem("TextColorSaved", selectedValue)
    } else if (selectedValue == "Red") {
        TextColor.style.color = "red"
        localStorage.setItem("TextColorSaved", selectedValue)
    } else if (selectedValue == "Blue") {
        TextColor.style.color = "blue"
        localStorage.setItem("TextColorSaved", selectedValue)
    } else if (selectedValue == "Yellow") {
        TextColor.style.color = "yellow"
        localStorage.setItem("TextColorSaved", selectedValue)
    } else if (selectedValue == "Purple") {
        TextColor.style.color = "purple"
        localStorage.setItem("TextColorSaved", selectedValue)
    } else if (selectedValue == "Green") {
        TextColor.style.color = "green"
        localStorage.setItem("TextColorSaved", selectedValue)
    } else if (selectedValue == "Orange") {
        TextColor.style.color = "orange"
        localStorage.setItem("TextColorSaved", selectedValue)
    } else if (selectedValue == "White") {
        TextColor.style.color = "white"
        localStorage.setItem("TextColorSaved", selectedValue)
    } else if (selectedValue == "Gray") {
        TextColor.style.color = "gray"
        localStorage.setItem("TextColorSaved", selectedValue)
    } else if (Saved == "Black") {
        TextColor.style.color = "black"
    } else if (Saved == "Red") {
        TextColor.style.color = "red"
    } else if (Saved == "Blue") {
        TextColor.style.color = "blue"
    } else if (Saved == "Yellow") {
        TextColor.style.color = "yellow"
    } else if (Saved == "Purple") {
        TextColor.style.color = "purple"
    } else if (Saved == "Green") {
        TextColor.style.color = "green"
    } else if (Saved == "Orange") {
        TextColor.style.color = "orange"
    } else if (Saved == "White") {
        TextColor.style.color = "White"
    } else if (Saved == "Gray") {
        TextColor.style.color = "gray"
    }

}
getSelectFontColor();


function LoadFontColor() {
    LoadFontColorType = localStorage.getItem("TextColorSaved");
    document.getElementById("FontColor").value = LoadFontColorType;
}
