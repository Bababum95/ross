import type { FC } from "react";
import { RichText, InnerBlocks } from "@wordpress/block-editor";

import type { TextContentAttributes } from "../types";

type Props = TextContentAttributes & {
  setAttributes: (attrs: Partial<TextContentAttributes>) => void;
};

export const TextContent: FC<Props> = ({
  title,
  description,
  setAttributes,
  blockName = true,
}) => {
  return (
    <div className="wp-block-ross-about__text-content">
      <div className="wp-block-ross-about__text-content-left">
        {blockName && <p className="wp-block-ross-about__subtitle">About us</p>}
        <RichText
          placeholder="Title"
          tagName="h2"
          value={title}
          onChange={(value) => setAttributes({ title: value })}
          className="wp-block-ross-about__title"
        />
        <InnerBlocks
          allowedBlocks={["ross/booking-button"]}
          template={[
            [
              "ross/booking-button",
              {
                label: "Book now",
                orgname: "Ross-HVAC-and-Appliance-repair",
                token: "5dd312eada5d40d89e5b3c1e44804feb",
              },
            ],
          ]}
        />
      </div>
      <RichText
        placeholder="Description"
        tagName="p"
        value={description}
        onChange={(value) => setAttributes({ description: value })}
        className="wp-block-ross-about__description"
      />
    </div>
  );
};
