import {
  useBlockProps,
  InnerBlocks,
  InspectorControls,
  PanelColorSettings,
} from "@wordpress/block-editor";

import "./editor.scss";

export const Edit = ({ attributes, setAttributes }) => {
  const blockProps = useBlockProps({
    style: {
      "--text-color": attributes.textColor,
      "--text-overlay-color":
        attributes.textOverlayColor || attributes.textColor,
    } as React.CSSProperties,
  });

  return (
    <div {...blockProps}>
      <nav className="wp-block-ross-hedaer-menu__List">
        <InnerBlocks
          allowedBlocks={["ross/hedaer-menu-item", "ross/booking-button"]}
          template={[
            ["ross/hedaer-menu-item", {}],
            ["ross/booking-button", {}],
          ]}
        />
      </nav>
      <InspectorControls>
        <PanelColorSettings
          title="Color Settings"
          initialOpen={true}
          colorSettings={[
            {
              value: attributes.textColor,
              onChange: (color) => setAttributes({ textColor: color }),
              label: "Text",
              enableAlpha: true,
              clearable: true,
            },
            {
              value: attributes.textOverlayColor,
              onChange: (color) => setAttributes({ textOverlayColor: color }),
              label: "Hover Link",
              enableAlpha: true,
              clearable: true,
            },
          ]}
        />
      </InspectorControls>
    </div>
  );
};
