import _map from "lodash.map";
import _get from "lodash.get";
import _merge from "lodash.merge";

// -----------------------------------------------------------------------------

const loadEnemyData = (biomeData) => {
  const allEnemyLocations = _map(biomeData, (level) => ({
    mobs: _map(_get(level, "mobs"), (mob) => ({
      name: _get(mob, "mob"),
      minDifficulty: _get(mob, "minDifficulty", 0),
      // If maximum is undefined, then the max is the current highest difficulty (5BC)
      maxDifficulty: _get(mob, "maxDifficulty", 5),
    })),
    id: _get(level, "id"),
  }));

  const allEnemyData = allEnemyLocations.reduce(
    (formattedEnemyAcc, levelEntry) => {
      const { mobs: levelMobs, id: levelId } = levelEntry;
      const formattedLevelEnemies = levelMobs.reduce(
        (biomeEnemyAcc, enemyEntry) => {
          const { minDifficulty, maxDifficulty } = enemyEntry;

          return {
            ...biomeEnemyAcc,
            [enemyEntry.name]: {
              [levelId]: {
                minDifficulty,
                maxDifficulty,
              },
            },
          };
        },
        {},
      );

      return _merge(formattedEnemyAcc, formattedLevelEnemies);
    },
    {},
  );

  return allEnemyData;
};

export default loadEnemyData;
