/* =====================================================================
   main.js — Funcionalidades base de la plantilla.
   Ya viene resuelto: modo oscuro, año dinámico y acordeón.
   No es necesario modificar este archivo para cumplir el taller.
   ===================================================================== */

// --- Modo claro / oscuro ---
const botonModo = document.getElementById("btnModo");
botonModo.addEventListener("click", () => {
  document.body.classList.toggle("modo-oscuro");
});

// --- Año dinámico en el footer ---
const anioActual = new Date().getFullYear();
document.getElementById("anio").textContent = anioActual;

// --- Acordeón de Misión / Visión / Valores ---
const titulosAcordeon = document.querySelectorAll(".acordeon-titulo");
titulosAcordeon.forEach((titulo) => {
  titulo.addEventListener("click", () => {
    const contenido = titulo.nextElementSibling;
    contenido.classList.toggle("activo");
  });
});


