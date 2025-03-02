import type { FC } from "react";
import { RichText } from "@wordpress/block-editor";

import type { TextContentAttributes } from "../types";

type Props = TextContentAttributes & {
  setAttributes: (attrs: Partial<TextContentAttributes>) => void;
};

export const TextContent: FC<Props> = ({
  title,
  description,
  setAttributes,
}) => {
  return (
    <div className="wp-block-ross-about__text-content">
      <div className="wp-block-ross-about__text-content-left">
        <p className="wp-block-ross-about__subtitle">About us</p>
        <RichText
          placeholder="Title"
          tagName="h2"
          value={title}
          onChange={(value) => setAttributes({ title: value })}
          className="wp-block-ross-about__title"
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
