import formatJsonImport from "./index";

const itemMeleeJsons = require
  .context("../../database/item/Melee", true, /\.json$/)
  .keys();

export default formatJsonImport(itemMeleeJsons);
