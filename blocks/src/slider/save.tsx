import { useBlockProps, InnerBlocks } from "@wordpress/block-editor";
import type { SwiperOptions } from "swiper/types";
import classNames from "classnames";

export const Save = ({ attributes }) => {
  const options: SwiperOptions = {
    loop: attributes.loop,
    breakpoints: {},
  };

  if (attributes.autoplay) {
    options.autoplay = {
      delay: attributes.autoplaySpeed,
    };
  }

  attributes.breakpoints.forEach((breakpoint) => {
    options.breakpoints[breakpoint.point] = {
      slidesPerView: breakpoint.slidesPerView,
      spaceBetween: breakpoint.spaceBetween,
    };

    if (breakpoint.isGrid) {
      options.breakpoints[breakpoint.point].grid = {
        rows: 2,
        fill: "row",
      };
    }
  });

  const blockProps = useBlockProps.save({
    "data-options": JSON.stringify(options),
  });
  const baseClass = blockProps.className;

  return (
    <div {...blockProps} className={classNames(baseClass, "swiper")}>
      <div className={`${baseClass}__wrapper swiper-wrapper`}>
        <InnerBlocks.Content />
      </div>
    </div>
  );
};
