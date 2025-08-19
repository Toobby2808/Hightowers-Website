document.addEventListener("DOMContentLoaded", () => {
  const hamburgerBtn = document.querySelector(".hamburger-btn");
  const icon = hamburgerBtn.querySelector("i");
  const mobileMenu = document.querySelector(".mobile-menu");
  const navLinks = mobileMenu.querySelectorAll(".nav-link");

  hamburgerBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("show");

    // SWITCH ICON ON CLICK
    icon.classList.toggle("ri-menu-line");
    icon.classList.toggle("ri-close-line");

    //CLOSING THE MOBILE-MENU WHENEVER A NAV-LINK IS CLICKED
    navLinks.forEach((navLink) => {
      navLink.addEventListener("click", () => {
        mobileMenu.classList.remove("show");

        // CHANGING THE ICON
        icon.classList.remove("ri-close-line");
        icon.classList.add("ri-menu-line");
      });
    });
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
      mobileMenu.classList.remove("show");

      // CHANGING THE ICON
      icon.classList.remove("ri-close-line");
      icon.classList.add("ri-menu-line");
    }
  });
});

const swiper = new Swiper(".swiper", {
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },

    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});

// SCROLL REVEAL ANIMATIONS

ScrollReveal({
  distance: "50px",
  duration: 1000,
  delay: 200,
  reset: true,
});

// HERO SECTION
ScrollReveal().reveal(".hero-img img", {
  origin: "right",
});

ScrollReveal().reveal(".hero-content p", {
  delay: 500,
});

ScrollReveal().reveal(".hero-content h1", {
  delay: 1000,
});

ScrollReveal().reveal(".hero-ctas", {
  delay: 1500,
});

// DESTINATION SECTION

ScrollReveal().reveal(".destination-card", {
  interval: 600,
});

//Banner Section

ScrollReveal().reveal(".banner-img img", {
  origin: "left",
});

ScrollReveal().reveal(".banner-contents h3", {
  delay: 500,
});

ScrollReveal().reveal(".banner-contents p", {
  delay: 1000,
});

ScrollReveal().reveal(".banner-cta", {
  delay: 1500,
});

// ACHIEVEMENT SECTION
ScrollReveal().reveal(".achievement", {
  interval: 600,
});

// SERVICES SECTION
ScrollReveal().reveal(".service-card", {
  interval: 600,
});
