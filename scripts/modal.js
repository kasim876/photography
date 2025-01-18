const btn = document.getElementById("btn");
const modal = document.getElementById("modal");

const modalActiveClass = "modal-wrapper--active";

function openModal() {
    modal.classList.add(modalActiveClass);
}

function closeModal(event) {
    modal.classList.remove(modalActiveClass);
}

btn.addEventListener("click", openModal);
modal.addEventListener("click", function(event) {
    if (event.target == modal) {
        closeModal();
    }
})
window.addEventListener("keydown", function(event) {
    if (event.key == 'Escape') {
        closeModal();
    }
})