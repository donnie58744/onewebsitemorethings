function getSelectFS() {
    var selectedSize = document.getElementById("FontSizes").value

    if (selectedSize == "FSNONE") {
        console.log("NONE")
        localStorage.setItem("FSP", selectedSize)
    } else if (selectedSize == "FontSize20") {
        text.style.fontSize = 20;
        localStorage.setItem("FontSizePicked", selectedSize)
    } else if (selectedSize == "FontSize30") {
        text.style.fontSize = 30;
        localStorage.setItem("FontSizePicked", selectedSize)
    } else if (selectedSize == "FontSize40") {
        text.style.fontSize = 40;
        localStorage.setItem("FontSizePicked", selectedSize)
    } else if (selectedSize == "FontSize50") {
        text.style.fontSize = 50;
        localStorage.setItem("FontSizePicked", selectedSize)
    } else if (selectedSize == "FontSize60") {
        text.style.fontSize = 60;
        localStorage.setItem("FontSizePicked", selectedSize)
    } else if (selectedSize == "FontSize70") {
        text.style.fontSize = 70;
        localStorage.setItem("FontSizePicked", selectedSize)
    } else if (selectedSize == "FontSize80") {
        text.style.fontSize = 80;
        localStorage.setItem("FontSizePicked", selectedSize)
    } else if (selectedSize == "FontSize100") {
        text.style.fontSize = 100;
        localStorage.setItem("FontSizePicked", selectedSize)
    } else if (localStorage.getItem("FontSizePicked") == "FontSize20") {
        text.style.fontSize = 20;
    } else if (localStorage.getItem("FontSizePicked") == "FontSize30") {
        text.style.fontSize = 30;
    } else if (localStorage.getItem("FontSizePicked") == "FontSize40") {
        text.style.fontSize = 40;
    } else if (localStorage.getItem("FontSizePicked") == "FontSize50") {
        text.style.fontSize = 50;
    } else if (localStorage.getItem("FontSizePicked") == "FontSize60") {
        text.style.fontSize = 60;
    } else if (localStorage.getItem("FontSizePicked") == "FontSize60") {
        text.style.fontSize = 60;
    } else if (localStorage.getItem("FontSizePicked") == "FontSize70") {
        text.style.fontSize = 70;
    } else if (localStorage.getItem("FontSizePicked") == "FontSize80") {
        text.style.fontSize = 80;
    } else if (localStorage.getItem("FontSizePicked") == "FontSize100") {
        text.style.fontSize = 100;
    }
}

getSelectFS();

function LoadFontSize() {
    LoadFontSizeType = localStorage.getItem("FontSizePicked");
    document.getElementById("FontSizes").value = LoadFontSizeType;
}
