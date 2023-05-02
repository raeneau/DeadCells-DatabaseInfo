import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import _get from "lodash.get";

// Screens.
import WhatsNewScreen from "./WhatsNew/WhatsNewScreen";
import CurrentlySearchableScreen from "./CurrentlySearchableScreen";

// Local modules.
import DatabaseVersionToggle from "./DatabaseVersionToggle";
import getViableJsons from "../utils/getAllViableJsons";
import formatInput from "../utils/formatInput";

// Constants.
import nameMappings from "../constants/mapUserInput";
import { STABLE } from "../constants/databaseVersion";

// Styles.
import "./UserInput.css";
import searchResultsContext from "../context/SearchResultsContext";
import DatabaseVersionSelect from "./DatabaseVersionSelect";

// -----------------------------------------------------------------------------

const cnBase = "UserInputScreen";
const cn = {
  wrapper: `${cnBase}__wrapper`,
  header: `${cnBase}__header`,
  inputWrapper: `${cnBase}__inputWrapper`,
  input: `${cnBase}__input`,
  button: `${cnBase}__button`,

  // TODO: Move this to another component
  notesWrapper: `${cnBase}__notesWrapper`,
  patchNotesWrapper: `${cnBase}__patchNotesWrapper`,
};

let inputSubmitted = false;

const UserInputScreen = () => {
  const [value, setValue] = useState({
    userInputValue: "",
  });
  const [searchResults, setSearchResults] = useContext(searchResultsContext);

  const [databaseVersion, setDatabaseVersion] = useState(STABLE);
  const navigate = useNavigate();

  function handleChange(event) {
    // Here, we invoke the callback with the new value
    setValue({ userInputValue: event.target.value });
  }

  const handleDatabaseChange = (updatedDatabaseVersion) => {
    setDatabaseVersion(updatedDatabaseVersion);
  };

  const handleUserInputChange = (newValue) => {
    // Format user input to be all uppercase with no spaces, to match the
    // file import object keys
    const formattedUserInput = formatInput(newValue);

    const mappedUserInput = nameMappings[formattedUserInput] || {
      INTERNAL_ID: formattedUserInput,
    };

    const type = _get(mappedUserInput, "TYPE");

    // If the type is an array, there are multiple entries!
    if (Array.isArray(type)) {
      return {
        nameConflict: true,
        searchTerm: newValue,
        resourceType: type,
      };
    }
    // If the user input is undefined, there is no result for this search
    if (mappedUserInput === undefined) {
      return { searchTerm: newValue };
    }
    // Otherwise, we found a match!
    const jsonArray = getViableJsons({
      userInput: mappedUserInput,
      databaseVersion,
    });

    return {
      results: jsonArray,
      searchTerm: newValue,
      resourceType: type,
      internalId: _get(mappedUserInput, "INTERNAL_ID"),
      name: _get(mappedUserInput, "NAME"),
    };
  };

  function onSubmit() {
    // const { onChange } = props;

    // The user set a value. Let's hide the info on the screen.
    inputSubmitted = true;

    const submitResults = handleUserInputChange(value.userInputValue);

    if (submitResults) {
      setSearchResults(submitResults);
    }

    navigate(
      submitResults.resourceType ? submitResults.resourceType : "/NotFound",
    );

    // onChange(value.userInputValue);
  }

  function handleKeyDown(event) {
    // Let the user press enter too! Make it easy for 'em :)
    if (event.key === "Enter") {
      onSubmit();
    }
  }

  const { userInputValue } = value;

  return (
    <div className="DisplayCard">
      <h2 className={cn.header}>Enter the name/ID of the resource:</h2>
      <div className={cn.inputWrapper}>
        <input
          className={cn.input}
          value={userInputValue}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
        <button
          type="submit"
          className={cn.button}
          onClick={onSubmit}
          alt="Submit"
        />
      </div>
      {/* <DatabaseVersionToggle onChange={handleDatabaseChange} /> */}
      <DatabaseVersionSelect onChange={handleDatabaseChange} />
      <div className={cn.notesWrapper}>
        {!inputSubmitted && <WhatsNewScreen />}
        <CurrentlySearchableScreen />
      </div>
    </div>
  );
};

// -----------------------------------------------------------------------------

export default UserInputScreen;
