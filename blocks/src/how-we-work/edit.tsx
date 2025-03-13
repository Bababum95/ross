import { useBlockProps, InnerBlocks, RichText } from "@wordpress/block-editor";

import "./editor.scss";

export const Edit = ({ attributes, setAttributes }) => {
  const blockProps = useBlockProps();

  return (
    <div {...blockProps}>
      <RichText
        className="wp-block-ross-how-we-work__title"
        placeholder="Title"
        tagName="h2"
        value={attributes.title}
        onChange={(value) => setAttributes({ title: value })}
      />
      <ol className="wp-block-ross-how-we-work__list">
        <InnerBlocks
          allowedBlocks={["ross/how-we-work-item"]}
          template={[["ross/how-we-work-item", {}]]}
        />
      </ol>
    </div>
  );
};
