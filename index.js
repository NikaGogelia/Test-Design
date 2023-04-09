"use strict";

// Active Navbar Link
const navLinks = document.querySelectorAll(".navbar-link");

navLinks.forEach((navLink) => {
  navLink.addEventListener("click", () => {
    navLinks.forEach((navLink) => navLink.classList.remove("active"));
    navLink.classList.add("active");
  });
});

// News Slider
const newsProfiles = document.querySelector(".news-profiles");
const newsCard = document.querySelectorAll(".news-card");
const newsArrows = document.querySelectorAll(".news-arrows > button");

let rangeValue = 0;
let columnGap = 20;

newsArrows.forEach((arrow) => {
  newsArrows[0].classList.add("disabled-arrow");
  arrow.addEventListener("click", () => {
    let scrollWidth = 0;

    switch (arrow.id) {
      case "prev":
        if (rangeValue === 0) {
          rangeValue = 0;
        } else {
          rangeValue--;
        }
        break;
      case "next":
        if (rangeValue === newsCard.length - 1) {
          rangeValue = newsCard.length - 1;
        } else {
          rangeValue++;
        }
        break;
      default:
        break;
    }

    if (rangeValue === 0) {
      newsArrows[0].classList.add("disabled-arrow");
    } else if (rangeValue === newsCard.length - 1) {
      newsArrows[1].classList.add("disabled-arrow");
    } else {
      newsArrows[0].classList.remove("disabled-arrow");
      newsArrows[1].classList.remove("disabled-arrow");
    }
    scrollWidth += (newsCard[0].clientWidth + columnGap) * rangeValue;
    newsProfiles.style = `left: -${scrollWidth}px`;
  });
});
