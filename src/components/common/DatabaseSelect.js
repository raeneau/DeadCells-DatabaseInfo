import React from "react";
import PropTypes from "prop-types";
import _map from "lodash.map";

// Constants.
import { DATABASES } from "../../constants/databaseVersion";

// -----------------------------------------------------------------------------

const cnBase = "DatabaseSelect";
const cn = {
  label: `${cnBase}__label`,
  span: `${cnBase}__span`,
  wrapper: `${cnBase}__wrapper`,
  labelWrapper: `${cnBase}__labelWrapper`,
};
const DatabaseSelect = (props) => {
  const { onChange, label } = props;

  function handleChange(event) {
    // Invoke the callback with the new value
    onChange(event);
  }

  return (
    <div className={cn.wrapper}>
      <label htmlFor="cars">{label}</label>
      <select
        name="Database Select"
        className="DatabaseSelect"
        onChange={handleChange}
      >
        {_map(DATABASES, ({ id, number, name: updateLabel }) => (
          <option key={`Update-${id}`} value={id}>
            {`${number} - ${updateLabel}`}
          </option>
        ))}
      </select>
    </div>
  );
};

DatabaseSelect.propTypes = {
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
};

// -----------------------------------------------------------------------------

export default DatabaseSelect;
