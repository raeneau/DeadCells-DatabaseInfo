import formatJsonImport from "../formatJsonImport";

// -----------------------------------------------------------------------------

const weaponJsons = require
  .context("../../database/weapon", true, /\.json$/)
  .keys();

// Weapons
export default formatJsonImport(weaponJsons);
