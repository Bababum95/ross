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
      <ol className={`${baseClass}__list`}>
        <InnerBlocks.Content />
      </ol>
    </div>
  );
};
