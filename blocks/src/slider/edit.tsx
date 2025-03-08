import {
  useBlockProps,
  InnerBlocks,
  InspectorControls,
} from "@wordpress/block-editor";
import { PanelBody, RangeControl, ToggleControl } from "@wordpress/components";

import "./editor.scss";

export const Edit = ({ attributes, setAttributes }) => {
  const blockProps = useBlockProps({
    style: { gap: attributes.spaceBetween } as React.CSSProperties,
  });

  const handleCHangeBreakpoint = (
    value: string | number | boolean,
    index: number,
    key: string,
  ) => {
    const newBreakpoints = [...attributes.breakpoints];
    newBreakpoints[index] = { ...newBreakpoints[index], [key]: value };
    setAttributes({ breakpoints: newBreakpoints });
  };

  return (
    <div {...blockProps}>
      <InnerBlocks
        allowedBlocks={["ross/slider-slide"]}
        template={[["ross/slider-slide", {}]]}
      />
      <InspectorControls>
        <PanelBody title="Settings">
          <ToggleControl
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
          <RangeControl
            __nextHasNoMarginBottom
            __next40pxDefaultSize
            label="Autoplay speed"
            value={attributes.breakpoints.length}
            max={10}
            min={0}
            onChange={(value) => {
              if (value > attributes.breakpoints.length) {
                const newBreakpoints = [...attributes.breakpoints];
                for (let i = attributes.breakpoints.length; i < value; i++) {
                  newBreakpoints.push({
                    point: 1,
                    slidesPerView: 1,
                    spaceBetween: 0,
                    isGrid: false,
                  });
                }
                setAttributes({ breakpoints: newBreakpoints });
              } else {
                setAttributes({
                  breakpoints: attributes.breakpoints.slice(0, value),
                });
              }
            }}
          />
        </PanelBody>
        {attributes.breakpoints.map((breakpoint, index) => (
          <PanelBody
            title={`Breakpoint ${index + 1}`}
            key={index}
            initialOpen={false}
          >
            <RangeControl
              __nextHasNoMarginBottom
              __next40pxDefaultSize
              label="Point in px"
              value={breakpoint.point}
              max={1940}
              min={1}
              onChange={(value) =>
                handleCHangeBreakpoint(value, index, "point")
              }
            />
            <RangeControl
              __nextHasNoMarginBottom
              __next40pxDefaultSize
              label="Slides per view"
              value={breakpoint.slidesPerView}
              max={10}
              min={0}
              onChange={(value) =>
                handleCHangeBreakpoint(value, index, "slidesPerView")
              }
            />
            <RangeControl
              __nextHasNoMarginBottom
              __next40pxDefaultSize
              label="Space between"
              value={breakpoint.spaceBetween}
              max={100}
              min={0}
              onChange={(value) =>
                handleCHangeBreakpoint(value, index, "spaceBetween")
              }
            />
            <ToggleControl
              label="Two rows"
              checked={breakpoint.isGrid}
              onChange={(value) =>
                handleCHangeBreakpoint(value, index, "isGrid")
              }
            />
          </PanelBody>
        ))}
      </InspectorControls>
    </div>
  );
};
