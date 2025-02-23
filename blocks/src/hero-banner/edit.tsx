import { useBlockProps } from "@wordpress/block-editor";

export const Edit = () => {
	const blockProps = useBlockProps();

	return <div {...blockProps}>Block</div>;
};
