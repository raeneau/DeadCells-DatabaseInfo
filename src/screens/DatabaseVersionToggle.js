import React, { useCallback } from "react";
import PropTypes from "prop-types";

// Components.
import Switch from "../components/common/Switch";

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
  const handleChange = useCallback((event) => {
    const { onChange } = props;
    const databaseType = event.target.checked ? BETA : STABLE;
    // Here, we invoke the callback with the new value
    onChange(databaseType);
  });

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
      <i className={cn.footer}>Database last updated: {UPDATE_DATE}</i>
    </div>
  );
}

DatabaseVersionToggleScreen.propTypes = {
  onChange: PropTypes.func.isRequired,
};

// -----------------------------------------------------------------------------

export default DatabaseVersionToggleScreen;
