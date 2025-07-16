/*
const imagenes = ['img1.jpg', 'img2.jpg', 'img3.jpg'];
let indice = 0;
setInterval(() => {
  indice = (indice + 1) % imagenes.length;
  document.getElementById('imagenCarrusel').src = imagenes[indice];
}, 5000);

function mostrarSeccion(id) {
  document.querySelectorAll('.seccion').forEach(seccion => {
    seccion.classList.remove('visible');
  });
  document.getElementById(id).classList.add('visible');
}

function enviarFormulario() {
  const nombre = document.getElementById('nombre').value.trim();
  const email = document.getElementById('email').value.trim();
  const mensaje = document.getElementById('mensaje').value.trim();
  const msgForm = document.getElementById('msgForm');
  if (!nombre || !email || !mensaje) {
    msgForm.textContent = 'Todos los campos son obligatorios.';
    msgForm.style.color = 'red';
    return false;
  }
  msgForm.textContent = 'Mensaje enviado correctamente.';
  msgForm.style.color = 'green';
  return false;
}

let grafico;

function actualizarGrafico() {
  const ctx = document.getElementById('grafico').getContext('2d');
  const tipo = document.getElementById('filtro').value;
  const datos = tipo === 'ventas'
    ? [100, 200, 300, 250, 400]
    : [50, 80, 120, 160, 200];
  const etiquetas = ['Ene', 'Feb', 'Mar', 'Abr', 'May'];

  if (grafico) grafico.destroy();

  grafico = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: etiquetas,
      datasets: [{
        label: tipo,
        data: datos,
        backgroundColor: 'rgba(54, 162, 235, 0.6)'
      }]
    }
  });
}

window.onload = () => {
  actualizarGrafico();
}
*/

const imagenes = [
  'https://via.placeholder.com/600x300.png?text=Proyecto+1',
  'https://via.placeholder.com/600x300.png?text=Proyecto+2',
  'https://via.placeholder.com/600x300.png?text=Proyecto+3'
];
let indiceImagen = 0;

function mostrarSeccion(id) {
  document.querySelectorAll('.seccion').forEach(seccion => {
    seccion.classList.remove('visible');
  });
  document.getElementById(id).classList.add('visible');
}

function cambiarImagen(direccion) {
  indiceImagen = (indiceImagen + direccion + imagenes.length) % imagenes.length;
  document.getElementById('imagenCarrusel').src = imagenes[indiceImagen];
}

const datosGrafico = {
  frontend: {
    labels: ['HTML', 'CSS', 'JavaScript'],
    datos: [90, 85, 80]
  },
  backend: {
    labels: ['Python', 'Flask', 'SQL'],
    datos: [95, 90, 75]
  }
};

let grafico;

function actualizarGrafico() {
  const filtro = document.getElementById('filtro').value;
  const ctx = document.getElementById('grafico').getContext('2d');
  
  if (grafico) {
    grafico.destroy();
  }

  grafico = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: datosGrafico[filtro].labels,
      datasets: [{
        label: 'Nivel de Habilidad (%)',
        data: datosGrafico[filtro].datos,
        backgroundColor: ['#3498db', '#2ecc71', '#e74c3c'],
        borderColor: ['#2980b9', '#27ae60', '#c0392b'],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
          max: 100
        }
      }
    }
  });
}

function enviarFormulario() {
  const nombre = document.getElementById('nombre').value;
  const email = document.getElementById('email').value;
  const mensaje = document.getElementById('mensaje').value;
  document.getElementById('msgForm').innerText = `Gracias, ${nombre}! Tu mensaje ha sido recibido.`;
  document.getElementById('formContacto').reset();
  return false;
}

document.addEventListener('DOMContentLoaded', () => {
  mostrarSeccion('home');
  actualizarGrafico();
});

