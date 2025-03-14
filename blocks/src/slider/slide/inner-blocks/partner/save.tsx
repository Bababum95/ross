import { useBlockProps } from "@wordpress/block-editor";

export const Save = ({ attributes }) => {
  const blockProps = useBlockProps.save();

  return (
    <div {...blockProps}>
      {attributes.mediaURL && (
        <img
          className="wp-block-ross-partner__image"
          src={attributes.mediaURL}
        />
      )}
    </div>
  );
};
