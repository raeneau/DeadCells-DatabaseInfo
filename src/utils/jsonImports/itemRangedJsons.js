import formatJsonImport from "../formatJsonImport";

// -----------------------------------------------------------------------------

const itemRangedJsons = require
  .context("../../database/item/Ranged", true, /\.json$/)
  .keys();

export default formatJsonImport(itemRangedJsons);
