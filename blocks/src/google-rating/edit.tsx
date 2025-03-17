import { useBlockProps, InspectorControls } from "@wordpress/block-editor";
import { PanelBody, TextControl } from "@wordpress/components";

import { ServerSideRenderComponent } from "@/components/ServerSideRenderComponent";
import metadata from "./block.json";

export const Edit = ({ attributes, setAttributes }) => {
  const blockProps = useBlockProps();

  return (
    <div {...blockProps}>
      <ServerSideRenderComponent
        attributes={attributes}
        description={metadata.description}
        name={metadata.name}
        title={metadata.title}
        icon={metadata.icon}
      />
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
