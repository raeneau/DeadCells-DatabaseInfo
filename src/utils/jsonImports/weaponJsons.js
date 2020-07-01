import formatJsonImport from "../formatJsonImport";

// -----------------------------------------------------------------------------

const weaponJsons = require
  .context("../../database/update19/weapon", true, /\.json$/)
  .keys();

// Weapons
export default formatJsonImport(weaponJsons);
