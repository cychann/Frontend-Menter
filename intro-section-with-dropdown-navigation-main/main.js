const menu = document.querySelector(".menu");
const closeMenu = document.querySelector(".close-menu");
const navbar = document.querySelector(".navbar");
const feature = document.querySelector("#features");
const featureList = document.querySelector(".feture-list");
const company = document.querySelector("#company");
const companyList = document.querySelector(".company-list");

menu.addEventListener("click", () => {
  menu.style.display = "none";
  closeMenu.style.display = "block";
  navbar.style.display = "block";
});

closeMenu.addEventListener("click", () => {
  menu.style.display = "block";
  closeMenu.style.display = "none";
  navbar.style.display = "none";
});

feature.addEventListener("click", () => {
  if (featureList.className === "feture-list") {
    featureList.classList.add("feature-active");
  } else {
    featureList.classList.remove("feature-active");
  }
});

company.addEventListener("click", () => {
  if (companyList.className === "company-list") {
    companyList.classList.add("company-active");
  } else {
    companyList.classList.remove("company-active");
  }
});
