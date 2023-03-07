import React from "react";

export default (
  <div>
    <li>Update database to 3.3.</li>
    <li>Add mappings for 3.3 melee weapons, ranged weapons, and powers.</li>
    <li>
      Redid database lookup path for all weapons (EE made a new folder
      structure)
    </li>
    <li>
      Fix flawless outfits showing NaN in drop table. Now says "Special Drop"
    </li>
    <li>
      Add mappings for new enemies, excluding Dire Werewolf (The entries in the
      database are the same for Werewolf & Dire Werewolf, it seems like)
    </li>
    <br />
    <li>
      <b>
        Note - Cat's separate attack is searchable with "cat attack" / "cat
        slash" / "cat scratch" / "maria's cat attack"
      </b>
    </li>
  </div>
);
