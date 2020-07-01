import formatJsonImport from "../formatJsonImport";

// -----------------------------------------------------------------------------

const itemMeleeJsons = require
  .context("../../database/update19/item/Melee", true, /\.json$/)
  .keys();

export default formatJsonImport(itemMeleeJsons);
