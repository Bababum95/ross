import { MediaUpload } from "@wordpress/block-editor";
import { Button } from "@wordpress/components";
import classNames from "classnames";

import "./Image.scss";

type Props = {
  mediaID: number;
  mediaURL: string;
  imageClass?: string;
  setAttributes: Function;
};

export const Image = ({
  mediaID,
  mediaURL,
  setAttributes,
  imageClass,
}: Props) => {
  const onSelectImage = (media) => {
    setAttributes({
      mediaURL: media.url,
      mediaID: media.id,
    });
  };

  return (
    <MediaUpload
      onSelect={onSelectImage}
      allowedTypes={["image"]}
      value={mediaID}
      render={({ open }) => (
        <div className="upload-image">
          {mediaURL && (
            <img
              className={classNames("upload-image__image", imageClass)}
              src={mediaURL}
              alt=""
            />
          )}
          <Button
            className={classNames("button button-large", {
              ["upload-image__button_hidden"]: mediaID,
            })}
            onClick={open}
            variant="secondary"
          >
            {!mediaID ? "Upload Image" : "Change Image"}
          </Button>
        </div>
      )}
    />
  );
};
