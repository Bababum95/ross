import { useBlockProps, InnerBlocks, RichText } from "@wordpress/block-editor";

export const Save = ({ attributes }) => {
  const blockProps = useBlockProps.save();
  const baseClass = blockProps.className;

  return (
    <li {...blockProps}>
      <svg
        width="52"
        height="52"
        viewBox="0 0 52 52"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${baseClass}__icon`}
      >
        <rect width="52" height="52" rx="26" fill="#F6F6F6" />
        <path
          className={`${baseClass}__path`}
          d="M26 16V36"
          stroke="#E30B2E"
          stroke-width="2"
        />
        <path d="M16 26L36 26" stroke="#E30B2E" stroke-width="2" />
      </svg>
      <div className={`${baseClass}__wrapper`}>
        <RichText.Content
          value={attributes.title}
          tagName="p"
          className={`${baseClass}__title`}
        />
        <div className={`${baseClass}__content`}>
          <InnerBlocks.Content />
        </div>
      </div>
    </li>
  );
};
