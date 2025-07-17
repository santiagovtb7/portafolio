// === Animación al hacer scroll ===
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('section').forEach(section => {
  observer.observe(section);
});

// === Mostrar detalles de proyectos ===
function showProjectDetails(projectId) {
  const details = document.getElementById(`project-details-${projectId}`);
  const isVisible = details.classList.contains('show');

  // Ocultar todos
  document.querySelectorAll('.project-details').forEach(d => d.classList.remove('show'));

  // Mostrar el actual si estaba oculto
  if (!isVisible) {
    details.classList.add('show');
  }
}

// === Validación de formulario ===
const form = document.getElementById('contact-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

const nameError = document.getElementById('name-error');
const emailError = document.getElementById('email-error');
const messageError = document.getElementById('message-error');

nameInput.addEventListener('input', () => {
  nameError.textContent = nameInput.value.length < 2 ? 'Mínimo 2 caracteres' : '';
});

emailInput.addEventListener('input', () => {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  emailError.textContent = !emailPattern.test(emailInput.value) ? 'Correo no válido' : '';
});

messageInput.addEventListener('input', () => {
  messageError.textContent = messageInput.value.length < 10 ? 'Escribe al menos 10 caracteres' : '';
});

form.addEventListener('submit', (e) => {
  e.preventDefault();

  if (
    nameInput.value.length >= 2 &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value) &&
    messageInput.value.length >= 10
  ) {
    alert('Mensaje enviado correctamente (modo demo)');
    form.reset();
    nameError.textContent = '';
    emailError.textContent = '';
    messageError.textContent = '';
  } else {
    alert('Por favor, completa el formulario correctamente.');
  }
});

// === Gráfico de habilidades ===
const ctx = document.getElementById('skillsChart').getContext('2d');

new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: ['HTML', 'CSS', 'JavaScript', 'Python', 'Firebase', 'React'],
    datasets: [{
      label: 'Nivel',
      data: [90, 85, 80, 75, 65, 70],
      backgroundColor: [
        '#f16529',
        '#264de4',
        '#f0db4f',
        '#3572A5',
        '#ffca28',
        '#61dafb'
      ],
      borderColor: '#fff',
      borderWidth: 2
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          color: '#333',
          font: {
            size: 14
          }
        }
      }
    }
  }
});

