// Sistema de cambio de tema de color para La Mesa de Oliva
(function () {
  const savedTheme = localStorage.getItem('lamesa_theme') || 'oliva';
  document.documentElement.setAttribute('data-theme', savedTheme);

  document.addEventListener('DOMContentLoaded', () => {
    const themeButtons = document.querySelectorAll('.theme-btn');
    
    function updateActiveButton(currentTheme) {
      themeButtons.forEach(btn => {
        if (btn.getAttribute('data-theme') === currentTheme) {
          btn.classList.add('active');
          btn.setAttribute('aria-pressed', 'true');
        } else {
          btn.classList.remove('active');
          btn.setAttribute('aria-pressed', 'false');
        }
      });
    }

    updateActiveButton(savedTheme);

    themeButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const theme = btn.getAttribute('data-theme');
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('lamesa_theme', theme);
        updateActiveButton(theme);
      });
    });
  });
})();
