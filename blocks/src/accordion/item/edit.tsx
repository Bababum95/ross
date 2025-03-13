import { useBlockProps, InnerBlocks, RichText } from "@wordpress/block-editor";

import "./editor.scss";

export const Edit = ({ attributes, setAttributes }) => {
  const blockProps = useBlockProps();

  return (
    <li {...blockProps}>
      <svg
        width="52"
        height="52"
        viewBox="0 0 52 52"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="wp-block-ross-accordion-item__icon"
      >
        <rect width="52" height="52" rx="26" fill="#F6F6F6" />
        <path
          className="wp-block-ross-accordion-item__path"
          d="M26 16V36"
          stroke="#E30B2E"
          stroke-width="2"
        />
        <path d="M16 26L36 26" stroke="#E30B2E" stroke-width="2" />
      </svg>
      <div className="wp-block-ross-accordion-item__wrapper">
        <RichText
          className="wp-block-ross-accordion-item__title"
          placeholder="Title"
          tagName="p"
          value={attributes.title}
          onChange={(value) => setAttributes({ title: value })}
        />
        <div className="wp-block-ross-accordion-item__content">
          <InnerBlocks />
        </div>
      </div>
    </li>
  );
};
