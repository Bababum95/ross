import { useBlockProps, InnerBlocks, RichText } from "@wordpress/block-editor";

export const Save = ({ attributes }) => {
  const blockProps = useBlockProps.save({
    style: {
      "--text-color": attributes.textColor,
      "--text-overlay-color":
        attributes.textOverlayColor || attributes.textColor,
      "--bg-color": attributes.bgColor,
      "--secondary-bg-color": attributes.secondaryBgColor,
    } as React.CSSProperties,
  });
  const baseClass = blockProps.className;

  return (
    <div {...blockProps}>
      <RichText.Content
        value={attributes.title}
        tagName="h2"
        className={`${baseClass}__title`}
      />
      <InnerBlocks.Content />
      {attributes.mediaURL && (
        <img className={`${baseClass}__image`} src={attributes.mediaURL} />
      )}
    </div>
  );
};
