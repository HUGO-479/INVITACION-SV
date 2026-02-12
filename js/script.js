document.addEventListener("DOMContentLoaded", function () {

    const btnNo = document.querySelector("#btn-random");

    if (!btnNo) return;

    function moverAleatoriamente(btn) {
        btn.style.position = "fixed";
        btn.style.fontWeight = "bolder";

        const maxX = window.innerWidth - btn.offsetWidth;
        const maxY = window.innerHeight - btn.offsetHeight;

        const randomX = Math.random() * maxX;
        const randomY = Math.random() * maxY;

        btn.style.left = randomX + "px";
        btn.style.top = randomY + "px";
    }

    // Computadora
    btnNo.addEventListener("mouseenter", function (e) {
        moverAleatoriamente(e.target);
    });

    // Móviles
    btnNo.addEventListener("touchstart", function (e) {
        e.preventDefault();
        moverAleatoriamente(e.target);
    });

});
