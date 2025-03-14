import Swiper from "swiper";
import { Navigation, Grid, Autoplay } from "swiper/modules";

const sliderBlocks: NodeListOf<HTMLElement> = document.querySelectorAll(
  ".wp-block-ross-slider",
);

sliderBlocks.forEach((block) => {
  const options = block.dataset.options
    ? JSON.parse(block.dataset.options)
    : {};

  const buttons: NodeListOf<HTMLElement> = block.querySelectorAll(
    ".wp-block-ross-slider__button",
  );

  if (buttons && buttons.length > 0) {
    options.navigation = {};
    buttons.forEach((button) => {
      const key = button.dataset.key;
      options.navigation[key] = button;
    });
  }

  const slider: HTMLElement = block.querySelector(".swiper");
  new Swiper(slider, {
    ...options,
    modules: [Navigation, Grid, Autoplay],
  });
});
