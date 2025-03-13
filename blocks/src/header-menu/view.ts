const button = document.querySelector(".wp-block-ross-header-menu__button");
const menu = document.querySelector(".wp-block-ross-header-menu__List");
const overlay = document.querySelector(".wp-block-ross-header-menu__overlay");
const subMenus: NodeListOf<HTMLElement> = document.querySelectorAll(
  ".wp-block-ross-header-menu-item",
);

button?.addEventListener("click", () => {
  menu.classList.toggle("active");
  overlay.classList.toggle("active");
});

overlay?.addEventListener("click", () => {
  menu.classList.remove("active");
  overlay.classList.remove("active");
});

subMenus?.forEach((subMenu) => {
  const panel: HTMLElement = subMenu.querySelector("nav.wp-block-navigation");
  subMenu.style.setProperty("--max-height", panel.scrollHeight + "px");

  subMenu.addEventListener("click", () => {
    subMenu.classList.toggle("active");
  });
});
