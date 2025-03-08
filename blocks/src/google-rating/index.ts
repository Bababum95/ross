import { type BlockConfiguration, registerBlockType } from "@wordpress/blocks";
import { Edit } from "./edit";
import metadata from "./block.json";
import "./style.scss";

registerBlockType(metadata.name, {
  ...(metadata as BlockConfiguration),
  edit: Edit,
  save: () => null,
});
