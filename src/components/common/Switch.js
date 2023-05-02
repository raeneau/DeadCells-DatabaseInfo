import React, { useState } from "react";
import PropTypes from "prop-types";

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

const Switch = (props) => {
  const { switchId, onChange, label, onLabel, offLabel, disabled } = props;
  const [value, setValue] = useState({
    variableLabel: offLabel,
  });

  function handleChange(event) {
    setValue({
      variableLabel: event.target.checked ? onLabel : offLabel,
    });
    // Here, we invoke the callback with the new value
    onChange(event);
  }

  const { variableLabel } = value;

  return (
    <div className={cn.wrapper}>
      <span className={cn.label}>
        {label}
        <b>{variableLabel}</b>
      </span>
      <label className={cn.labelWrapper} htmlFor={switchId}>
        <input
          disabled={disabled}
          type="checkbox"
          id={switchId}
          onChange={handleChange}
        />
        <span className={`${cn.span} ${disabled ? "disabled" : ""}`} />
      </label>
    </div>
  );
};

Switch.propTypes = {
  switchId: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  onLabel: PropTypes.string,
  offLabel: PropTypes.string,
  disabled: PropTypes.bool,
};

Switch.defaultProps = {
  switchId: "",
  onLabel: "",
  offLabel: "",
  disabled: false,
};

// -----------------------------------------------------------------------------

export default Switch;
