import { useBlockProps, InspectorControls } from "@wordpress/block-editor";
import { PanelBody, Placeholder, TextControl } from "@wordpress/components";
import type { IconType } from "@wordpress/components";

import metadata from "./block.json";

export const Edit = ({ attributes, setAttributes }) => {
  const blockProps = useBlockProps();

  return (
    <div {...blockProps}>
      <Placeholder icon={metadata.icon as IconType} label={metadata.title}>
        {metadata.description}
      </Placeholder>
      <InspectorControls>
        <PanelBody title="Settings">
          <TextControl
            label="Id"
            value={attributes.place_id}
            onChange={(place_id) => setAttributes({ place_id })}
          />
          <TextControl
            label="Link"
            value={attributes.link}
            onChange={(link) => setAttributes({ link })}
          />
        </PanelBody>
      </InspectorControls>
    </div>
  );
};
