import React from 'react';
import _get from 'lodash.get';

import itemJson1 from '../database/item/Ranged/101---CloseCombatBow.json';
import weaponJson1 from '../database/weapon/44---CloseCombatBow.json';

import itemJson2 from '../database/item/Melee/084---OilSword.json';
import weaponJson2 from '../database/weapon/05---OilSword.json';

import BasicDisplay from './basicDisplay'
import ArrayDisplay from './arrayDisplay'
import Scaling from './scaling';
import ComboRate from './comboRate';
import BaseDps from './baseDps';
import Tags from './tags';

// -----------------------------------------------------------------------------
const errorMessage = "Error retrieving data";

function Items(props) {
    const itemJson = props.userInput === '1' ? itemJson1 : itemJson2;
    const weaponJson = props.userInput === '1' ? weaponJson1 : weaponJson2;

    console.log(itemJson);
    console.log(weaponJson);

  return (
    <div>
        <BasicDisplay name='Internal Name' value={_get(weaponJson, 'item', errorMessage)}/>
        <BasicDisplay name='Ammo' value={_get(itemJson, 'props.ammo')}/>
        <BasicDisplay name='Type' value={_get(itemJson, '__separator_group_Name', errorMessage)}/>
        <Scaling firstColor={_get(itemJson, 'tier1', '')} secondColor={_get(itemJson, 'tier2', null)}/>
        <ArrayDisplay name='Damage on Hit' array={_get(weaponJson, 'strikeChain')} objectKey='power' />
        <ComboRate array={_get(weaponJson, 'strikeChain')}/>
        <BaseDps array={_get(weaponJson, 'strikeChain')}/>
        <ArrayDisplay name='Breach Bonus' array={_get(weaponJson, 'strikeChain')} objectKey='breachBonus' />
        *Attack Duration: {_get(weaponJson, 'strikeChain[0].charge', errorMessage) + _get(weaponJson, 'strikeChain[0].coolDown', errorMessage)}
            ({_get(weaponJson, 'strikeChain[0].charge', errorMessage)} * {_get(weaponJson, 'strikeChain[0].coolDown', errorMessage)}) seconds
        <br/>
        <ArrayDisplay name='Lock' array={_get(weaponJson, 'strikeChain')} objectKey='lockCtrlAfter' />
        <BasicDisplay name='Base Price' value={_get(itemJson, 'moneyCost', errorMessage)}/>
        <BasicDisplay name='Unlock Cost' value={_get(itemJson, 'cellCost', errorMessage)}/>
        <Tags tagArray={_get(itemJson, 'tags', errorMessage)}/>
        *Tags: {JSON.stringify(_get(itemJson, 'tags', errorMessage))}
        <BasicDisplay name='Forced Affix' value={_get(itemJson, 'legendAffix', errorMessage)}/>
    </div>
    );
}

// -----------------------------------------------------------------------------

export default Items;
