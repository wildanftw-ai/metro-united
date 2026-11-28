document.addEventListener('DOMContentLoaded', function () {
  var menu = document.getElementById('menu');
  var links = document.getElementById('navlinks');
  if (!menu || !links) return;

  function setOpen(open) {
    links.classList.toggle('open', open);
    menu.setAttribute('aria-expanded', String(open));
    menu.textContent = open ? '×' : '☰';
    menu.setAttribute('aria-label', open ? 'Tutup navigasi' : 'Buka navigasi');
  }

  menu.addEventListener('click', function (e) {
    e.preventDefault();
    e.stopPropagation();
    setOpen(!links.classList.contains('open'));
  });

  links.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', function () { setOpen(false); });
  });

  document.addEventListener('click', function (e) {
    if (!links.classList.contains('open')) return;
    if (!e.target.closest('#navlinks') && !e.target.closest('#menu')) setOpen(false);
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') setOpen(false);
  });
});
