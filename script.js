// PASSWORD CHECK
function checkPass() {
  const input = document.getElementById("pass").value.trim();
  if (input === "01/01/2025") {
    document.getElementById("password-screen").classList.add("hidden");
    document.getElementById("main-content").classList.remove("hidden");
  } else {
    alert("Not quite… try again! 💖");
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