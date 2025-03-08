import { useBlockProps, RichText } from "@wordpress/block-editor";

export const Save = ({ attributes }) => {
  const { token, orgname, label } = attributes;
  const blockProps = useBlockProps.save();

  return (
    <div {...blockProps}>
      <RichText.Content
        value={label}
        tagName="button"
        className="wp-element-button"
        data-token={token}
        data-orgname={orgname}
        // @ts-ignore
        onClick="HCPWidget.openModal()"
      />
      <script
        async
        src={`https://online-booking.housecallpro.com/script.js?token=${token}&orgName=${orgname}`}
      />
    </div>
  );
};
