import { type BlockConfiguration, registerBlockType } from "@wordpress/blocks";
import { Edit } from "./edit";
import { Save } from "./save";
import metadata from "./block.json";

registerBlockType(metadata.name, {
  ...(metadata as BlockConfiguration),
  edit: Edit,
  save: Save,
});
