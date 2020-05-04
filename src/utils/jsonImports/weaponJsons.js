
const weaponJsons = (require.context('../../database/weapon', true, /\.json$/)).keys();

const keyRegex = /(?<=-)\w+(?=\.)/;

// Weapons
export default weaponJsons.reduce((allFilesObject, entry, index) => {
  // Execuse regex on the file name to make it readable
    const newKey = keyRegex.exec(entry);

  if (newKey === null) {
    return allFilesObject;
  }
  
  const newEntry = { [newKey[0].toUpperCase()]: entry.replace(/^\./, '') };
  // If the index is 0, we don't want to spread the 
  if (index === 0){
    return newEntry;
  }
  return {
    ...allFilesObject,
    // Use the result of the regex as the key,
    // but make it all uppercase to make searching easy
    ...newEntry,
  }
}, {});

