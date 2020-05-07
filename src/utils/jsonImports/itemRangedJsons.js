import formatJsonImport from "./index";

const itemRangedJsons = require
  .context("../../database/item/Ranged", true, /\.json$/)
  .keys();

export default formatJsonImport(itemRangedJsons);
