import { useBlockProps, InnerBlocks, RichText } from "@wordpress/block-editor";

export const Save = ({ attributes }) => {
  const blockProps = useBlockProps.save();
  const baseClass = blockProps.className;

  return (
    <div {...blockProps}>
      <RichText.Content
        className={`${baseClass}__title`}
        tagName="h2"
        value={attributes.title}
      />
      <div className={`${baseClass}__wrapper`}>
        {attributes.mediaURL && (
          <img className={`${baseClass}__image`} src={attributes.mediaURL} />
        )}
        <ul className={`${baseClass}__List`}>
          <InnerBlocks.Content />
        </ul>
      </div>
    </div>
  );
};
