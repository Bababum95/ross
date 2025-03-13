import {
  useBlockProps,
  InnerBlocks,
  InspectorControls,
  RichText,
} from "@wordpress/block-editor";
import { PanelBody } from "@wordpress/components";

import { Image } from "@/components/Image";

export const Edit = ({ attributes, setAttributes }) => {
  const blockProps = useBlockProps();

  return (
    <div {...blockProps}>
      <RichText
        className="wp-block-ross-accordion__title"
        placeholder="Title"
        tagName="h2"
        value={attributes.title}
        onChange={(value) => setAttributes({ title: value })}
      />
      <div className="wp-block-ross-accordion__wrapper">
        {attributes.mediaURL && (
          <img
            className="wp-block-ross--accordion__image"
            src={attributes.mediaURL}
          />
        )}
        <ul className="wp-block-ross-accordion__List">
          <InnerBlocks
            allowedBlocks={["ross/accordion-item"]}
            template={[["ross/accordion-item", {}]]}
          />
        </ul>
      </div>
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
