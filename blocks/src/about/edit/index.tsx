import { useBlockProps, InspectorControls } from "@wordpress/block-editor";
import {
  PanelBody,
  TextControl,
  __experimentalDivider as Divider,
  __experimentalToggleGroupControl as ToggleGroupControl,
  __experimentalToggleGroupControlOption as ToggleGroupControlOption,
} from "@wordpress/components";

import { Image } from "@/components/Image";

import type { HilightType } from "../types";
import { Highlights } from "../save/Highlights";
import { License } from "../save/License";
import { TextContent } from "./TextContent";
import classNames from "classnames";

export const Edit = ({ attributes, setAttributes }) => {
  const { layout, title, description, highlights, mediaURL } = attributes;
  const blockProps = useBlockProps();

  const handleChangeHighlight = (value: string, index: number, key: string) => {
    const newHighlights = [...attributes.highlights];
    newHighlights[index] = { ...newHighlights[index], [key]: value };
    setAttributes({ highlights: newHighlights });
  };

  return (
    <div
      {...blockProps}
      className={classNames(blockProps.className, `layout-${layout}`)}
    >
      {layout === 1 && (
        <TextContent
          title={title}
          description={description}
          setAttributes={setAttributes}
        />
      )}
      <div className="wp-block-ross-about__main">
        {mediaURL && (
          <img className="wp-block-ross-about__image" src={mediaURL} />
        )}
        {layout === 1 ? (
          <Highlights items={highlights} />
        ) : (
          <TextContent
            title={title}
            description={description}
            setAttributes={setAttributes}
          />
        )}
      </div>
      {layout === 2 && <Highlights items={highlights} />}
      <License
        number={attributes.licenseNumber}
        link={attributes.licenseLink}
      />
      <InspectorControls>
        <PanelBody title="Settings">
          <ToggleGroupControl
            label="Layout"
            value={layout}
            onChange={(value) => setAttributes({ layout: value })}
          >
            <ToggleGroupControlOption label="type 1" value={1} />
            <ToggleGroupControlOption label="type 2" value={2} />
          </ToggleGroupControl>
          <Divider />
          <Image
            mediaID={attributes.mediaID}
            mediaURL={mediaURL}
            setAttributes={setAttributes}
          />
        </PanelBody>
        <PanelBody title="Highlights" initialOpen={false}>
          {attributes.highlights?.map(
            (highlight: HilightType, index: number) => (
              <div key={index}>
                <TextControl
                  label="value"
                  value={highlight.value}
                  onChange={(value) => {
                    handleChangeHighlight(value, index, "value");
                  }}
                />
                <TextControl
                  label="Description"
                  value={highlight.description}
                  onChange={(value) => {
                    handleChangeHighlight(value, index, "description");
                  }}
                />
                <Divider />
              </div>
            ),
          )}
        </PanelBody>
        <PanelBody title="License">
          <TextControl
            label="Number"
            value={attributes.licenseNumber}
            onChange={(value) => setAttributes({ licenseNumber: value })}
          />
          <TextControl
            label="Link"
            value={attributes.licenseLink}
            onChange={(value) => setAttributes({ licenseLink: value })}
          />
        </PanelBody>
      </InspectorControls>
    </div>
  );
};
