const openBtn = document.getElementById("openBtn");
const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const cardMessage = document.getElementById("card-message");

openBtn.addEventListener("click", checkPass);

// PASSWORD CHECK (start music immediately on success)
function checkPass() {
  const input = document.getElementById("pass").value.trim();

  if (input === "01/01/2025") {
    document.getElementById("password-screen").classList.add("hidden");
    document.getElementById("valentine-card").classList.remove("hidden");

    // IMPORTANT: Play music here (same click gesture)
    startMusic();
  } else {
    alert("Not quite… try again! 💖");
  }
}

// AUTOPLAY MUSIC (reliable: happens on button click)
function startMusic() {
  const music = document.getElementById("bg-music");

  // force reload in case browser cached a prior state
  music.load();

  music.play().catch(() => {
    // fallback prompt (some browsers still block if muted policy etc.)
    const notice = document.createElement("p");
    notice.id = "play-notice";
    notice.innerText = "Tap anywhere to start the music ❤️";
    document.body.appendChild(notice);

    document.body.addEventListener("click", () => {
      music.play();
      notice.remove();
    }, { once: true });
  });
}

// Valentine card logic: NO runs away
noBtn.style.position = "absolute";

function moveButton() {
  const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
  const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
}

// initial placement so it’s not overlapping
moveButton();

noBtn.addEventListener("mouseover", moveButton);
noBtn.addEventListener("touchstart", moveButton);

// YES shows main content and starts hearts
yesBtn.addEventListener("click", () => {
  cardMessage.innerHTML = "YAYYY 💖💖";

  document.getElementById("valentine-card").classList.add("hidden");
  document.getElementById("main-content").classList.remove("hidden");

  createHearts();
});

// CREATE FALLING HEARTS
function createHearts() {
  const container = document.getElementById("heart-container");
  container.innerHTML = "";

  for (let i = 0; i < 30; i++) {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (10 + Math.random() * 20) + "px";
    heart.style.animationDuration = (4 + Math.random() * 6) + "s";
    heart.innerText = "💖";
    container.appendChild(heart);
  }
}

// OPEN LETTER
function openLetter() {
  document.getElementById("letter-text").classList.remove("hidden");
}

// UNBOX GIFT
function openGift() {
  document.getElementById("gift-box").classList.add("hidden");
  document.getElementById("gift-img").classList.remove("hidden");
  document.getElementById("gift-text").classList.remove("hidden");
  document.getElementById("finale").classList.remove("hidden");
}

// CONFETTI (simple)
function showConfetti() {
  alert("🎉 Happy Valentine’s, my love! 💕");
}
