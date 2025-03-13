import { useBlockProps, RichText } from "@wordpress/block-editor";

export const Save = ({ attributes }) => {
  const blockProps = useBlockProps.save();
  const baseClass = blockProps.className;

  return (
    <li {...blockProps}>
      <RichText.Content
        value={attributes.label}
        tagName="h3"
        className={`${baseClass}__label`}
      />
      {attributes.mediaURL && (
        <img className={`${baseClass}__image`} src={attributes.mediaURL} />
      )}
    </li>
  );
};
