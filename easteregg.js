const frases = [
    "🧠 Se ha eliminado un bug mental.",
    "🪛 Sistema operativo del profe actualizado con café.",
    "🔋 Nivel de energía: 86% – Recargando lógica y memes.",
    "👾 Compilar con risas habilitado.",
    "📘 Manual de supervivencia Java desbloqueado.",
    "💾 Guardando excusas en la nube...",
    "🤖 ¡Error 404: Motivación no encontrada!",
    "🔐 Acceso concedido al modo genio (por hoy).",
    "💻 Clase compilada sin errores... por ahora 👀",
    "🔋 Modo 'modo estudiante': 5% batería, 100% memes.",
     "🧉 Código con sabor a mate y estrés.",
    "👾 Error 404: ganas de rendir no encontradas.",
     "🧠 RAM al 100%, pero sigo sin entender el for 🤯",
     "📦 Instalando: 'Zafa para el parcial' versión 1.0",
     "🔥 Este código está más roto que mis ganas un lunes.",
     "✅ Profe validado. Sistema en modo facha.",
     "📘 Si esto no aprueba, que se rompa todo.",
    "🧮 System.out.println(me quemé la cabeza, bro');",
    "⚠️ Compilando con fe y un poco de suerte, como siempre.",
    "👨‍💻 Clavé más bugs que excusas el finde.",
    "🧠 Borré más líneas de código que recuerdos tuyos.",
    "💾 Guardando los sentimientos... en un .zip con contraseña.",
    "👀 Hoy no hay errores... salvo el de haberte elegido.",
    "🚫 No me tira ni una excepción... vos sí lo hiciste.",
    "💔 Esta clase no se cae, como se cayó nuestra relación.",
    "📉 Como tu amor: el código dejó de responder.",
    "🧃 Brindo con mate por todos los bugs... y por vos también.",
    "🪛 Fixeé todos los errores menos ese que me dejaste en el corazón.",
    "🔁 Sigo en loop, pero ya no por vos. Ahora es por el parcial 😎",
    "🫠 Te amaba más que al modo oscuro... y eso ya es decir mucho."
  ];
  
  const btn = document.getElementById("easterBtn");
  const msg = document.getElementById("easterMessage");
  
  btn.addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * frases.length);
    msg.textContent = frases[randomIndex];
    msg.classList.remove("d-none");
  });