import { useBlockProps } from "@wordpress/block-editor";

import { SOCIALS } from "./constants";

export const Save = ({ attributes }) => {
  const blockProps = useBlockProps.save();
  const baseClass = blockProps.className;

  return (
    <div {...blockProps}>
      {SOCIALS.map((item) => (
        <li key={item.name} className={`${baseClass}__item`}>
          <a
            className={`${baseClass}__link`}
            href={attributes[item.name] || "#"}
          >
            <img
              className={`${baseClass}__icon`}
              src={item.src}
              alt={item.name}
            />
          </a>
        </li>
      ))}
    </div>
  );
};
