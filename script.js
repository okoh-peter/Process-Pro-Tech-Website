  
  // Load the Google Analytics script asynchronously
(function() {
  var gaScript = document.createElement('script');
  gaScript.async = true;
  gaScript.src = 'https://www.googletagmanager.com/gtag/js?id=G-11383063131';
  document.head.appendChild(gaScript);

  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  window.gtag = gtag; // expose globally

  gtag('js', new Date());
  gtag('config', 'G-Y906QGSN42');
})();
  
  
  
  const menuIcon = document.getElementById('menu-icon');
  const menu = document.getElementById('menu-toggle');

  menuIcon.addEventListener('click', () => {
    menu.classList.toggle('show');
    menuIcon.textContent = menu.classList.contains('show') ? '✖' : '☰';
  });




