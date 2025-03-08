const button = document.querySelector(".wp-block-ross-hedaer-menu__button");
const menu = document.querySelector(".wp-block-ross-hedaer-menu__List");
const overlay = document.querySelector(".wp-block-ross-hedaer-menu__overlay");
const subMenus = document.querySelectorAll(".wp-block-ross-hedaer-menu-item");

button?.addEventListener("click", () => {
  menu.classList.toggle("active");
  overlay.classList.toggle("active");
});

overlay?.addEventListener("click", () => {
  menu.classList.remove("active");
  overlay.classList.remove("active");
});

subMenus?.forEach((subMenu) => {
  subMenu.addEventListener("click", () => {
    subMenu.classList.toggle("active");
  });
});
