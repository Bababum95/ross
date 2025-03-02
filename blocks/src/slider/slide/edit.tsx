import { useBlockProps, InnerBlocks } from "@wordpress/block-editor";
import { SwiperSlide } from "swiper/react";
import classNames from "classnames";

export const Edit = () => {
  const blockProps = useBlockProps();

  return (
    <SwiperSlide
      {...blockProps}
      className={classNames(blockProps.className, "swiper-slide")}
    >
      <InnerBlocks allowedBlocks={["ross/partner"]} />
    </SwiperSlide>
  );
};
