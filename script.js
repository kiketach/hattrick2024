//Modal Suelas
function openModal(imageSrc) {
    document.getElementById("modalImage").src = imageSrc;
    document.getElementById("suelaModal").classList.remove("hidden");
  }
  document.getElementById("closeModalSuelas").addEventListener("click", function() {
    document.getElementById("suelaModal").classList.add("hidden");
  });

// Modal Mayoristas
const modal = document.getElementById('modal');
const mayoristasBtn = document.getElementById('mayoristasBtn');
const closeModal = document.getElementById('closeModalMayoristas');

mayoristasBtn.addEventListener('click', () => {
  modal.classList.remove('hidden');
});

closeModal.addEventListener('click', () => {
  modal.classList.add('hidden');
});

// Modal Video
function openModal(videoSrc) {
    document.getElementById("videoPlayer").src = videoSrc; // Establece la fuente del video
    document.getElementById("videoModal").classList.add("show");
  }

  document.getElementById("closeVideoModal").addEventListener("click", function() {
    document.getElementById("videoModal").classList.remove("show");
    document.getElementById("videoPlayer").pause(); // Pausar el video al cerrar
  });
  
  // Opción para cerrar el modal al hacer clic fuera del cuadro del modal
  document.getElementById("videoModal").addEventListener("click", function(event) {
    if (event.target === this) {
      this.classList.remove("show");
      document.getElementById("videoPlayer").pause();
    }
  });
 

// Enviar el formulario a WhatsApp
document.getElementById('mayoristasForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const nombre = document.getElementById('nombre').value;
  const correo = document.getElementById('correo').value;
  const contacto = document.getElementById('contacto').value;
  const mensaje = document.getElementById('mensaje').value;

  const whatsappUrl = `https://wa.me/573125141329?text=Nombre: ${nombre}%0ACorreo: ${correo}%0AContacto: ${contacto}%0AMensaje: ${mensaje}`;
  
  window.open(whatsappUrl, '_blank');
});

