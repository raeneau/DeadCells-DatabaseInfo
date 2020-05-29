import formatJsonImport from "../formatJsonImport";

// -----------------------------------------------------------------------------

const enemyJsons = require
  .context(`../../database/update18/mob/General`, true, /\.json$/)
  .keys();

export default formatJsonImport(enemyJsons);
