const navMenu = document.getElementById("nav_menu");
const navBtn = document.getElementById("nav_btn");

navBtn.addEventListener("click", function () {
  navMenu.classList.toggle("active");
});