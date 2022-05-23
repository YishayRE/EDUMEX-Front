const blocker = document.querySelector("#blocker");
const loader = document.querySelector("#loader");

function showLoad() {
    console.log("Me active");
    blocker.style.visibility = "visible";
    loader.style.visibility = "visible";
}

function hiddenLoad() {
    blocker.style.visibility = "hidden";
    loader.style.visibility = "hidden";
}