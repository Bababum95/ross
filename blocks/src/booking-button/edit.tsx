import {
  useBlockProps,
  InspectorControls,
  RichText,
} from "@wordpress/block-editor";
import { PanelBody, TextControl } from "@wordpress/components";

export const Edit = ({ attributes, setAttributes }) => {
  const blockProps = useBlockProps();

  return (
    <div {...blockProps}>
      <RichText
        value={attributes.label}
        onChange={(label) => setAttributes({ label })}
        tagName="button"
        className="wp-element-button"
      />

      <InspectorControls>
        <PanelBody title="Settings">
          <TextControl
            label="Token"
            value={attributes.token}
            onChange={(token) => setAttributes({ token })}
          />
          <TextControl
            label="Orgname"
            value={attributes.orgname}
            onChange={(orgname) => setAttributes({ orgname })}
          />
        </PanelBody>
      </InspectorControls>
    </div>
  );
};
