import {
  useBlockProps,
  InspectorControls,
  RichText,
  PanelColorSettings,
} from "@wordpress/block-editor";
import {
  PanelBody,
  SelectControl,
  __experimentalDivider as Divider,
} from "@wordpress/components";
import { useSelect } from "@wordpress/data";
import { store as coreDataStore } from "@wordpress/core-data";
import { useMemo } from "@wordpress/element";

import { Image } from "@/components/Image";

export const Edit = ({ attributes, setAttributes }) => {
  const blockProps = useBlockProps({
    style: {
      "--text-color": attributes.textColor,
      "--bg-color": attributes.bgColor,
    } as React.CSSProperties,
  });

  const pages = useSelect((select) => {
    return (select(coreDataStore) as any).getEntityRecords("postType", "page", {
      per_page: 50,
      status: "publish",
    });
  }, []);

  const options = useMemo(() => {
    const defaultOption = {
      value: "0",
      label: "Select Page",
      disabled: true,
    };

    const pageOptions =
      pages?.map((page) => ({
        value: page.id.toString(),
        label: page.title.rendered,
      })) || [];

    return [defaultOption, ...pageOptions];
  }, [pages]);

  const handleChangePage = (id: string) => {
    const page = pages.find((data) => data.id == id);
    setAttributes({ pageID: id, label: page.title.rendered, link: page.link });
  };

  return (
    <div {...blockProps}>
      <RichText
        className="wp-block-ross-service__label"
        placeholder="Label"
        tagName="p"
        value={attributes.label}
        onChange={(value) => setAttributes({ label: value })}
      />
      {attributes.mediaURL && (
        <img
          className="wp-block-ross-service__image"
          src={attributes.mediaURL}
        />
      )}
      <InspectorControls>
        <PanelBody title="Settings">
          <SelectControl
            __next40pxDefaultSize
            __nextHasNoMarginBottom
            label="Page"
            options={options}
            value={attributes.pageID}
            onChange={handleChangePage}
          />
          <Divider />
          <Image
            mediaID={attributes.mediaID}
            mediaURL={attributes.mediaURL}
            setAttributes={setAttributes}
          />
        </PanelBody>
        <PanelColorSettings
          title="Color Settings"
          colorSettings={[
            {
              value: attributes.textColor,
              onChange: (color) => setAttributes({ textColor: color }),
              label: "Text",
              enableAlpha: true,
              clearable: true,
            },
            {
              value: attributes.bgColor,
              onChange: (color) => setAttributes({ bgColor: color }),
              label: "Background",
              enableAlpha: true,
              clearable: true,
            },
          ]}
        />
      </InspectorControls>
    </div>
  );
};
