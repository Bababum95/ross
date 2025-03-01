import { useBlockProps, InnerBlocks } from "@wordpress/block-editor";

import "./editor.scss";

export const Edit = () => {
  const blockProps = useBlockProps();

  return (
    <div {...blockProps}>
      <InnerBlocks
        allowedBlocks={["ross/services-item"]}
        template={[["ross/services-item", {}]]}
      />
    </div>
  );
};
