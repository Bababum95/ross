import { useBlockProps, InnerBlocks } from "@wordpress/block-editor";

export const Save = ({ attributes }) => {
  const blockProps = useBlockProps.save({
    style: {
      "--text-color": attributes.textColor,
      "--text-overlay-color":
        attributes.textOverlayColor || attributes.textColor,
    } as React.CSSProperties,
  });

  return (
    <div {...blockProps}>
      <InnerBlocks.Content />
    </div>
  );
};
