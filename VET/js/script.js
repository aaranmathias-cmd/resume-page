document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.getElementById("menu-btn");
  const closeBtn = document.getElementById("close-btn");
  const mobileMenu = document.getElementById("mobile-menu");

  if (menuBtn && closeBtn && mobileMenu) {
    menuBtn.addEventListener("click", () => {
      mobileMenu.classList.remove("hidden");
      mobileMenu.classList.add("flex");
    });

    closeBtn.addEventListener("click", () => {
      mobileMenu.classList.remove("flex");
      mobileMenu.classList.add("hidden");
    });

    // Close menu when clicking a link
    const navLinks = mobileMenu.querySelectorAll("a");
    navLinks.forEach(link => {
      link.addEventListener("click", () => {
        mobileMenu.classList.remove("flex");
        mobileMenu.classList.add("hidden");
      });
    });
  }
});

// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    const targetId = this.getAttribute("href");
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      e.preventDefault();
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  });
});

// Animate elements on scroll
const animatedElements = document.querySelectorAll(".animate-fadeIn");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("opacity-100");
      }
    });
  },
  { threshold: 0.2 }
);

animatedElements.forEach((el) => observer.observe(el));
