import React from "react";
import PropTypes from "prop-types";

// Components.
import Select from "../components/common/Select";

// Constants.
import {
  BETA,
  STABLE,
  BETA_VERSION,
  STABLE_VERSION,
  UPDATE_DATE,
} from "../constants/databaseVersion";

// Styles.
import "./DatabaseVersionToggle.css";

// -----------------------------------------------------------------------------

const cnBase = "DatabaseVersionToggleScreen";
const cn = {
  wrapper: `${cnBase}__wrapper`,
  header: `${cnBase}__header`,
  inputWrapper: `${cnBase}__inputWrapper`,
  input: `${cnBase}__input`,
  button: `${cnBase}__button`,
  footer: `${cnBase}__footer`,

  // TODO: Move this to another component
  notesWrapper: `${cnBase}__notesWrapper`,
  patchNotesWrapper: `${cnBase}__patchNotesWrapper`,
};

function DatabaseVersionToggleScreen(props) {
  function handleChange(event) {
    const databaseVersion = event.target.value;
    // Here, we invoke the callback with the new value
    props.onChange(databaseVersion);
  }

  return (
    <div>
      <div className={cn.inputWrapper}>
        <Select onChange={handleChange} label="Database Version: " />
      </div>
      <i className={cn.footer}>Database last updated: {UPDATE_DATE}</i>
    </div>
  );
}

DatabaseVersionToggleScreen.propTypes = {
  onChange: PropTypes.func.isRequired,
};

// -----------------------------------------------------------------------------

export default DatabaseVersionToggleScreen;
