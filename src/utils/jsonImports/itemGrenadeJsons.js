import formatJsonImport from "../formatJsonImport";

// -----------------------------------------------------------------------------

const grenadeJsons = require
  .context("../../database/update19/item/Grenade", true, /\.json$/)
  .keys();

export default formatJsonImport(grenadeJsons);
