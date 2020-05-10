import formatJsonImport from "../formatJsonImport";

// -----------------------------------------------------------------------------

const itemMeleeJsons = require
  .context("../../database/item/Melee", true, /\.json$/)
  .keys();

export default formatJsonImport(itemMeleeJsons);
