import React, { Fragment } from "react";
import PropTypes from "prop-types";
import _get from "lodash.get";

// -----------------------------------------------------------------------------

function ComboRate(props) {
  const { array } = props;

  // If is no data, just return
  if (array === undefined || array.length === 0) {
    return null;
  }

  const totalComboCount = array.length;
  const durationByHit = [];
  // Save unique keys for the array of hit durations, don't use index of the
  // hit duration array to avoid unnecessary re-renders
  const hitDurationKeys = [];

  const comboRate = array.reduce((accumulator, element, index) => {
    const charge = _get(element, "charge", 0);
    const cooldown = _get(element, "coolDown", 0);
    const lockControlAfter = _get(element, "lockCtrlAfter", 0);

    const durationForCurrentHit =
      charge + Math.max(cooldown + lockControlAfter);

    durationByHit.push(
      <Fragment>
        <td className="BulletedCell">
          <li>Hit {index + 1}</li>
        </td>
        <td>{durationForCurrentHit.toFixed(2)}</td>
      </Fragment>,
    );
    hitDurationKeys.push(index);

    return accumulator + durationForCurrentHit;
  }, 0);

  const hitOrHits = totalComboCount === 1 ? " hit" : "hits";

  return (
    <Fragment>
      <tr>
        <td>Combo Rate</td>
        <td>
          {" "}
          One {totalComboCount < 2
            ? hitOrHits
            : `${totalComboCount}-hit combo`}{" "}
          every {comboRate.toFixed(2)} seconds
        </td>
      </tr>
      {durationByHit.map((hit, index) => (
        <tr key={`Combo__hit${hitDurationKeys[index]}`}>{hit}</tr>
      ))}
    </Fragment>
  );
}

ComboRate.propTypes = {
  array: PropTypes.arrayOf(
    PropTypes.shape({
      charge: PropTypes.number,
      cooldown: PropTypes.number,
      lockControlAfter: PropTypes.number,
    }),
  ),
};

ComboRate.defaultProps = {
  array: undefined,
};

// -----------------------------------------------------------------------------

export default ComboRate;
