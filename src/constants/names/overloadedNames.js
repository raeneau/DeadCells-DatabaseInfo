import inputTypes from "../inputTypes";

const { ENEMY, SHIELD } = inputTypes;

export default {
  SHIELD: { INTERNAL_ID: "SHIELD", TYPE: [ENEMY, SHIELD] },
  MIMIC: { INTERNAL_ID: "MIMIC", TYPE: [ENEMY, ENEMY] },
};
