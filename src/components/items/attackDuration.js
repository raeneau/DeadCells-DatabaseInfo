import React, { Fragment } from "react";
import PropTypes from "prop-types";
import _get from "lodash.get";

// -----------------------------------------------------------------------------

function AttackDuration(props) {
  const { array } = props;

  // If there is no data, just return nothing
  if (array === undefined || array.length === 0) {
    return null;
  }

  const durationPerAttack = [];
  // Save unique keys for the array of hits, don't use index of the
  // hit array to avoid unnecessary re-renders
  const durationPerAttackKeys = [];

  array.forEach((element, index) => {
    const charge = _get(element, "charge", 0);

    durationPerAttack.push(
      <Fragment>
        <td className="BulletedCell">
          <li>Hit {index + 1}</li>
        </td>
        <td>{charge.toFixed(2)}</td>
      </Fragment>,
    );
    durationPerAttackKeys.push(index);
  }, "");

  return (
    <Fragment>
      <tr>
        <td>Attack Duration</td>
        <td />
      </tr>
      {durationPerAttack.map((hit, index) => (
        <tr key={`AttackDuration__hit${durationPerAttackKeys[index]}`}>
          {hit}
        </tr>
      ))}
    </Fragment>
  );
}

AttackDuration.propTypes = {};

AttackDuration.defaultProps = {
  charge: undefined,
  cooldown: undefined,
};

// -----------------------------------------------------------------------------

export default AttackDuration;
