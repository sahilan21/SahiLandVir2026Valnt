// PASSWORD CHECK
function checkPass() {
  const input = document.getElementById("pass").value.trim();
  if (input === "01/01/2025") {
    document.getElementById("password-screen").classList.add("hidden");
    document.getElementById("main-content").classList.remove("hidden");
    startMusic();
    createHearts();
  } else {
    alert("Not quite… try again! 💖");
  }
}

// AUTOPLAY MUSIC
function startMusic() {
  const music = document.getElementById("bg-music");
  music.play().catch(() => console.log("Autoplay blocked; try clicking to start music."));
}

// CREATE FALLING HEARTS
function createHearts() {
  const container = document.getElementById("heart-container");
  for(let i=0; i<30; i++) {
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
