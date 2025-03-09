import {
  useBlockProps,
  InnerBlocks,
  InspectorControls,
  PanelColorSettings,
} from "@wordpress/block-editor";
import {
  PanelBody,
  __experimentalToggleGroupControl as ToggleGroupControl,
  __experimentalToggleGroupControlOptionIcon as ToggleGroupControlOptionIcon,
} from "@wordpress/components";
import { alignNone, positionCenter } from "@wordpress/icons";

import { Image } from "@/components/Image";

export const Edit = ({ attributes, setAttributes }) => {
  const blockProps = useBlockProps({
    className: attributes.layout,
    style: {
      "--bg-color": attributes.bgColor,
      "--text-color": attributes.textColor,
    } as React.CSSProperties,
  });

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
        <PanelBody title="Settings" initialOpen={false}>
          <ToggleGroupControl
            label="Layout"
            value={attributes.layout}
            onChange={(layout) => setAttributes({ layout })}
            isBlock
            __nextHasNoMarginBottom
            __next40pxDefaultSize
          >
            <ToggleGroupControlOptionIcon
              value="full"
              label="Full page"
              icon={alignNone}
            />
            <ToggleGroupControlOptionIcon
              value="contained"
              label="Contained"
              icon={positionCenter}
            />
          </ToggleGroupControl>
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
