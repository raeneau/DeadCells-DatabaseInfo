import React from "react";
import PropTypes from "prop-types";

// Components.
import Switch from "../components/common/Switch";

// Constants.
import {
  BETA,
  STABLE,
  BETA_VERSION,
  STABLE_VERSION,
} from "../constants/databaseVersion";

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
          disabled // TRUE when there is no current beta
          switchId="DatabaseTypeSwitch"
          onChange={handleChange}
          label="Database Version: "
          onLabel={`Beta (${BETA_VERSION})`}
          offLabel={`Stable (${STABLE_VERSION})`}
        />
      </div>
    </div>
  );
}

UserInputScreen.propTypes = {
  onChange: PropTypes.func.isRequired,
};

// -----------------------------------------------------------------------------

export default UserInputScreen;
