import { useBlockProps, InnerBlocks, RichText } from "@wordpress/block-editor";

import "./editor.scss";

export const Edit = ({ attributes, setAttributes }) => {
  const blockProps = useBlockProps();

  return (
    <div {...blockProps}>
      <RichText
        placeholder="Title"
        tagName="p"
        value={attributes.title}
        onChange={(value) => setAttributes({ title: value })}
      />
      <InnerBlocks
        allowedBlocks={["core/navigation"]}
        template={[
          [
            "core/navigation",
            {
              overlayMenu: "never",
              layout: { orientation: "vertical" },
            },
          ],
        ]}
      />
    </div>
  );
};
