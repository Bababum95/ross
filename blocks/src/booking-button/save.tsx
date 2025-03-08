import { useBlockProps, RichText } from "@wordpress/block-editor";

export const Save = ({ attributes }) => {
  const { token, orgname } = attributes;
  const blockProps = useBlockProps.save();

  return (
    <div {...blockProps}>
      <RichText.Content
        value={attributes.label}
        tagName="button"
        className="wp-element-button"
        data-token={token}
        data-orgname={orgname}
        // @ts-ignore
        onClick="HCPWidget.openModal()"
        style={{
          color: attributes.textColor,
          backgroundColor: attributes.bgColor,
        }}
      />
      <script
        async
        src={`https://online-booking.housecallpro.com/script.js?token=${token}&orgName=${orgname}`}
      />
    </div>
  );
};
