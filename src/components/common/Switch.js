import React from "react";
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
  const { switchId, onChange, label, value } = props;

  return (
    <div className={cn.wrapper}>
      <span className={cn.label}>{label}</span>
      <label className={cn.labelWrapper} htmlFor={switchId}>
        <input type="checkbox" id={switchId} onChange={onChange} />
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
