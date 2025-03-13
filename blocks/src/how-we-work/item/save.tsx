import { useBlockProps, RichText } from "@wordpress/block-editor";

export const Save = ({ attributes }) => {
  const blockProps = useBlockProps.save();
  const baseClass = blockProps.className;

  return (
    <li {...blockProps}>
      <div className={`${baseClass}__content`}>
        <RichText.Content
          value={attributes.title}
          tagName="h3"
          className={`${baseClass}__title`}
        />
        <RichText.Content
          value={attributes.text}
          tagName="p"
          className={`${baseClass}__text`}
        />
      </div>
    </li>
  );
};
