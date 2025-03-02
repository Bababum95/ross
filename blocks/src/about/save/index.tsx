import { useBlockProps } from "@wordpress/block-editor";

import { TextContent } from "./TextContent";
import { Highlights } from "./Highlights";
import { License } from "./License";

export const Save = ({ attributes }) => {
  const blockProps = useBlockProps.save();
  const baseClass = blockProps.className;

  return (
    <div {...blockProps}>
      <TextContent
        title={attributes.title}
        description={attributes.description}
      />
      <div className={`${baseClass}__main`}>
        {attributes.mediaURL && (
          <img className={`${baseClass}__image`} src={attributes.mediaURL} />
        )}
        <Highlights items={attributes.highlights} />
      </div>
      <License
        number={attributes.licenseNumber}
        link={attributes.licenseLink}
      />
    </div>
  );
};
