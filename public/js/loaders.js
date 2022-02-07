const blocker = document.querySelector("#blocker");
const loader = document.querySelector("#loader");

function showLoad() {
    blocker.style.visibility = "visible";
	loader.style.visibility = "visible";
}

function hiddenLoad(){
    blocker.style.visibility = "hidden";
    loader.style.visibility = "hidden";
}