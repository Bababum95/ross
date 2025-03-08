import { useBlockProps, InnerBlocks } from "@wordpress/block-editor";

export const Save = ({ attributes }) => {
  const blockProps = useBlockProps.save({
    style: {
      "--text-color": attributes.textColor,
      "--text-overlay-color":
        attributes.textOverlayColor || attributes.textColor,
    } as React.CSSProperties,
  });

  const baseClass = blockProps.className;

  return (
    <div {...blockProps}>
      <button className={`${baseClass}__button`}>
        <svg
          width="40"
          height="16"
          viewBox="0 0 40 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="40" height="2" fill="#E30B2E" />
          <rect y="7" width="40" height="2" fill="#E30B2E" />
          <rect y="14" width="40" height="2" fill="#E30B2E" />
        </svg>
      </button>
      <div className={`${baseClass}__overlay`} />
      <nav className={`${baseClass}__List`}>
        <InnerBlocks.Content />
      </nav>
    </div>
  );
};
