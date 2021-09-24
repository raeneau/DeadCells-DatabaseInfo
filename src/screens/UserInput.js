import React, { useState } from "react";
import PropTypes from "prop-types";

// Screens.
import WhatsNewScreen from "./WhatsNewScreen";
import CurrentlySearchableScreen from "./CurrentlySearchableScreen";

import DatabaseVersionDropdown from "./DatabaseVersionDropdown";

// Styles.
import "./UserInput.css";

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

function UserInputScreen(props) {
  const [value, setValue] = useState({
    userInputValue: "",
  });

  function handleChange(event) {
    // Here, we invoke the callback with the new value
    setValue({ userInputValue: event.target.value });
  }

  function onSubmit() {
    // The user set a value. Let's hide the info on the screen.
    inputSubmitted = true;

    props.onChange(value.userInputValue);
  }

  function handleKeyDown(event) {
    // Let the user press enter too! Make it easy for 'em :)
    if (event.key === "Enter") {
      onSubmit();
    }
  }

  const { userInputValue } = value;
  const { onDatabaseChange } = props;

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
      <DatabaseVersionDropdown onChange={onDatabaseChange} />
      <div className={cn.notesWrapper}>
        {!inputSubmitted && <WhatsNewScreen />}
        <CurrentlySearchableScreen />
      </div>
    </div>
  );
}

UserInputScreen.propTypes = {
  onChange: PropTypes.func.isRequired,
};

// -----------------------------------------------------------------------------

export default UserInputScreen;
