import formatJsonImport from "../formatJsonImport";

// -----------------------------------------------------------------------------

const itemRangedJsons = require
  .context("../../database/item/Grenade", true, /\.json$/)
  .keys();

export default formatJsonImport(itemRangedJsons);
