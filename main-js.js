/**
 * Main JavaScript file for Inbound Holdings East Africa Ltd
 */

document.addEventListener("DOMContentLoaded", function () {
  // Mobile menu toggle
  const menuToggle = document.querySelector(".mobile-menu-toggle");
  const navList = document.querySelector(".nav-list");

  if (menuToggle && navList) {
    menuToggle.addEventListener("click", function () {
      navList.classList.toggle("active");
      document.body.classList.toggle("menu-open");
    });
  }

  // Close menu when clicking outside
  document.addEventListener("click", function (event) {
    if (
      navList &&
      navList.classList.contains("active") &&
      !event.target.closest(".main-nav") &&
      !event.target.closest(".mobile-menu-toggle")
    ) {
      navList.classList.remove("active");
      document.body.classList.remove("menu-open");
    }
  });

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        e.preventDefault();
        window.scrollTo({
          top: target.offsetTop - 80,
          behavior: "smooth",
        });

        // Close mobile menu if open
        if (navList && navList.classList.contains("active")) {
          navList.classList.remove("active");
          document.body.classList.remove("menu-open");
        }
      }
    });
  });

  // Add active class to current page in navigation
  const currentPage = window.location.pathname.split("/").pop();
  const navLinks = document.querySelectorAll(".nav-list a");

  navLinks.forEach((link) => {
    const linkPage = link.getAttribute("href");
    if (
      linkPage === currentPage ||
      (currentPage === "" && linkPage === "index.html")
    ) {
      link.classList.add("active");
    }
  });
});
