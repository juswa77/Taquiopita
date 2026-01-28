document.addEventListener("DOMContentLoaded", () => {
  const backToTopBtn = document.getElementById("backToTop");
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-links a");

  // YEAR
  document.getElementById("year").textContent = new Date().getFullYear();

  // BACK TO TOP
  window.onscroll = function() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
      backToTopBtn.style.display = "block";
    } else {
      backToTopBtn.style.display = "none";
    }
  };

  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // ACTIVE NAV LINK
  window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      if (pageYOffset >= sectionTop) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href") === "#" + current) {
        link.classList.add("active");
      }
    });
  });

  // ===== RATING POPUP =====
  const popup = document.getElementById("ratingPopup");
  const stars = document.querySelectorAll(".stars span");
  const thankYou = document.querySelector(".thank-you");
  const rateUsBtn = document.getElementById("rateUsBtn");

  // Show popup automatically if user hasn't rated
  if (!localStorage.getItem("taquiopitaRating")) {
    setTimeout(() => {
      popup.classList.add("show");
    }, 2000);
  }

  // Show popup when Rate Us button clicked
  rateUsBtn.addEventListener("click", () => {
    popup.classList.add("show");
  });

  // STAR CLICK LOGIC
  stars.forEach(star => {
    star.addEventListener("click", () => {
      const rating = star.getAttribute("data-value");
      localStorage.setItem("taquiopitaRating", rating);

      // Highlight stars
      stars.forEach(s => s.classList.remove("active"));
      for (let i = 0; i < rating; i++) {
        stars[i].classList.add("active");
      }

      // Show thank-you
      thankYou.style.display = "block";

      // Fade out popup after 1.5s
      setTimeout(() => {
        popup.classList.remove("show");
        thankYou.style.display = "none";
      }, 1500);
    });
  });
});




// HERO WORD SLIDE / FADE ANIMATION
document.addEventListener("DOMContentLoaded", () => {
  const words = ["Shawarma", "Kebabs", "Flavor"];
  const typing = document.getElementById("typing");
  let index = 0;

  function showWord() {
    typing.classList.remove("show"); // fade out
    setTimeout(() => {
      typing.textContent = words[index]; // change word
      typing.classList.add("show"); // fade in
      index = (index + 1) % words.length;
    }, 300); // short delay for fade out
  }

  // Initial word animation
  typing.classList.add("show");

  // Loop every 2.5 seconds
  setInterval(showWord, 1000 + 1500);
});
