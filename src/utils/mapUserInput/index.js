
import mappedWeapons from '../jsonImports/weaponJsons';
import itemMeleeJsons from '../jsonImports/itemMeleeJsons';

// -----------------------------------------------------------------------------

const mapUserInput = (userInput) => {

    const weaponJsonPath = mappedWeapons[userInput];
    const itemMeleeJsonPath = itemMeleeJsons[userInput];
    const itemRangedJsonPath = itemMeleeJsons[userInput];

    let weaponJson;
    let itemMeleeJson;
    let itemRangedJson;

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
    
    return {itemJson: itemMeleeJson || itemRangedJson, weaponJson};

}

export default mapUserInput;