import formatJsonImport from "../formatJsonImport";

// -----------------------------------------------------------------------------

const enemyJsons = require
  .context("../../database/mob/General", true, /\.json$/)
  .keys();

export default formatJsonImport(enemyJsons);
