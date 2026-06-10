function alternarTema() {
  document.body.classList.toggle('escuro');
  const btn = document.getElementById('btn-tema');
  const foto = document.getElementById('minha-foto');
  const escuro = document.body.classList.contains('escuro');
  btn.textContent = escuro ? '🌛' : '🔆';
  foto.src = escuro ? 'eu.jpeg' : 'eu_dedia.jpeg';
  localStorage.setItem('tema', escuro ? 'escuro' : 'claro');
}

if (localStorage.getItem('tema') === 'escuro') {
  document.body.classList.add('escuro');
  document.getElementById('btn-tema').textContent = '🌛';
  document.getElementById('minha-foto').src = 'eu.jpeg';
}
// gera textura de papel via canvas
const canvas = document.createElement('canvas');
canvas.width = 200;
canvas.height = 200;
const ctx = canvas.getContext('2d');
for (let i = 0; i < 8000; i++) {
  const x = Math.random() * 200;
  const y = Math.random() * 200;
  const alpha = Math.random() * 0.08;
  ctx.fillStyle = `rgba(0,0,0,${alpha})`;
  ctx.fillRect(x, y, 1, 1);
}
document.body.style.backgroundImage = `url(${canvas.toDataURL()})`;