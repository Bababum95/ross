import { useBlockProps, InnerBlocks } from "@wordpress/block-editor";

export const Edit = () => {
  const blockProps = useBlockProps();

  return (
    <div {...blockProps}>
      <InnerBlocks allowedBlocks={["ross/services-item"]} />
    </div>
  );
};
