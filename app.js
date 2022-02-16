const display = document.getElementById("display");

function openModal(e) {
    if(e.target.classList.contains("click")){
        displayModal();
    }
}

function closeModal(e) {
    if(!e.target.classList.contains("click")){
        display.innerHTML = " "
    }
}

function displayModal() {
    display.innerHTML = `
    <div class="modal">
        <div class="modal-header">
            <span class="modal-title">
                Congratz!!! 
            </span>
            <span class="modal-sub-text"> You opened a modal</span>
            <i class="fa-solid fa-champagne-glasses"></i>
        </div> 
        <button class="close-btn">Close</button>
    </div>
    `
}

window.addEventListener("click", e => {
    openModal(e);
    closeModal(e);
});