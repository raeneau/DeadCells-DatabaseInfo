import formatJsonImport from "../formatJsonImport";

// -----------------------------------------------------------------------------

const weaponJsons = require
  .context("../../database/update18/weapon", true, /\.json$/)
  .keys();

// Weapons
export default formatJsonImport(weaponJsons);
