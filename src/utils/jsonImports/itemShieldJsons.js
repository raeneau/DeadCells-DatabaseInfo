import formatJsonImport from "../formatJsonImport";

// -----------------------------------------------------------------------------

const itemShieldJsons = require
  .context("../../database/update18/item/Shield", true, /\.json$/)
  .keys();

export default formatJsonImport(itemShieldJsons);
