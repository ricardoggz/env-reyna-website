var navBtn = document.getElementById("nav_btn");
var navMenu = document.getElementById("nav_menu");
var btnOption = document.querySelectorAll(".btn_option");

navBtn.addEventListener("click", function () {
  navMenu.classList.toggle("active");
});

btnOption.forEach((item) => {
  item.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });
});
