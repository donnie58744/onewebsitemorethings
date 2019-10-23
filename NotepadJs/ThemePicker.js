function getSelectTheme() {
    var selectedTheme = document.getElementById("Themes").value;

    if (selectedTheme == "BlackTheme") {
        text.style.backgroundColor = "black"
        text.style.color = "gray"
        localStorage.setItem("Theme", selectedTheme)
        document.body.style.backgroundColor = "black";
        document.getElementById("textboxcolor").style.backgroundColor = "darkgray"
    } else if (selectedTheme == "WhiteTheme") {
        text.style.backgroundColor = "white";
        text.style.color = "black";
        localStorage.setItem("Theme", selectedTheme)
        document.body.style.backgroundColor = "white"
        document.getElementById("textboxcolor").style.backgroundColor = "lightgray"

    } else if (localStorage.getItem("Theme") == "BlackTheme") {
        text.style.backgroundColor = "black"
        text.style.color = "gray"
        document.body.style.backgroundColor = "black"
        document.getElementById("textboxcolor").style.backgroundColor = "darkgray"
    } else if (localStorage.getItem("Theme") == "WhiteTheme") {
        text.style.backgroundColor = "white";
        text.style.color = "black";
        document.body.style.backgroundColor = "white"
    }

}
getSelectTheme();

function LoadTheme() {
    LoadThemeType = localStorage.getItem("Theme");
    document.getElementById("Themes").value = LoadThemeType;
}
