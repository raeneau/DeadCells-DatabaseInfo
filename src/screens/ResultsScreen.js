import React from "react";
import { Route, Routes } from "react-router-dom";

import inputTypes from "../constants/inputTypes";

import WeaponsScreen from "./ItemsMelee";
import RangedWeaponsScreen from "./ItemsRanged";
import ShieldsScreen from "./ItemsShields";
import GrenadesScreen from "./ItemsGrenade";
import TrapScreen from "./ItemsTraps";
import PowersScreen from "./ItemsPowers";
import EnemyScreen from "./Enemies";
import BiomesScreen from "./LevelsScreen";
import NotFoundScreen from "./NotFound";
import NameConflictScreen from "./NameConflictScreen";

// -----------------------------------------------------------------------------

// Extract constants.
const {
  MELEE_WEAPON,
  RANGED_WEAPON,
  SHIELD,
  ENEMY,
  GRENADE,
  TRAP,
  LEVEL,
  POWER,
} = inputTypes;

// -----------------------------------------------------------------------------

export default () => (
  <Routes>
    <Route exact path="/search" />
    <Route exact path={`/${MELEE_WEAPON}`} element={<WeaponsScreen />} />
    <Route exact path={`/${RANGED_WEAPON}`} element={<RangedWeaponsScreen />} />
    <Route exact path={`/${SHIELD}`} element={<ShieldsScreen />} />
    <Route exact path={`/${GRENADE}`} element={<GrenadesScreen />} />
    <Route exact path={`/${TRAP}`} element={<TrapScreen />} />
    <Route exact path={`/${POWER}`} element={<PowersScreen />} />
    <Route exact path={`/${ENEMY}`} element={<EnemyScreen />} />
    <Route exact path={`/${LEVEL}`} element={<BiomesScreen />} />
    <Route exact path="/NotFound" element={<NotFoundScreen />} />
    <Route exact path="/NameConflictScreen" element={<NameConflictScreen />} />
  </Routes>
);
