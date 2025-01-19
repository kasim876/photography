(function() {
    const btn = document.getElementById("btn");
    const modal = document.getElementById("modal");

    const modalActiveClass = "modal-wrapper--active";
    const lockScrollClass = "stop-scroll";

    function openModal() {
        modal.classList.add(modalActiveClass);
        document.body.classList.toggle(lockScrollClass);
        console.log(1);
        
    }

    function closeModal() {
        modal.classList.remove(modalActiveClass);
        document.body.classList.toggle(lockScrollClass);
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
})();