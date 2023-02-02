const menuBtn = document.querySelector(".menu_icon");
const menuCloseBtn = document.querySelector(".menu_close_icon");
const menus = document.querySelector(".header_menu");
const wrapper = document.querySelector(".wrapper");

menuBtn.addEventListener("click", () => {
  menus.classList.add("active");
  menuCloseBtn.classList.add("active");
  menuBtn.classList.remove("active");
  wrapper.classList.add("dark");
});

menuCloseBtn.addEventListener("click", () => {
  menus.classList.remove("active");
  menuBtn.classList.add("active");
  menuCloseBtn.classList.remove("active");
  wrapper.classList.remove("dark");
});
