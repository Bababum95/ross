import { useBlockProps, InnerBlocks } from "@wordpress/block-editor";
import type { SwiperOptions } from "swiper/types";
import classNames from "classnames";

export const Save = ({ attributes }) => {
  const options: SwiperOptions = {
    loop: attributes.loop,
    breakpoints: {
      480: {
        spaceBetween: attributes.spaceBetween,
        slidesPerView: "auto",
      },
      0: {
        spaceBetween: attributes.spaceBetweenPhone,
        slidesPerView: attributes.slidesPerViewPhone,
      },
    },
  };

  if (attributes.isGrid) {
    options.breakpoints["0"].grid = {
      rows: 2,
      fill: "row",
    };
  }

  if (attributes.autoplay) {
    options.autoplay = {
      delay: attributes.autoplaySpeed,
    };
  }

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
