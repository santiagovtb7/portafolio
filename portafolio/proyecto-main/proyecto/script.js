const energiaInfo = {
  "ENERGIA EOLICA": "La energía eólica se obtiene del viento, usando turbinas para generar electricidad limpia y renovable.",
  "ENERGIA SOLAR": "La energía solar convierte la luz del sol en electricidad mediante paneles solares o energía térmica.",
  "ENERGIA HIDROELECTRICA": "La energía hidroeléctrica usa la fuerza del agua en movimiento, como ríos o represas, para generar electricidad.",
  "ENERGIA GEOTERMICA": "La energía geotérmica se extrae del calor interno de la Tierra, especialmente en zonas volcánicas o termales."
};

// Captura todos los botones
const botones = document.querySelectorAll(".botones button");

// Crear un contenedor para mostrar información
const contenedor = document.createElement("div");
contenedor.id = "info-energia";
contenedor.style.marginTop = "20px";
contenedor.style.padding = "10px";
contenedor.style.border = "1px solid #ccc";
contenedor.style.borderRadius = "8px";
contenedor.style.backgroundColor = "#f2f2f2";
document.querySelector(".principal")?.appendChild(contenedor);

// Agrega evento a cada botón
botones.forEach((boton) => {
  boton.addEventListener("click", () => {
    const tipo = boton.textContent.toUpperCase();
    contenedor.innerHTML = `<strong>${tipo}</strong><p>${energiaInfo[tipo]}</p>`;
  });
});