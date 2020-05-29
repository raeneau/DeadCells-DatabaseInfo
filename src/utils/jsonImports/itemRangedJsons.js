import formatJsonImport from "../formatJsonImport";

// -----------------------------------------------------------------------------

const itemRangedJsons = require
  .context("../../database/update18/item/Ranged", true, /\.json$/)
  .keys();

export default formatJsonImport(itemRangedJsons);
