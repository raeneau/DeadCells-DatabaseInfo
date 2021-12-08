import React from "react";
import { MemoryRouter, Route, Switch } from "react-router-dom";

import inputTypes from "../constants/inputTypes";

import WeaponsScreen from "./ItemsMelee";
import RangedWeaponsScreen from "./ItemsRanged";
import ShieldsScreen from "./ItemsShields";
import GrenadesScreen from "./ItemsGrenades";
import TrapScreen from "./ItemsTraps";
import PowersScreen from "./ItemsPowers";
import EnemyScreen from "./EnemyScreen";
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

export default ({ internalId, name, jsonArrays }) => (
  <MemoryRouter>
    <Switch>
      <Route
        exact
        path={`/${MELEE_WEAPON}`}
        render={(props) => (
          <WeaponsScreen
            {...props}
            userInput={jsonArrays}
            internalId={internalId}
            name={name}
          />
        )}
      />
      <Route
        exact
        path={`/${RANGED_WEAPON}`}
        render={(props) => (
          <RangedWeaponsScreen
            {...props}
            userInput={jsonArrays}
            internalId={internalId}
            name={name}
          />
        )}
      />
      <Route
        exact
        path={`/${SHIELD}`}
        render={(props) => (
          <ShieldsScreen
            {...props}
            userInput={jsonArrays}
            internalId={internalId}
            name={name}
          />
        )}
      />
      <Route
        exact
        path={`/${GRENADE}`}
        render={(props) => (
          <GrenadesScreen
            {...props}
            userInput={jsonArrays}
            internalId={internalId}
            name={name}
          />
        )}
      />
      <Route
        exact
        path={`/${TRAP}`}
        render={(props) => (
          <TrapScreen
            {...props}
            userInput={jsonArrays}
            internalId={internalId}
            name={name}
          />
        )}
      />
      <Route
        exact
        path={`/${POWER}`}
        render={(props) => (
          <PowersScreen
            {...props}
            userInput={jsonArrays}
            internalId={internalId}
            name={name}
          />
        )}
      />
      <Route
        exact
        path={`/${ENEMY}`}
        render={(props) => (
          <EnemyScreen
            {...props}
            userInput={jsonArrays}
            internalId={internalId}
            name={name}
          />
        )}
      />
      <Route
        exact
        path={`/${LEVEL}`}
        render={(props) => (
          <BiomesScreen {...props} userInput={jsonArrays} name={name} />
        )}
      />
      <Route
        exact
        path="/NotFound"
        render={(props) => (
          <NotFoundScreen
            {...props}
            userInput={jsonArrays}
            internalId={internalId}
            name={name}
          />
        )}
      />
      <Route
        exact
        path="/NameConflictScreen"
        render={(props) => (
          <NameConflictScreen
            {...props}
            userInput={jsonArrays}
            internalId={internalId}
            name={name}
          />
        )}
      />
    </Switch>
  </MemoryRouter>
);

// {validJson && resourceType === MELEE_WEAPON && (
//   <WeaponsScreen
//     userInput={jsonArrays}
//     internalId={internalId}
//     name={name}
//   />
// )}
// {validJson && resourceType === RANGED_WEAPON && (
//   <RangedWeaponsScreen
//     userInput={jsonArrays}
//     internalId={internalId}
//     name={name}
//   />
// )}
// {validJson && resourceType === SHIELD && (
//   <ShieldsScreen
//     userInput={jsonArrays}
//     internalId={internalId}
//     name={name}
//   />
// )}
// {validJson && resourceType === ENEMY && (
//   <EnemyScreen
//     userInput={jsonArrays}
//     databaseVersion={databaseVersion}
//     ok={name}
//   />
// )}
// {validJson && resourceType === GRENADE && (
//   <GrenadesScreen
//     userInput={jsonArrays}
//     internalId={internalId}
//     name={name}
//   />
// )}
// {validJson && resourceType === TRAP && (
//   <TrapScreen
//     userInput={jsonArrays}
//     internalId={internalId}
//     name={name}
//   />
// )}
// {validJson && resourceType === POWER && (
//   <PowersScreen
//     userInput={jsonArrays}
//     internalId={internalId}
//     name={name}
//   />
// )}
// {validJson && resourceType === LEVEL && (
//   <BiomesScreen userInput={jsonArrays} name={name} />
// )}
// {!nameConflict && !_isEmpty(searchTerm) && _isEmpty(jsonArrays) && (
//   <NotFoundScreen userSearchTerm={searchTerm} />
// )}
// {nameConflict === true && (
//   <NameConflictScreen
//     searchTerm={searchTerm}
//     conflictTypes={resourceType}
//   />
// )}
