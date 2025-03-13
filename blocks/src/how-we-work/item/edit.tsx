import { useBlockProps, RichText } from "@wordpress/block-editor";

import "./editor.scss";

export const Edit = ({ attributes, setAttributes }) => {
  const blockProps = useBlockProps();

  return (
    <li {...blockProps}>
      <div className="wp-block-ross-how-we-work-item__content">
        <RichText
          className="wp-block-ross-how-we-work-item__title"
          placeholder="Title"
          tagName="h3"
          value={attributes.title}
          onChange={(value) => setAttributes({ title: value })}
        />
        <RichText
          className="wp-block-ross-how-we-work-item__text"
          placeholder="text"
          tagName="p"
          value={attributes.text}
          onChange={(value) => setAttributes({ text: value })}
        />
      </div>
    </li>
  );
};
