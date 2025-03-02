import Swiper from "swiper";
import { Navigation, Grid, Autoplay } from "swiper/modules";

const sliders: NodeListOf<HTMLElement> = document.querySelectorAll(".swiper");

sliders.forEach((slider) => {
  const options = slider.dataset.options
    ? JSON.parse(slider.dataset.options)
    : {};
  new Swiper(slider, {
    ...options,
    modules: [Navigation, Grid, Autoplay],
  });
});
