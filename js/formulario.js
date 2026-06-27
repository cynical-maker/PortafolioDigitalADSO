document.addEventListener("DOMContentLoaded", () => {
  const formulario = document.getElementById("formContacto");
  const mensajeEstado = document.getElementById("mensajeEstado");

  formulario.addEventListener("submit", (e) => {
    // 1. Evitar que el formulario recargue la página
    e.preventDefault();

    // 2. Capturar los valores de los inputs
    const nombre = document.getElementById("nombre").value.trim();
    const correo = document.getElementById("correo").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();

    // 3. Validaciones adicionales (por si fallan los atributos 'required' nativos)
    if (nombre === "" || correo === "" || mensaje === "") {
      mostrarEstado("Por favor, completa todos los campos.", "error");
      return;
    }

    if (!validarCorreo(correo)) {
      mostrarEstado("Por favor, ingresa un correo electrónico válido.", "error");
      return;
    }

    // 4. Simulación de envío exitoso
    mostrarEstado("Enviando mensaje...", "info");

    setTimeout(() => {
      // Reemplaza esto en el futuro con tu petición Fetch/AJAX si es necesario
      mostrarEstado("¡Mensaje enviado con éxito! Nos pondremos en contacto pronto.", "exito");
      formulario.reset(); // Limpia el formulario
    }, 1500);
  });

  // Función auxiliar para validar el formato del correo
  function validarCorreo(email) {
    const expresionReg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return expresionReg.test(email);
  }

  // Función auxiliar para cambiar el estilo del mensaje de estado
  function mostrarEstado(texto, tipo) {
    mensajeEstado.textContent = texto;
    // Limpiamos clases previas
    mensajeEstado.className = "mensaje-estado"; 
    // Agregamos la clase correspondiente al tipo de mensaje
    mensajeEstado.classList.add(`estado-${tipo}`);
  }
});