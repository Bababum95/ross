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
      <InnerBlocks allowedBlocks={["core/navigation"]} />
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
