import formatJsonImport from "./index";

const enemyJsons = require
  .context("../../database/mob/General", true, /\.json$/)
  .keys();

export default formatJsonImport(enemyJsons);
