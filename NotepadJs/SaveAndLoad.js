function Save() {
    localStorage.setItem("Note", text.value);
}

function AutoLoad() {
    load = localStorage.getItem("Note");
    document.getElementById("text").value = load;
}

setInterval(
    function AutoSave() {
        localStorage.setItem("Note", text.value);
    }, 1);
