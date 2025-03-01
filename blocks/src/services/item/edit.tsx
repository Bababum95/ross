import {
  useBlockProps,
  InnerBlocks,
  InspectorControls,
  RichText,
  PanelColorSettings,
} from "@wordpress/block-editor";
import { PanelBody } from "@wordpress/components";

import { Image } from "@/components/Image";

export const Edit = ({ attributes, setAttributes }) => {
  const blockProps = useBlockProps({
    style: {
      "--text-color": attributes.textColor,
      "--text-overlay-color":
        attributes.textOverlayColor || attributes.textColor,
      "--bg-color": attributes.bgColor,
      "--secondary-bg-color": attributes.secondaryBgColor,
    } as React.CSSProperties,
  });

  return (
    <div {...blockProps}>
      <RichText
        placeholder="Title"
        tagName="h2"
        value={attributes.title}
        onChange={(value) => setAttributes({ title: value })}
      />
      <InnerBlocks
        allowedBlocks={["core/navigation"]}
        template={[
          [
            "core/navigation",
            {
              overlayMenu: "never",
              layout: { orientation: "vertical" },
            },
          ],
        ]}
      />
      {attributes.mediaURL && (
        <img
          className="wp-block-ross-services-item__image"
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
            {
              value: attributes.bgColor,
              onChange: (color) => setAttributes({ bgColor: color }),
              label: "Primary background",
              enableAlpha: true,
              clearable: true,
            },
            {
              value: attributes.secondaryBgColor,
              onChange: (color) => setAttributes({ secondaryBgColor: color }),
              label: "Secondary background",
              enableAlpha: true,
              clearable: true,
            },
          ]}
        />
      </InspectorControls>
    </div>
  );
};
