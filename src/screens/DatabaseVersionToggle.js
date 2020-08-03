import React, { useState } from "react";

// Screens.
import WhatsNewScreen from "./WhatsNewScreen";
import CurrentlySearchableScreen from "./CurrentlySearchableScreen";

// Components.
import Switch from "../components/common/Switch";

// Constants.
import { BETA, STABLE } from "../constants/databaseVersion";

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
  function handleChange(event) {
    const databaseType = event.target.checked ? BETA : STABLE;
    // Here, we invoke the callback with the new value
    props.onChange(databaseType);
  }

  return (
    <div>
      <div className={cn.inputWrapper}>
        <Switch
          switchId="DatabaseTypeSwitch"
          onChange={handleChange}
          label="Toggle the database idk what to put here lolol"
        />
      </div>
    </div>
  );
}

// -----------------------------------------------------------------------------

export default UserInputScreen;
