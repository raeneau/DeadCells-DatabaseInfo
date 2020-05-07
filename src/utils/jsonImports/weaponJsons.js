import formatJsonImport from "./index";

// -----------------------------------------------------------------------------

const weaponJsons = require
  .context("../../database/weapon", true, /\.json$/)
  .keys();

const keyRegex = /(?<=-)\w+(?=\.)/;

// Weapons
export default formatJsonImport(weaponJsons);
