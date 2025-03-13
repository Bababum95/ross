const accordionItems: NodeListOf<HTMLElement> = document.querySelectorAll(
  ".wp-block-ross-accordion-item",
);

accordionItems?.forEach((item) => {
  const content: HTMLElement = item.querySelector(
    ".wp-block-ross-accordion-item__content",
  );

  item.style.setProperty("--max-height", content.scrollHeight + "px");

  item.addEventListener("click", () => {
    item.classList.toggle("active");
  });
});
