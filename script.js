
function mostrarNombreInput() {
    const input = document.getElementById('nombreUsuario');
    const nombre = input.value.trim();
    if (nombre) {
        const mensaje = document.createElement('p');
        mensaje.textContent = `¡Hola, ${nombre}!, Mucho gusto, Bienvenido a mi página :D`;
        mensaje.classList.add('alert', 'alert-info', 'mt-2');
        input.parentNode.appendChild(mensaje);
        input.value = ''; 
        setTimeout(() => mensaje.remove(), 5000); 
    }
}


function cambiarFondo(color) {
    document.body.style.backgroundColor = color;
}

function resaltarSeccion(id) {
    const seccion = document.getElementById(id);
    if (!seccion) return;
    seccion.style.transition = '0.5s';
    seccion.style.backgroundColor = 'rgba(255, 255, 0, 0.3)';
    seccion.style.border = '2px solid orange';
    setTimeout(() => {
        seccion.style.backgroundColor = '';
        seccion.style.border = '';
    }, 1500);
}


function ocultarImagenes() {
    const imgs = document.querySelectorAll('img');
    imgs.forEach(img => {
        img.style.display = (img.style.display === 'none') ? 'block' : 'none';
    });
}


document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
            resaltarSeccion(target.id); 
        }
    });
});


const btnTop = document.getElementById('btnTop');
window.addEventListener('scroll', () => {
    btnTop.style.display = (window.scrollY > 300) ? 'block' : 'none';
});
btnTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

