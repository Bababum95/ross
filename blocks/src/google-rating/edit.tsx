import { useBlockProps, InspectorControls } from "@wordpress/block-editor";
import { PanelBody, TextControl } from "@wordpress/components";
import icon from "../../assets/icons/google.png";

export const Edit = ({ attributes, setAttributes }) => {
  const blockProps = useBlockProps();

  return (
    <div {...blockProps}>
      <img
        className="wp-block-ross-google-rating__google"
        src={icon}
        alt="Google"
        width="24"
        height="24"
      />
      <div className="wp-block-ross-google-rating__content">
        <div className="wp-block-ross-google-rating__rating">
          <span className="wp-block-ross-google-rating__score">4.9</span>
          <span className="wp-block-ross-google-rating__stars">
            {Array(5)
              .fill(0)
              .map((_, index) => (
                <svg
                  width="9"
                  height="9"
                  viewBox="0 0 9 9"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  key={index}
                >
                  <path
                    d="M4.18113 0.31307C4.26428 0.05715 4.62634 0.0571499 4.70949 0.31307L5.50552 2.76298C5.54271 2.87743 5.64936 2.95492 5.7697 2.95492H8.34568C8.61477 2.95492 8.72666 3.29925 8.50896 3.45742L6.42494 4.97154C6.32759 5.04228 6.28685 5.16766 6.32403 5.28211L7.12006 7.73202C7.20321 7.98794 6.9103 8.20075 6.6926 8.04258L4.60859 6.52846C4.51123 6.45772 4.3794 6.45772 4.28204 6.52846L2.19802 8.04258C1.98033 8.20075 1.68742 7.98794 1.77057 7.73202L2.56659 5.28211C2.60378 5.16766 2.56304 5.04228 2.46568 4.97154L0.381668 3.45742C0.16397 3.29925 0.275852 2.95492 0.544942 2.95492H3.12093C3.24127 2.95492 3.34792 2.87743 3.38511 2.76298L4.18113 0.31307Z"
                    fill="#FFAA01"
                  />
                </svg>
              ))}
          </span>
        </div>
        <p className="wp-block-ross-google-rating__review-count">
          Based on 220 reviews
        </p>
      </div>
      <InspectorControls>
        <PanelBody title="Settings">
          <TextControl
            label="Id"
            value={attributes.place_id}
            onChange={(place_id) => setAttributes({ place_id })}
          />
          <TextControl
            label="Link"
            value={attributes.link}
            onChange={(link) => setAttributes({ link })}
          />
        </PanelBody>
      </InspectorControls>
    </div>
  );
};
