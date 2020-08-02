import React from "react";
import PropTypes from "prop-types";

import { calculateDps } from "../../utils/calculateDps";

// -----------------------------------------------------------------------------

function BaseDps(props) {
  const { array, itemJson, internalId } = props;

  // If is no data, just return
  if (array === undefined || array.length === 0) {
    return null;
  }

  const dps = calculateDps({
    strikeChainArray: array,
    itemJsonProps: itemJson,
    internalId,
  });
  const critDpsMessage =
    dps.dps === dps.critDps || dps.critDps === ""
      ? `(N/A) *weapon cannot crit in normal gameplay`
      : `(${dps.critDps}) *crit has a special activation condition`;
  const critDps = dps.critAllowed ? `(${dps.critDps})` : critDpsMessage;

  return (
    <tr>
      <td>Base DPS</td>
      <td>
        {dps.dps} {critDps}
      </td>
    </tr>
  );
}

BaseDps.propTypes = {
  array: PropTypes.arrayOf(
    PropTypes.shape({
      power: PropTypes.arrayOf(PropTypes.number),
      charge: PropTypes.number,
      lock: PropTypes.number,
    }),
  ),
};

BaseDps.defaultProps = {
  array: undefined,
};

// -----------------------------------------------------------------------------

export default BaseDps;
