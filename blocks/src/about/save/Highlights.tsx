import type { FC } from "react";
import type { HilightType } from "../types";

type Props = {
  items: HilightType[];
};

export const Highlights: FC<Props> = ({ items }) => {
  return (
    <div className="wp-block-ross-about__highlights">
      {items.map((item, index) => (
        <div key={index} className="wp-block-ross-about__highlight">
          <p className="wp-block-ross-about__highlight-value">{item.value}</p>
          <p className="wp-block-ross-about__highlight-description">
            {item.description}
          </p>
        </div>
      ))}
    </div>
  );
};
