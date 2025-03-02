import { useBlockProps, InnerBlocks } from "@wordpress/block-editor";
import classNames from "classnames";

export const Save = () => {
  const blockProps = useBlockProps.save();
  const baseClass = blockProps.className;

  return (
    <div {...blockProps} className={classNames(baseClass, "swiper-slide")}>
      <InnerBlocks.Content />
    </div>
  );
};
