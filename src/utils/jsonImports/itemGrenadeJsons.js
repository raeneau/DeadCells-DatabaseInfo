import formatJsonImport from "../formatJsonImport";

// -----------------------------------------------------------------------------

const itemRangedJsons = require
  .context("../../database/update19/item/Grenade", true, /\.json$/)
  .keys();

export default formatJsonImport(itemRangedJsons);
