import { useBlockProps, InnerBlocks, RichText } from "@wordpress/block-editor";

export const Save = ({ attributes }) => {
  const blockProps = useBlockProps.save();
  const baseClass = blockProps.className;

  return (
    <div {...blockProps}>
      <RichText.Content
        value={attributes.title}
        tagName="p"
        className={`${baseClass}__title`}
      />
      <InnerBlocks.Content />
    </div>
  );
};
