import { useBlockProps, InspectorControls } from "@wordpress/block-editor";
import {
  PanelBody,
  TextControl,
  __experimentalDivider as Divider,
} from "@wordpress/components";

import { Image } from "@/components/Image";

import type { HilightType } from "../types";
import { Highlights } from "../save/Highlights";
import { License } from "../save/License";
import { TextContent } from "./TextContent";

export const Edit = ({ attributes, setAttributes }) => {
  const blockProps = useBlockProps();

  const handleChangeHighlight = (value: string, index: number, key: string) => {
    const newHighlights = [...attributes.highlights];
    newHighlights[index] = { ...newHighlights[index], [key]: value };
    setAttributes({ highlights: newHighlights });
  };

  return (
    <div {...blockProps}>
      <TextContent
        setAttributes={setAttributes}
        title={attributes.title}
        description={attributes.description}
      />
      <div className="wp-block-ross-about__main">
        {attributes.mediaURL && (
          <img
            className="wp-block-ross-about__image"
            src={attributes.mediaURL}
          />
        )}
        <Highlights items={attributes.highlights} />
      </div>
      <License
        number={attributes.licenseNumber}
        link={attributes.licenseLink}
      />
      <InspectorControls>
        <PanelBody title="Image">
          <Image
            mediaID={attributes.mediaID}
            mediaURL={attributes.mediaURL}
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
