import React, { useState } from "react";

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

function UserInputScreen(props) {
  const [userInputValue, setUserInputValue] = useState("");

  function handleChange(event) {
    // Here, we invoke the callback with the new value
    setUserInputValue(event.target.value);
  }

  function onSubmit() {
    props.onChange(userInputValue);
  }

  function handleKeyDown(event) {
    // Let the user press enter too! Make it easy for 'em :)
    if (event.key === "Enter") {
      onSubmit();
    }
  }

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
      <div className={cn.notesWrapper}>
        <div className={cn.patchNotesWrapper}>
          <h4>What&apos;s new? - May 17th 2020</h4>
          <ul>
            <li>Enemies now searchable by name!</li>
          </ul>
        </div>
        <h4>Currently Searchable Categories:</h4>
        <ul>
          <li>Melee weapons*</li>
          <li>Ranged weapons*</li>
          <li>Shields*</li>
          <li>Enemies</li>
        </ul>
        <div>
          <b>*only searchable by internal ID</b>
        </div>
      </div>
    </div>
  );
}

// -----------------------------------------------------------------------------

export default UserInputScreen;
