import { useBlockProps, InnerBlocks } from "@wordpress/block-editor";

import { Image } from "@/components/Image/Image";

export const Edit = ({ attributes, setAttributes }) => {
  const blockProps = useBlockProps();

  return (
    <div {...blockProps}>
      <div className="wp-block-ross-hero-banner__left">
        <div className="wp-block-ross-hero-banner__content">
          <InnerBlocks />
        </div>
      </div>
      <Image
        mediaID={attributes.mediaID}
        mediaURL={attributes.mediaURL}
        setAttributes={setAttributes}
        imageClass="wp-block-ross-hero-banner__image"
      />
    </div>
  );
};
