import { meleeWeapons } from '../jsonImports';

// -----------------------------------------------------------------------------

const mapUserInput = (userInput) => {
    // Pull the JSON entries from the corresponding section of the DB
    const itemJson = meleeWeapons[`item${userInput}`];
    const weaponJson = meleeWeapons[`weapon${userInput}`];

    return {itemJson, weaponJson};
}

export default mapUserInput;