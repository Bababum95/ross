import { useBlockProps, InnerBlocks } from "@wordpress/block-editor";
import type { SwiperOptions } from "swiper/types";
import classNames from "classnames";

export const Save = ({ attributes }) => {
  const blockProps = useBlockProps.save();
  const baseClass = blockProps.className;
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

  return (
    <div {...blockProps} data-options={JSON.stringify(options)}>
      <div className="swiper">
        <div className={classNames(`${baseClass}__wrapper`, "swiper-wrapper")}>
          <InnerBlocks.Content />
        </div>
      </div>
      {attributes.showButtons && (
        <>
          <button
            className={classNames(`${baseClass}__button`, "swiper-button-prev")}
            data-key="prevEl"
          >
            <svg
              width="60"
              height="60"
              viewBox="0 0 60 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="60" height="60" rx="30" fill="#F6F6F6" />
              <path
                d="M34.25 21.5L25.75 30L34.25 38.5"
                stroke="black"
                stroke-width="2"
              />
            </svg>
          </button>
          <button
            className={classNames(`${baseClass}__button`, "swiper-button-next")}
            data-key="nextEl"
          >
            <svg
              width="60"
              height="60"
              viewBox="0 0 60 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="60" height="60" rx="30" fill="#F6F6F6" />
              <path
                d="M25.75 38.5L34.25 30L25.75 21.5"
                stroke="black"
                stroke-width="2"
              />
            </svg>
          </button>
        </>
      )}
    </div>
  );
};
