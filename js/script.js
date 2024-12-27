// Secciones
const secciones = {
    header: document.getElementById("main-header"),
    sobremi: document.getElementById("main-sobremi"),
    proyectos: document.getElementById("main-proyectos"),
    contacto: document.getElementById("main-contacto"),
};

// Elementos del menú
const menuItems = document.querySelectorAll(".side-nav nav ul li");

// Elemento de sonido
const pageSound = document.getElementById("page-sound");

// Configuración inicial
let currentIndex = 0; 
const keys = Object.keys(secciones); 

// Añadir eventos al menú
menuItems.forEach((item, targetIndex) => {
    item.addEventListener("click", () => {
        moverPagina(targetIndex)
        activarMenu(targetIndex);
    });
});

function moverPagina(targetIndex) {
    if (targetIndex === currentIndex) return; 

    pageSound.volume = 0.01;
    pageSound.currentTime = 0.2;
    pageSound.play();

    keys.forEach((key, index) => {
        const seccion = secciones[key];
        const offset = index - targetIndex;

        if (offset < 0) {
            seccion.style.transform = `translateX(102%)`;
        } 

        else if (offset === 0) {
            seccion.style.transform = "translateX(0)";
        } 

        else {
            seccion.style.transform = "translateX(0)";
        }
    });

    currentIndex = targetIndex;
}

function activarMenu(targetIndex) {
    menuItems.forEach(item => item.classList.remove("active"));
    menuItems[targetIndex].classList.add("active");
}