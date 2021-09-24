import React from "react";
import PropTypes from "prop-types";
import _map from "lodash.map";

// Constants.
import { DATABASES } from "../../constants/databaseVersion";

// Styles.
import "./Switch.css";

// -----------------------------------------------------------------------------

const cnBase = "Switch";
const cn = {
  label: `${cnBase}__label`,
  span: `${cnBase}__span`,
  wrapper: `${cnBase}__wrapper`,
  labelWrapper: `${cnBase}__labelWrapper`,
};
function Switch(props) {
  const { onChange, label } = props;

  function handleChange(event) {
    // Invoke the callback with the new value
    onChange(event);
  }

  return (
    <div className={cn.wrapper}>
      <label htmlFor="cars">{label}</label>
      <select name="cars" id="cars" onChange={handleChange}>
        {_map(DATABASES, ({ id, label: updateLabel }) => (
          <option key={`Update-${id}`} value={id}>
            {updateLabel}
          </option>
        ))}
      </select>
    </div>
  );
}

Switch.propTypes = {
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
};

// -----------------------------------------------------------------------------

export default Switch;
