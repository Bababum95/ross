import {
  useBlockProps,
  InnerBlocks,
  InspectorControls,
} from "@wordpress/block-editor";
import { PanelBody } from "@wordpress/components";

import { Image } from "@/components/Image";

export const Edit = ({ attributes, setAttributes }) => {
  const blockProps = useBlockProps();

  return (
    <div {...blockProps}>
      <div className="wp-block-ross-hero-banner__left">
        <div className="wp-block-ross-hero-banner__content">
          <InnerBlocks />
        </div>
      </div>
      {attributes.mediaURL && (
        <img
          className="wp-block-ross-hero-banner__image"
          src={attributes.mediaURL}
        />
      )}
      <InspectorControls>
        <PanelBody title="Image">
          <Image
            mediaID={attributes.mediaID}
            mediaURL={attributes.mediaURL}
            setAttributes={setAttributes}
          />
        </PanelBody>
      </InspectorControls>
    </div>
  );
};
