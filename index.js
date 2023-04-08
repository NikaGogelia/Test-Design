"use strict";

// Active Navbar Link
const navLinks = document.querySelectorAll(".navbar-link");

navLinks.forEach((navLink) => {
  navLink.addEventListener("click", () => {
    navLinks.forEach((navLink) => navLink.classList.remove("active"));
    navLink.classList.add("active");
  });
});
