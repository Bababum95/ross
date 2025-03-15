import type { FC } from "react";
import { RichText, InnerBlocks } from "@wordpress/block-editor";

import type { TextContentAttributes } from "../types";

export const TextContent: FC<TextContentAttributes> = ({
  title,
  description,
  blockName = true,
}) => {
  return (
    <div className="wp-block-ross-about__text-content">
      <div className="wp-block-ross-about__text-content-left">
        {blockName && <p className="wp-block-ross-about__subtitle">About us</p>}
        <RichText.Content
          tagName="h2"
          value={title}
          className="wp-block-ross-about__title"
        />
        <InnerBlocks.Content />
      </div>
      <RichText.Content
        tagName="p"
        value={description}
        className="wp-block-ross-about__description"
      />
    </div>
  );
};
