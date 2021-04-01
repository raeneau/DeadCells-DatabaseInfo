import React, { Fragment } from "react";
import PropTypes from "prop-types";
import _get from "lodash.get";

// -----------------------------------------------------------------------------

function DamagePerHit(props) {
  const { array } = props;

  // If there is no data, just return nothing
  if (array === undefined || array.length === 0) {
    return null;
  }

  const damageByHit = [];
  // Save unique keys for the array of hits, don't use index of the
  // hit array to avoid unnecessary re-renders
  const damageByHitKeys = [];

  array.forEach((element, index) => {
    // TODO: Make this support multiple power entries? (Is that a thing?)
    const power = _get(element, "power[0]");
    const critMult = _get(element, "critMul", 1);
    const canCrit = _get(element, "canCrit", 1);

    if (power) {
      damageByHit.push(
        <Fragment>
          <td className="BulletedCell">
            <li>Hit {damageByHit.length + 1}</li>
          </td>
          <td>
            {power} {canCrit ? `(${(power * 2 * critMult).toFixed(0)})` : ""}
          </td>
        </Fragment>,
      );
      damageByHitKeys.push(index);
    }
  }, "");

  return (
    <Fragment>
      <tr>
        <td>Damage on Hit</td>
        <td />
      </tr>
      {damageByHit.map((hit, index) => (
        <tr key={`Combo__hit${damageByHitKeys[index]}`}>{hit}</tr>
      ))}
    </Fragment>
  );
}

DamagePerHit.propTypes = {
  // Array can be any array at all, so we can't have an arrayOf...
  array: PropTypes.array, // eslint-disable-line react/forbid-prop-types
};

DamagePerHit.defaultProps = {
  array: undefined,
};

// -----------------------------------------------------------------------------

export default DamagePerHit;
