const display = document.getElementById("display");
const filter = document.getElementById("filter");

function openModal(e) {
    if(e.target.classList.contains("click")){
        displayModal();
    }
}

function closeModal(e) {
    if(!e.target.classList.contains("click")){
        display.style.visibility = "hidden";
        filter.style.visibility = "hidden";
    }
}

function displayModal() {
    display.style.visibility = "visible";
    filter.style.visibility = "visible";
}

window.addEventListener("click", e => {
    openModal(e);
    closeModal(e);
});