import {
  useBlockProps,
  InnerBlocks,
  InspectorControls,
} from "@wordpress/block-editor";
import { PanelBody, RangeControl, ToggleControl } from "@wordpress/components";

export const Edit = ({ attributes, setAttributes }) => {
  const blockProps = useBlockProps();

  return (
    <div {...blockProps}>
      <InnerBlocks
        allowedBlocks={["ross/slider-slide"]}
        template={[["ross/slider-slide", {}]]}
      />
      <InspectorControls>
        <PanelBody title="Settings">
          <RangeControl
            __nextHasNoMarginBottom
            __next40pxDefaultSize
            label="Space between slides"
            value={attributes.spaceBetween}
            max={100}
            min={0}
            onChange={(value) => setAttributes({ spaceBetween: value })}
          />
          <RangeControl
            __nextHasNoMarginBottom
            __next40pxDefaultSize
            label="Space between slides phone"
            value={attributes.spaceBetweenPhone}
            max={100}
            min={0}
            onChange={(value) => setAttributes({ spaceBetweenPhone: value })}
          />
          <RangeControl
            __nextHasNoMarginBottom
            __next40pxDefaultSize
            label="Slides per view phone"
            value={attributes.slidesPerViewPhone}
            max={10}
            min={0}
            onChange={(value) => setAttributes({ slidesPerViewPhone: value })}
          />
          <ToggleControl
            __nextHasNoMarginBottom
            label="Mobile Grid Layout"
            checked={attributes.isGrid}
            onChange={(value) => setAttributes({ isGrid: value })}
            help="Display slides in a 2-row grid on mobile devices"
          />
          <ToggleControl
            __nextHasNoMarginBottom
            label="Loop"
            checked={attributes.loop}
            onChange={(value) => setAttributes({ loop: value })}
          />
          <ToggleControl
            __nextHasNoMarginBottom
            label="Autoplay"
            checked={attributes.autoplay}
            onChange={(value) => setAttributes({ autoplay: value })}
          />
          {attributes.autoplay && (
            <RangeControl
              __nextHasNoMarginBottom
              __next40pxDefaultSize
              label="Autoplay speed"
              value={attributes.autoplaySpeed}
              max={10000}
              min={0}
              onChange={(value) => setAttributes({ autoplaySpeed: value })}
            />
          )}
        </PanelBody>
      </InspectorControls>
    </div>
  );
};
