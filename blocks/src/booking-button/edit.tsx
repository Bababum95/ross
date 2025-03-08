import {
  useBlockProps,
  InspectorControls,
  RichText,
  PanelColorSettings,
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
        style={{
          color: attributes.textColor,
          backgroundColor: attributes.bgColor,
        }}
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
        <PanelColorSettings
          title="Color Settings"
          initialOpen={false}
          colorSettings={[
            {
              value: attributes.textColor,
              onChange: (color) => setAttributes({ textColor: color }),
              label: "Text",
              enableAlpha: true,
              clearable: true,
            },
            {
              value: attributes.bgColor,
              onChange: (color) => setAttributes({ bgColor: color }),
              label: "Background",
              enableAlpha: true,
              clearable: true,
            },
          ]}
        />
      </InspectorControls>
    </div>
  );
};
