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

 // Estructura Catalogo
function Producto(nombre, imagen, precio, descripcion, video, colores) {
    this.nombre = nombre;
    this.imagen = imagen;
    this.precio = precio;
    this.descripcion = descripcion;
    this.video = video;
    this.colores = colores;
  }
 // Renderizado
Producto.prototype.render = function() {
    return `
      <div class="group grid-item">
        <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
          <img src="${this.imagen}" alt="${this.nombre}" class="h-full w-full object-cover object-center">
        </div>
        <h3 class="mt-4 text-sm text-gray-700">${this.nombre} (${this.descripcion})</h3>
        <p class="mt-1 text-lg font-medium text-gray-900">$${this.precio}</p>
        <div class="flex mt-2 space-x-2">
          <a href="#" onclick="reproducirVideoCatalogo('${this.video}', event)" class="inline-block px-4 py-2 text-sm font-medium text-white bg-black rounded hover:bg-gray-800">Ver Video</a>
          <a href="${this.colores}" class="inline-block px-4 py-2 text-sm font-medium text-white bg-green-600 rounded hover:bg-green-700">Ver Más Colores</a>
        </div>
      </div>
    `;
  };
// Modelos
  const productos = [
    new Producto("Zamba", "./Imgs/Zamba1.png", 96900, "Cuero", "./Imgs/ZambaVideo.mp4", "URL_DE_COLORES"),
    new Producto("Dynamic", "./Imgs/Dynamic1.png", 86900, "Sintético Alta Calidad", "./Imgs/DynamicVideo.mp4", "URL_DE_COLORES"),
    new Producto("Master", "./Imgs/Master2.png", 96900, "Cuero", "./Imgs/MasterVideo.mp4", "URL_DE_COLORES"),
    new Producto("Sala", "./Imgs/Sala1.png", 86900, "Sintético Alta Calidad", "./Imgs/SalaVideo.mp4", "URL_DE_COLORES"),
    new Producto("Ultra", "./Imgs/Ultra1.png", 96900, "Cuero", "./Imgs/UltraVideo.mp4", "URL_DE_COLORES"),
    new Producto("Sintetik", "./Imgs/Sintetik1.png", 86900, "Sintético Alta Calidad", "./Imgs/SintetikVideo.mp4", "URL_DE_COLORES"),
    new Producto("Copa", "./Imgs/Sintetik1.png", 86900, "Sintético Alta Calidad", "./Imgs/CopaVideo.mp4", "URL_DE_COLORES"),
  ];
// Insersion
  const productosHTML = productos.map((producto) => producto.render()).join("");
  document.getElementById("productos").innerHTML = productosHTML;

// Función para reproducir video
function reproducirVideoCatalogo(urlVideo, event) {
    event.preventDefault();
    const videoPlayer = document.getElementById('videoPlayerCatalogo');
    videoPlayer.src = urlVideo;  // Establecer la fuente del video
    videoPlayer.play();           // Reproducir el video

    const modalVideoCatalogo = document.getElementById('modalVideoCatalogo');
    modalVideoCatalogo.classList.remove('hidden');  // Mostrar el modal
}
// Función para cerrar el modal
function cerrarModalVideoCatalogo() {
    const videoPlayer = document.getElementById('videoPlayerCatalogo');
    videoPlayer.pause();           // Pausar el video
    videoPlayer.src = "";          // Limpiar la fuente del video
    const modalVideoCatalogo = document.getElementById('modalVideoCatalogo');
    modalVideoCatalogo.classList.add('hidden');  // Ocultar el modal
}



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

