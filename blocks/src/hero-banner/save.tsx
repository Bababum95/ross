import { useBlockProps } from "@wordpress/block-editor";

export const Save = () => {
	const blockProps = useBlockProps.save();

	return <div {...blockProps}></div>;
};
