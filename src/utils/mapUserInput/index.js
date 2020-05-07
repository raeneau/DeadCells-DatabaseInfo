import mappedWeapons from "../jsonImports/weaponJsons";

import itemMeleeJsons from "../jsonImports/itemMeleeJsons";
import itemRangedJsons from "../jsonImports/itemRangedJsons";
import itemShieldJsons from "../jsonImports/itemShieldJsons";

// -----------------------------------------------------------------------------

const mapUserInput = (userInput) => {
  const weaponJsonPath = mappedWeapons[userInput];
  const itemMeleeJsonPath = itemMeleeJsons[userInput];
  const itemRangedJsonPath = itemRangedJsons[userInput];
  const itemShieldJsonPath = itemShieldJsons[userInput];

  let weaponJson;
  let itemMeleeJson;
  let itemRangedJson;
  let itemShieldJson;

  // TODO: Rip these out to be a separate utility file
  try {
    // Pull the JSON entries from the corresponding section of the DB
    weaponJson = require(`../../database/weapon${weaponJsonPath}`);
  } catch (e) {
    weaponJson = null;
  }

  try {
    itemMeleeJson = require(`../../database/item/Melee${itemMeleeJsonPath}`);
  } catch (e) {
    itemMeleeJson = null;
  }
  try {
    itemRangedJson = require(`../../database/item/Ranged${itemRangedJsonPath}`);
  } catch (e) {
    itemRangedJson = null;
  }
  try {
    itemShieldJson = require(`../../database/item/Shield${itemShieldJsonPath}`);
  } catch (e) {
    itemShieldJson = null;
  }

  console.log(itemMeleeJson, "...", itemRangedJson, "...", itemShieldJson);

  return {
    itemJson: itemMeleeJson || itemRangedJson || itemShieldJson,
    weaponJson,
  };
};

export default mapUserInput;
