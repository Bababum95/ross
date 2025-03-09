import { useBlockProps, InnerBlocks } from "@wordpress/block-editor";

export const Save = ({ attributes }) => {
  const blockProps = useBlockProps.save({
    className: attributes.layout,
    style: {
      "--bg-color": attributes.bgColor,
      "--text-color": attributes.textColor,
    } as React.CSSProperties,
  });

  return (
    <div {...blockProps}>
      <div className="wp-block-ross-hero-banner__left">
        <div className="wp-block-ross-hero-banner__content">
          <InnerBlocks.Content />
        </div>
      </div>
      {attributes.mediaURL && (
        <img
          className="wp-block-ross-hero-banner__image"
          src={attributes.mediaURL}
        />
      )}
    </div>
  );
};
