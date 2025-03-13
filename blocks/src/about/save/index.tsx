import { useBlockProps } from "@wordpress/block-editor";
import classNames from "classnames";

import { TextContent } from "./TextContent";
import { Highlights } from "./Highlights";
import { License } from "./License";

export const Save = ({ attributes }) => {
  const { layout, title, description, highlights, mediaURL } = attributes;
  const blockProps = useBlockProps.save();
  const baseClass = blockProps.className as string;

  return (
    <div {...blockProps} className={classNames(baseClass, `layout-${layout}`)}>
      {layout === 1 && <TextContent title={title} description={description} />}
      <div className={`${baseClass}__main`}>
        {mediaURL && <img className={`${baseClass}__image`} src={mediaURL} />}
        {layout === 1 ? (
          <Highlights items={highlights} />
        ) : (
          <TextContent title={title} description={description} />
        )}
      </div>
      {layout === 2 && <Highlights items={highlights} />}
      <License
        number={attributes.licenseNumber}
        link={attributes.licenseLink}
      />
    </div>
  );
};
