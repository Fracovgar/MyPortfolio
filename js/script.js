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

//Cargar el Curriculum
const previewButton = document.getElementById('preview');

previewButton.addEventListener('click', () => {
    const pdfUrl = './cv/FranciscoCoves_CV.pdf';
    const popupWidth = 800;
    const popupHeight = 800;

    // Coordenadas para centrar la ventana en el área visible del navegador
    const left = (window.innerWidth - popupWidth) / 2;
    const top = (window.innerHeight - popupHeight) / 2;

    // Abrir la ventana centrada
    window.open(pdfUrl, '_blank', `width=${popupWidth},height=${popupHeight},scrollbars=yes,left=${left},top=${top}`);
});

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
        } else {
            seccion.style.transform = "translateX(0)";
        }

        // Le pongo sombra a la animacion
        seccion.style.boxShadow = "-10px 0 10px rgba(0, 0, 0, 0.2)";
    });

    currentIndex = targetIndex;
}

function activarMenu(targetIndex) {
    menuItems.forEach(item => item.classList.remove("active"));
    menuItems[targetIndex].classList.add("active");
}