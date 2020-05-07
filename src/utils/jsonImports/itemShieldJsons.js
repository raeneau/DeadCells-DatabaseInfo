import formatJsonImport from "./index";

const itemShieldJsons = require
  .context("../../database/item/Shield", true, /\.json$/)
  .keys();

export default formatJsonImport(itemShieldJsons);
