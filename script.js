
  const menuIcon = document.getElementById('menu-icon');
  const menuCard = document.getElementById('menu-toggle');

  menuIcon.addEventListener('click', () => {
    if (menuCard.style.display === "block") {
      menuCard.style.display = "none";
    } else {
      menuCard.style.display = "block";
    }
  });



