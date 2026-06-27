document.addEventListener("DOMContentLoaded", () => {
  const inputBuscador = document.getElementById("buscadorHabilidad");
  const tarjetas = document.querySelectorAll(".tarjeta");

  if (!inputBuscador) return;

  inputBuscador.addEventListener("input", () => {
    const texto = inputBuscador.value.toLowerCase().trim();

    tarjetas.forEach((tarjeta) => {
      const habilidades = tarjeta.dataset.habilidades || tarjeta.textContent;
      const coincide = habilidades.toLowerCase().includes(texto);

      tarjeta.classList.toggle("oculta", !coincide);
    });
  });
});
