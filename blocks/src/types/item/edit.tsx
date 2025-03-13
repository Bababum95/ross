import {
  useBlockProps,
  RichText,
  InspectorControls,
} from "@wordpress/block-editor";
import { PanelBody } from "@wordpress/components";

import { Image } from "@/components/Image";

import "./editor.scss";

export const Edit = ({ attributes, setAttributes }) => {
  const blockProps = useBlockProps();

  return (
    <li {...blockProps}>
      <RichText
        className="wp-block-ross-types-item__label"
        placeholder="Label"
        tagName="p"
        value={attributes.label}
        onChange={(value) => setAttributes({ label: value })}
      />
      {attributes.mediaURL && (
        <img
          className="wp-block-ross-types-item__image"
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
    </li>
  );
};
