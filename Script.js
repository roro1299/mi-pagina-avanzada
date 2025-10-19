document.addEventListener('DOMContentLoaded', () => {
    // 1. Funcionalidad de Cambiar Tema
    const themeButton = document.getElementById('toggle-theme');
    const body = document.body;

    // Función para alternar la clase 'dark-theme'
    const toggleTheme = () => {
        body.classList.toggle('dark-theme');
        // Opcional: guardar la preferencia del usuario
        if (body.classList.contains('dark-theme')) {
            localStorage.setItem('theme', 'dark');
        } else {
            localStorage.setItem('theme', 'light');
        }
    };

    // Aplicar el tema guardado al cargar
    if (localStorage.getItem('theme') === 'dark') {
        body.classList.add('dark-theme');
    }

    // Event listener para el botón
    themeButton.addEventListener('click', toggleTheme);

    // 2. Funcionalidad del Formulario de Contacto (alerta simulada)
    const contactForm = document.getElementById('contact-form');

    contactForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Evita que la página se recargue

        // Obtener valores (opcional, pero buena práctica)
        const nombre = document.getElementById('nombre').value;
        const correo = document.getElementById('correo').value;

        // Mostrar la alerta de verificación
        alert(`¡Gracias por contactarnos, ${nombre}! (Alerta Simulada). Revisaremos tu correo: ${correo}.`);

        // Opcional: resetear el formulario
        contactForm.reset();
    });

    console.log("Script.js cargado y funcionando.");
});