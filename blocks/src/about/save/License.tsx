import { FC } from "react";

import type { LicenseType } from "../types";

export const License: FC<LicenseType> = ({ number, link }) => {
  return (
    <div className="wp-block-ross-about__license">
      <div className="wp-block-ross-about__license-content">
        <p className="wp-block-ross-about__license-number">
          Ross HVAC And Appliance Services License {number}
        </p>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="wp-block-ross-about__license-link wp-element-button"
        >
          CHECK THE LICENSE STATUS
        </a>
      </div>
    </div>
  );
};
