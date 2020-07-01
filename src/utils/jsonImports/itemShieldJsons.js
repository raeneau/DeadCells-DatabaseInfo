import formatJsonImport from "../formatJsonImport";

// -----------------------------------------------------------------------------

const itemShieldJsons = require
  .context("../../database/update19/item/Shield", true, /\.json$/)
  .keys();

export default formatJsonImport(itemShieldJsons);
