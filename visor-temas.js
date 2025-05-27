document.addEventListener("DOMContentLoaded", () => {
  let zoomLevel = 1;
  let currentIndex = 0;
  let currentGrupo = [];
  let themeMode = "light";
  let currentContenedor = "";

  const iframe = document.getElementById('modalTemaIframe');
  const tituloModal = document.getElementById('modalTemaTitulo');
  const abrirOtra = document.getElementById('abrirNuevaPestana');
  const prevBtn = document.getElementById('btn-prev');
  const nextBtn = document.getElementById('btn-next');
  const cerrarModalBtn = document.getElementById('cerrarModalBtn');
  const loader = document.getElementById('loader');
  const modal = new bootstrap.Modal(document.getElementById('modalTemaGenerico'));
  const gifLoader = document.getElementById('gif-loader');

  const gifs = [
    "assets/gifts/1.gif",
    "assets/gifts/2.gif",
    "assets/gifts/3.gif",
    "assets/gifts/4.gif",
    "assets/gifts/5.gif",
    "assets/gifts/6.gif",
    "assets/gifts/7.gif",
    "assets/gifts/8.gif",
    "assets/gifts/9.gif",
    "assets/gifts/10.gif",
    "assets/gifts/11.gif"
  ];

  function applyTheme(mode) {
    const modalContent = document.getElementById('modalContent');
    const iframeWrapper = document.getElementById('iframeWrapper');

    if (mode === "light") {
      modalContent.style.backgroundColor = "#fff";
      modalContent.style.color = "#111";
      iframeWrapper.style.backgroundColor = "#fff";
      iframe.style.filter = "none";
      document.getElementById('toggleThemeBtn').innerHTML = "🌙";
    } else if (mode === "dark") {
      modalContent.style.backgroundColor = "#121212";
      modalContent.style.color = "#f1f1f1";
      iframeWrapper.style.backgroundColor = "#121212";
      iframe.style.filter = "invert(1) hue-rotate(180deg)";
      document.getElementById('toggleThemeBtn').innerHTML = "☕";
    } else {
      modalContent.style.backgroundColor = "#f4ecd8";
      modalContent.style.color = "#3e2f1c";
      iframeWrapper.style.backgroundColor = "#f4ecd8";
      iframe.style.filter = "sepia(0.4) brightness(0.95)";
      document.getElementById('toggleThemeBtn').innerHTML = "☀️";
    }
  }

  function mostrarLoader() {
    const randomGif = gifs[Math.floor(Math.random() * gifs.length)];
    gifLoader.src = randomGif + "?t=" + Date.now();
    gifLoader.style.display = "block";
    gifLoader.style.opacity = "1";
    loader.style.display = "flex";
  }

  function ocultarLoader() {
    gifLoader.style.display = "none";
    loader.style.display = "none";
  }

  function openTemaByIndex(index) {
    const tema = currentGrupo[index];
    currentIndex = index;
    iframe.style.display = 'none';
    iframe.style.opacity = 0;
    mostrarLoader();

    iframe.src = `https://docs.google.com/document/d/${tema.id}/preview`;
    abrirOtra.href = `https://docs.google.com/document/d/${tema.id}/edit`;
    tituloModal.innerHTML = "";

    zoomLevel = 1;
    applyTheme(themeMode);
    modal.show();

    setTimeout(() => {
      ocultarLoader();
      iframe.style.display = 'block';
      iframe.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
      iframe.style.opacity = 1;
      iframe.scrollIntoView({ behavior: 'smooth' });

      tituloModal.style.opacity = 0;
      tituloModal.style.transition = 'opacity 0.15s ease';
      setTimeout(() => {
        tituloModal.innerHTML = `📘 <strong>Módulo:</strong> ${currentContenedor} → ${tema.titulo} <span class='badge bg-info ms-2'>${index + 1} / ${currentGrupo.length}</span>`;
        tituloModal.style.opacity = 1;
      }, 200);
    }, 1500);
  }

  document.querySelectorAll('.tema-link').forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();

      const contenedorID = link.getAttribute('data-contenedor');
      const contenedor = document.getElementById(contenedorID);
      currentContenedor = document.querySelector(`h2.section-title[onclick*="${contenedorID}"]`)?.textContent.trim() || contenedorID;

      const enlaces = contenedor.querySelectorAll('.tema-link');
      currentGrupo = Array.from(enlaces).map(l => ({
        id: l.getAttribute('data-id'),
        titulo: l.getAttribute('data-titulo')
      }));

      currentIndex = Array.from(enlaces).indexOf(link);
      openTemaByIndex(currentIndex);
    });
  });

  prevBtn.onclick = () => {
    if (currentIndex > 0) {
      mostrarLoader();
      openTemaByIndex(currentIndex - 1);
    }
  };

  nextBtn.onclick = () => {
    if (currentIndex < currentGrupo.length - 1) {
      mostrarLoader();
      openTemaByIndex(currentIndex + 1);
    }
  };

  document.getElementById('zoomInBtn').addEventListener('click', () => {
    zoomLevel = Math.min(zoomLevel + 0.1, 2);
    iframe.style.transform = `scale(${zoomLevel})`;
  });

  document.getElementById('zoomOutBtn').addEventListener('click', () => {
    zoomLevel = Math.max(zoomLevel - 0.1, 0.5);
    iframe.style.transform = `scale(${zoomLevel})`;
  });

  document.getElementById('toggleThemeBtn').addEventListener('click', () => {
    if (themeMode === "light") themeMode = "dark";
    else if (themeMode === "dark") themeMode = "rest";
    else themeMode = "light";
    applyTheme(themeMode);
  });

  cerrarModalBtn.addEventListener('click', () => {
    iframe.src = '';
    iframe.style.display = 'none';
    mostrarLoader();
    document.body.classList.remove('modal-open');
    document.querySelectorAll('.modal-backdrop').forEach(el => el.remove());
  });
});
