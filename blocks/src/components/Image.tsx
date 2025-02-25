import { MediaUpload } from "@wordpress/block-editor";
import { Button } from "@wordpress/components";

type Props = {
  mediaID: number;
  mediaURL: string;
  setAttributes: Function;
};

export const Image = ({ mediaID, mediaURL, setAttributes }: Props) => {
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
        <>
          {mediaURL && <img src={mediaURL} />}
          <Button
            className="button button-large"
            onClick={open}
            variant="secondary"
            style={{ width: "100%" }}
          >
            {!mediaID ? "Upload Image" : "Change Image"}
          </Button>
        </>
      )}
    />
  );
};
