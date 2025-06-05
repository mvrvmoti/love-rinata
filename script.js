// Частицы — простой эффект падающих точек
const particlesContainer = document.getElementById('particles');

function createParticle() {
  const particle = document.createElement('div');
  particle.style.position = 'absolute';
  particle.style.background = 'pink';
  particle.style.borderRadius = '50%';
  particle.style.width = '5px';
  particle.style.height = '5px';
  particle.style.left = Math.random() * window.innerWidth + 'px';
  particle.style.top = '-10px';
  particle.style.opacity = Math.random();
  particle.style.pointerEvents = 'none';

  particlesContainer.appendChild(particle);

  let fallDuration = 4000 + Math.random() * 3000;
  particle.style.transition = `top ${fallDuration}ms linear, opacity ${fallDuration}ms linear`;
  setTimeout(() => {
    particle.style.top = window.innerHeight + 10 + 'px';
    particle.style.opacity = 0;
  }, 10);

  setTimeout(() => {
    particle.remove();
  }, fallDuration);
}

setInterval(createParticle, 200);

// Всплывающий текст при клике
const messages = ["риночка", "риночка", "💖", "🌹", "💫", "люблю тебя", "💘"];

document.body.addEventListener('click', (e) => {
  const span = document.createElement('span');
  span.className = 'floating-text';
  span.textContent = messages[Math.floor(Math.random() * messages.length)];
  span.style.left = e.clientX + 'px';
  span.style.top = e.clientY + 'px';
  document.body.appendChild(span);
  setTimeout(() => span.remove(), 3000);
});
