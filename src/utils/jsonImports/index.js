const keyRegex = /(?<=-)\w+(?=\.)/;

export default (jsonToFormat) => {
  return jsonToFormat.reduce((allFilesObject, entry, index) => {
    // Execute regex on the file name to make it readable
    // If there is no valid return, then return the accumulator object.
    const newKey = keyRegex.exec(entry);
    if (newKey === null) {
      return allFilesObject;
    }

    // Make the new entry all UPPERCASE and remove the period in front
    const newEntry = { [newKey[0].toUpperCase()]: entry.replace(/^\./, "") };

    // If the index is 0, we don't want to spread the
    if (index === 0) {
      return newEntry;
    }
    return {
      ...allFilesObject,
      // Use the result of the regex as the key,
      // but make it all uppercase to make searching easy
      ...newEntry,
    };
  }, {});
};
