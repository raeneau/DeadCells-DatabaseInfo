import React from "react";

import enemyLocation from "../../utils/enemyLocation";

// -----------------------------------------------------------------------------

// const cnBase = "ItemProperties";

// TODO: Move to formatting folder?
const formatDifficulty = ({ min, max }) => {
  if (min === max) {
    return `${min} BSC`;
  }
  if (max === 5 || max === undefined) {
    return `${min} BSC+`;
  }
  return `${min}-${max} BSC`;
};

const EnemiesScreen = (props) => {
  const { userInput } = props;

  const enemyBiomeLocations = enemyLocation({ enemy: userInput });
  return (
    <div>
      <h3 className="SubHeader">Location(s)</h3>
      <table>
        <tbody>
          {enemyBiomeLocations.map((location) => (
            <tr key={`Combo__location${location.name}`}>
              <td>{location.name}</td>
              <td>
                {formatDifficulty({
                  min: location.minDifficulty,
                  max: location.maxDifficulty,
                })}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// -----------------------------------------------------------------------------

export default EnemiesScreen;
