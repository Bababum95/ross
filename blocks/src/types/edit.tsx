import { useBlockProps, InnerBlocks, RichText } from "@wordpress/block-editor";

import "./editor.scss";

export const Edit = ({ attributes, setAttributes }) => {
  const blockProps = useBlockProps();

  return (
    <div {...blockProps}>
      <RichText
        className="wp-block-ross-types__title"
        placeholder="Title"
        tagName="h2"
        value={attributes.title}
        onChange={(value) => setAttributes({ title: value })}
      />
      <ol className="wp-block-ross-types__list">
        <InnerBlocks
          allowedBlocks={["ross/types-item"]}
          template={[["ross/types-item", {}]]}
        />
      </ol>
    </div>
  );
};
