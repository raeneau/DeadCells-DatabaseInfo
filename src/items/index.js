import React from 'react';
import _get from 'lodash.get';

import itemJson from '../database/item/Ranged/101---CloseCombatBow.json';
import weaponJson from '../database/weapon/44---CloseCombatBow.json';

import BasicDisplay from './basicDisplay'
import ArrayDisplay from './arrayDisplay'
import Scaling from './scaling';

// -----------------------------------------------------------------------------
const errorMessage = "Error retrieving data";

function Items() {
  return (
    <div>
        <BasicDisplay name='Internal Name' value={_get(weaponJson, 'item', errorMessage)}/>
        <BasicDisplay name='Ammo' value={_get(itemJson, 'props.ammo', errorMessage)}/>
        <BasicDisplay name='Type' value={_get(itemJson, '__separator_group_Name', errorMessage)}/>
        <Scaling firstColor={_get(itemJson, 'tier1', '')} secondColor={_get(itemJson, 'tier2', null)}/>
        <ArrayDisplay name='Damage on Hit' array={_get(weaponJson, 'strikeChain')} objectKey='power' />
        *Combo Rate: 1 hit every {_get(weaponJson, 'strikeChain[0].charge', errorMessage) + _get(weaponJson, 'strikeChain[0].coolDown', errorMessage)} seconds
        <br/>
        *Base DPS: {_get(weaponJson, 'strikeChain[0].power[0]', errorMessage) * (1/(_get(weaponJson, 'strikeChain[0].charge', errorMessage) + _get(weaponJson, 'strikeChain[0].coolDown', errorMessage)))}
        <br/>
        <ArrayDisplay name='Breach Bonus' array={_get(weaponJson, 'strikeChain')} objectKey='breachBonus' />
        *Attack Duration: {_get(weaponJson, 'strikeChain[0].charge', errorMessage) + _get(weaponJson, 'strikeChain[0].coolDown', errorMessage)}
            ({_get(weaponJson, 'strikeChain[0].charge', errorMessage)} * {_get(weaponJson, 'strikeChain[0].coolDown', errorMessage)}) seconds
        <br/>
        <ArrayDisplay name='Lock' array={_get(weaponJson, 'strikeChain')} objectKey='lockCtrlAfter' />
        <BasicDisplay name='Base Price' value={_get(itemJson, 'moneyCost', errorMessage)}/>
        <BasicDisplay name='Unlock Cost' value={_get(itemJson, 'cellCost', errorMessage)}/>
        *Tags: {JSON.stringify(_get(itemJson, 'tags', errorMessage))}
        <br/>
        <BasicDisplay name='Forced Affix' value={_get(itemJson, 'legendAffix', errorMessage)}/>
    </div>
    );
}

// -----------------------------------------------------------------------------

export default Items;
