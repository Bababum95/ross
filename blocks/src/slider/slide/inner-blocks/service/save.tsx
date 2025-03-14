import { useBlockProps, RichText } from "@wordpress/block-editor";

export const Save = ({ attributes }) => {
  const blockProps = useBlockProps.save({
    href: attributes.link,
    style: {
      "--text-color": attributes.textColor,
      "--bg-color": attributes.bgColor,
    } as React.CSSProperties,
  });
  const baseClass = blockProps.className;

  return (
    <a {...blockProps}>
      <RichText.Content
        value={attributes.label}
        tagName="p"
        className={`${baseClass}__label`}
      />
      {attributes.mediaURL && (
        <img className={`${baseClass}__image`} src={attributes.mediaURL} />
      )}
    </a>
  );
};
