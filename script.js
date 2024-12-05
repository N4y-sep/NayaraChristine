// JavaScript para menu responsivo
function toggleMenu() {
    const menu = document.querySelector('.menuPrincipal');
    menu.classList.toggle('active');
}

document.addEventListener("DOMContentLoaded", () => {
    const imgElement = document.querySelector(".foto img");

    imgElement.addEventListener("mouseover", () => {
        imgElement.style.borderColor = "gold";
        imgElement.style.transform = "scale(1.1)";
        imgElement.style.transition = "transform 0.3s ease";
    });

    imgElement.addEventListener("mouseout", () => {
        imgElement.style.borderColor = "#22754f";
        imgElement.style.transform = "scale(1)";
    });
});