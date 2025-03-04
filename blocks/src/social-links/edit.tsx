import { useBlockProps, InspectorControls } from "@wordpress/block-editor";
import { PanelBody, TextControl } from "@wordpress/components";

import { SOCIALS } from "./constants";

export const Edit = ({ attributes, setAttributes }) => {
  const blockProps = useBlockProps();

  return (
    <ul {...blockProps}>
      {SOCIALS.map((item) => (
        <li key={item.name} className="wp-block-ross-social-links__item">
          <img src={item.src} alt={item.name} />
        </li>
      ))}
      <InspectorControls group="settings">
        <PanelBody title="Links">
          {SOCIALS.map(({ name }) => (
            <TextControl
              key={name}
              label={name}
              value={attributes[name]}
              onChange={(value) => setAttributes({ [name]: value })}
            />
          ))}
        </PanelBody>
      </InspectorControls>
    </ul>
  );
};
