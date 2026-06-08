function alternarTema() {
  document.body.classList.toggle('escuro');
  const btn = document.getElementById('btn-tema');
  const foto = document.getElementById('minha-foto');
  const tung = document.getElementById('foto-tung');
  const escuro = document.body.classList.contains('escuro');

  btn.textContent = escuro ? '🌛' : '🔆';
  foto.src = escuro ? 'eu.jpeg' : 'eu_dedia.jpeg';
  tung.style.display = escuro ? 'block' : 'none';
  tung.src = escuro ? 'tung.webp' : '';
  localStorage.setItem('tema', escuro ? 'escuro' : 'claro');
}

if (localStorage.getItem('tema') === 'escuro') {
  document.body.classList.add('escuro');
  document.getElementById('btn-tema').textContent = '🌛';
  document.getElementById('minha-foto').src = 'eu.jpeg';
}