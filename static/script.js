// Referencias al tooltip y a los cuadros de la matriz
const tooltip = document.getElementById("tooltip");
const matrixItems = document.querySelectorAll(".matrix-item");

// Mostrar tooltip y fijarlo en la posición relativa al cuadro
matrixItems.forEach(item => {
    item.addEventListener("mouseenter", () => {
        tooltip.innerText = item.getAttribute("data-text");
        tooltip.style.display = "block";

        const rect = item.getBoundingClientRect();
        tooltip.style.top = `${rect.top + window.scrollY}px`;
        tooltip.style.left = `${rect.right + window.scrollX}px`;
    });

    item.addEventListener("mouseleave", () => {
        tooltip.style.display = "none";
    });
});