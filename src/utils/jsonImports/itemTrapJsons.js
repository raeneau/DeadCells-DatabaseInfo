import formatJsonImport from "../formatJsonImport";

// -----------------------------------------------------------------------------

const deployedTrapJsons = require
  .context("../../database/update19/item/DeployedTrap", true, /\.json$/)
  .keys();

export default formatJsonImport(deployedTrapJsons);
