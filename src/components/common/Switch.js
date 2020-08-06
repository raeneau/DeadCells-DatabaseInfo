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
function Switch(props) {
  const { switchId, onChange, label, onLabel, offLabel } = props;
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
        <input type="checkbox" id={switchId} onChange={handleChange} />
        <span className={cn.span} />
      </label>
    </div>
  );
}

Switch.propTypes = {
  switchId: PropTypes.string,
};

Switch.defaultProps = {
  switchId: "",
};

// -----------------------------------------------------------------------------

export default Switch;
