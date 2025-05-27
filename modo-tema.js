// modo-tema.js
document.addEventListener('DOMContentLoaded', function() {
  const toggleThemeBtn = document.getElementById('toggleTheme');
  const toggleThemeBtnModal = document.getElementById('toggleThemeBtn');
  
  // Verificar preferencia del sistema o tema guardado
  const savedTheme = localStorage.getItem('theme') || 
                    (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  
  // Aplicar tema inicial
  applyTheme(savedTheme);
  
  // Configurar botón de alternancia
  if (toggleThemeBtn) {
    toggleThemeBtn.addEventListener('click', toggleTheme);
  }
  
  if (toggleThemeBtnModal) {
    toggleThemeBtnModal.addEventListener('click', toggleTheme);
  }
  
  function toggleTheme() {
    const currentTheme = document.body.classList.contains('dark-theme') ? 'dark' : 'light';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    applyTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  }
  
  function applyTheme(theme) {
    document.body.classList.remove('dark-theme', 'light-theme');
    document.body.classList.add(`${theme}-theme`);
    
    // Actualizar texto del botón
    if (toggleThemeBtn) {
      toggleThemeBtn.innerHTML = theme === 'dark' ? '☀️ Modo Claro' : '🌙 Modo Oscuro';
    }
    
    if (toggleThemeBtnModal) {
      toggleThemeBtnModal.innerHTML = theme === 'dark' ? '☀️' : '🌙';
      toggleThemeBtnModal.title = theme === 'dark' ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro';
    }
  }
});