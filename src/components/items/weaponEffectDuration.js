import React, { Fragment } from "react";

import _get from "lodash.get";
import _isEmpty from "lodash.isempty";

// -----------------------------------------------------------------------------

function WeaponEffectDuration(props) {
  const { array } = props;

  // If is no data, just return
  if (array === undefined || array.length === 0) {
    return null;
  }

  const durationByHit = [];
  const aoeDurationByHit = [];
  // Save unique keys for the array of hits, don't use index of the
  // hit array to avoid unnecessary re-renders
  const durationByHitKeys = [];

  array.forEach((element, index) => {
    const duration = _get(element, "props.duration");
    const aoeDuration = _get(element, "props.aoeDuration");

    if (duration) {
      durationByHit.push(
        <Fragment>
          <td className="BulletedCell">
            <li>Hit {index + 1}</li>
          </td>
          <td>{duration}</td>
        </Fragment>,
      );
    }
    if (aoeDuration) {
      aoeDurationByHit.push(
        <Fragment>
          <td className="BulletedCell">
            <li>Hit {index + 1}</li>
          </td>
          <td>{aoeDuration}</td>
        </Fragment>,
      );
    }
    durationByHitKeys.push(index);
  });

  // Map the duration and AOE duration to JSX elements
  const durationElement = !_isEmpty(durationByHit) ? (
    <Fragment>
      <tr>
        <td>Weapon Effect Duration</td>
        <td />
      </tr>
      {durationByHit.map((hit, index) => (
        <tr key={`Combo__hit${durationByHitKeys[index]}`}>{hit}</tr>
      ))}
    </Fragment>
  ) : (
    <Fragment />
  );
  const aoeDurationElement = !_isEmpty(aoeDurationByHit) ? (
    <Fragment>
      <tr>
        <td>AOE Effect Duration</td>
        <td />
      </tr>
      {aoeDurationByHit.map((hit, index) => (
        <tr key={`Combo__hit${durationByHitKeys[index]}`}>{hit}</tr>
      ))}
    </Fragment>
  ) : (
    <Fragment />
  );

  return (
    <Fragment>
      {durationElement}
      {aoeDurationElement}
    </Fragment>
  );
}

// -----------------------------------------------------------------------------

export default WeaponEffectDuration;
