const inputBuscador = document.getElementById("buscadorHabilidad");
const tarjetas = document.querySelectorAll(".tarjeta");

inputBuscador.addEventListener("input", () => {
  const texto = inputBuscador.value.toLowerCase().trim();

 
 tarjetas.forEach((tarjeta) => {
    const habilidades = tarjeta.dataset.habilidades.toLowerCase();

    if (habilidades.includes(texto)) {
      tarjeta.classList.remove("oculta");
    } else {
      tarjeta.classList.add("oculta");
    }
  });
});