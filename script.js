 const menuIcon = document.getElementById('menu-icon');
  const menu = document.getElementById('menu-toggle');

  menuIcon.addEventListener('click', () => {
    menu.classList.toggle('show');
    menuIcon.textContent = menu.classList.contains('show') ? '✖' : '☰';
  });




