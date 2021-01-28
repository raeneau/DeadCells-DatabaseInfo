import inputTypes from "../inputTypes";

const { ENEMY } = inputTypes;

export default {
  ZOMBIE: { INTERNAL_ID: "ZOMBIE", TYPE: ENEMY, NAME: "Zombie" },
  ARCHER: { INTERNAL_ID: "ARCHER", TYPE: ENEMY, NAME: "Undead Archer" },
  S_WALLEGGWORM: {
    INTERNAL_ID: "S_WALLEGGWORM",
    TYPE: ENEMY,
    NAME: "Worm (Wall Egg)",
  },
  SHIELDBEARER: { INTERNAL_ID: "SHIELD", TYPE: ENEMY, NAME: "Shieldbearer" },
  GRENADIER: { INTERNAL_ID: "GRENADER", TYPE: ENEMY, NAME: "Grenadier" },
  BOMBARDIER: {
    INTERNAL_ID: "CLUSTERGRENADER",
    TYPE: ENEMY,
    NAME: "Bombardier",
  },
  BAT: { INTERNAL_ID: "BATDASHER", TYPE: ENEMY, NAME: "Bat" },
  KAMIKAZE: { INTERNAL_ID: "BATKAMIKAZE", TYPE: ENEMY, NAME: "Kamikaze" },
  RUNNER: { INTERNAL_ID: "RUNNER", TYPE: ENEMY, NAME: "Runner" },
  INQUISITOR: { INTERNAL_ID: "MAGE360", TYPE: ENEMY, NAME: "Inquisitor" },
  PROTECTOR: { INTERNAL_ID: "SHIELDER", TYPE: ENEMY, NAME: "Protector" },
  HAMMER: { INTERNAL_ID: "HAMMER", TYPE: ENEMY, NAME: "Hammer" },
  S_FLY: {
    INTERNAL_ID: "S_FLY",
    TYPE: ENEMY,
    NAME: "Fly (Hammer)",
  },
  SWEEPER: { INTERNAL_ID: "MINIMOTH", TYPE: ENEMY, NAME: "Sweeper" },
  BUZZCUTTER: { INTERNAL_ID: "FLY", TYPE: ENEMY, NAME: "Buzzcutter" },
  PURULENT_ZOMBIE_S: {
    INTERNAL_ID: "WORMZOMBIE",
    TYPE: ENEMY,
    NAME: "Purulent Zombie (Sewers)",
  },
  S_WORM: {
    INTERNAL_ID: "S_WORM",
    TYPE: ENEMY,
    NAME: "Worm (Zombie)",
  },
  PURULENT_ZOMBIE_G: {
    INTERNAL_ID: "FLYZOMBIE",
    TYPE: ENEMY,
    NAME: "Purulent Zombie (Graveyard)",
  },
  S_ZOMBIEFLY: {
    INTERNAL_ID: "S_ZOMBIEFLY",
    TYPE: ENEMY,
    NAME: "Fly (Zombie)",
  },
  DISGUSTING_WORM: {
    INTERNAL_ID: "WORM",
    TYPE: ENEMY,
    NAME: "Disgusting Worm",
  },
  SCORPION: { INTERNAL_ID: "SCORPIO", TYPE: ENEMY, NAME: "Scorpion" },
  IMPALER: { INTERNAL_ID: "SPIKER", TYPE: ENEMY, NAME: "Impaler" },
  SEWER_TTCL: {
    INTERNAL_ID: "SEWERTTCL",
    TYPE: ENEMY,
    NAME: "Sewer's Tentacle",
  },
  CATCHER: { INTERNAL_ID: "HOOKER", TYPE: ENEMY, NAME: "Catcher" },
  CLEAVER: { INTERNAL_ID: "AXETHROWER", TYPE: ENEMY, NAME: "Cleaver" },
  PIRATE_CAPTAIN: {
    INTERNAL_ID: "PIRATECHIEF",
    TYPE: ENEMY,
    NAME: "Pirate Captain",
  },
  KNIFE_THROWER: {
    INTERNAL_ID: "KUNAIMASTER",
    TYPE: ENEMY,
    NAME: "Knife Thrower",
  },
  SLASHER: { INTERNAL_ID: "COMBOTER", TYPE: ENEMY, NAME: "Slasher" },
  LACERATOR: { INTERNAL_ID: "SPINNER", TYPE: ENEMY, NAME: "Lacerator" },
  SHOCKER: { INTERNAL_ID: "SHOCKER", TYPE: ENEMY, NAME: "Shocker" },
  THORNY: { INTERNAL_ID: "SPIKEDSATYR", TYPE: ENEMY, NAME: "Thorny" },
  SPAWNER: { INTERNAL_ID: "SPAWNER", TYPE: ENEMY, NAME: "Spawner" },
  MASKER: { INTERNAL_ID: "FOGGER", TYPE: ENEMY, NAME: "Fogger" },
  CASTER: { INTERNAL_ID: "ORBLAUNCHER", TYPE: ENEMY, NAME: "Caster" },
  GOLEM: { INTERNAL_ID: "GOLEM", TYPE: ENEMY, NAME: "Golem" },
  DARK_TRACKER: { INTERNAL_ID: "NINJA", TYPE: ENEMY, NAME: "Dark Tracker" },
  CANNIBAL: { INTERNAL_ID: "LEAPINGDUELYST", TYPE: ENEMY, NAME: "Cannibal" },
  AUTOMATON: { INTERNAL_ID: "TIMEKEEPERBOT", TYPE: ENEMY, NAME: "Automaton" },
  LANCER: { INTERNAL_ID: "LANCER", TYPE: ENEMY, NAME: "Lancer" },
  GUARDIAN_KNIGHT: {
    INTERNAL_ID: "CASTLEKNIGHT",
    TYPE: ENEMY,
    NAME: "Guardian Knight",
  },
  ROYAL_GUARD: { INTERNAL_ID: "KINGSFINGER", TYPE: ENEMY, NAME: "Royal Guard" },
  BOMBER: { INTERNAL_ID: "BOMBER", TYPE: ENEMY, NAME: "Bomber" },
  SLAMMER: { INTERNAL_ID: "STOMPER", TYPE: ENEMY, NAME: "Slammer" },
  DEMON: { INTERNAL_ID: "DEMON", TYPE: ENEMY, NAME: "Demon" },
  ARBITER: { INTERNAL_ID: "ARBITER", TYPE: ENEMY, NAME: "Arbiter" },
  GROUND_SHAKER: {
    INTERNAL_ID: "EARTHQUAKER",
    TYPE: ENEMY,
    NAME: "Ground Shaker",
  },
  SKELETON: { INTERNAL_ID: "STOMPSKELETON", TYPE: ENEMY, NAME: "Skeleton" },
  RAMPAGER: { INTERNAL_ID: "RAMPAGER", TYPE: ENEMY, NAME: "Rampager" },
  FAILED_EXP: {
    INTERNAL_ID: "AGGRESSIVEZOMBIE",
    TYPE: ENEMY,
    NAME: "Failed Experiment",
  },
  DEFENDER: { INTERNAL_ID: "DEFENDER", TYPE: ENEMY, NAME: "Defender" },
  MAGISTRATE: {
    INTERNAL_ID: "DEATHMAGE",
    TYPE: ENEMY,
    NAME: "Magistrate of Death",
  },
  LIBRARIAN: { INTERNAL_ID: "LIBRARIAN", TYPE: ENEMY, NAME: "Librarian" },

  // ------------------------------ BAD SEED -------------------------------- //
  YEETER: { INTERNAL_ID: "PITCHER", TYPE: ENEMY, NAME: "Yeeter" },
  JERKSHROOM: {
    INTERNAL_ID: "THROWABLEMUSHROOM",
    TYPE: ENEMY,
    NAME: "Jerkshroom",
  },
  BANISHED: { INTERNAL_ID: "FUGITIVE", TYPE: ENEMY, NAME: "Banished" },
  BLOWGUNNER: { INTERNAL_ID: "BLOWGUNNER", TYPE: ENEMY, NAME: "Blowgunner" },
  TICK: { INTERNAL_ID: "TICK", TYPE: ENEMY, NAME: "Giant Tick" },

  // --------------------------- BESTIARY UPDATE ---------------------------- //
  RAT: { INTERNAL_ID: "RAT", TYPE: ENEMY, NAME: "Rancid Rat" },
  OVEN_KNIGHT: { INTERNAL_ID: "ENFORCER", TYPE: ENEMY, NAME: "Guardian" },
  BLOBBY: { INTERNAL_ID: "BLOBBY", TYPE: ENEMY, NAME: "Toxic Miasma" },
  CRAB: { INTERNAL_ID: "SAMURAI", TYPE: ENEMY, NAME: "Weirded Warrior" },
  FAT_ZOMBIE: {
    INTERNAL_ID: "FATZOMBIE",
    TYPE: ENEMY,
    NAME: "Corpulent Zombie",
  },
  DUELIST: { INTERNAL_ID: "DUELIST", TYPE: ENEMY, NAME: "Duelist" },

  // ------------------------ BARRELS O' FUN UPDATE ------------------------- //
  INFECTED_WORKER: {
    INTERNAL_ID: "HURLER",
    TYPE: ENEMY,
    NAME: "Infected Worker",
  },
  LIVING_BARREL: { INTERNAL_ID: "MIMIC", TYPE: ENEMY, NAME: "Living Barrel" },

  // --------------------------- CHRISTMAS UPDATE --------------------------- //
  CROSSBOW_MAN: { INTERNAL_ID: "CROSSBOWMAN", TYPE: ENEMY, NAME: "Demolisher" },

  // ----------------------------- FATAL FALLS ------------------------------ //
  CROW: { INTERNAL_ID: "FLYINGCROW", TYPE: ENEMY, NAME: "Myopic Crow" },
  JAVELIN_SNAKE: {
    INTERNAL_ID: "JAVELINSNAKE",
    TYPE: ENEMY,
    NAME: "Cold Blooded Guardian",
  },
  AXE_STATUE: {
    INTERNAL_ID: "AXESTATUE",
    TYPE: ENEMY,
    NAME: "Stone Warden (Axe)",
  },
  SPEAR_STATUE: {
    INTERNAL_ID: "SPEARSTATUE",
    TYPE: ENEMY,
    NAME: "Stone Warden (Spear)",
  },
  NECROMANCER: { INTERNAL_ID: "NECROMANT", TYPE: ENEMY, NAME: "Apostate" },
  BOOTLEG_BLOB: {
    INTERNAL_ID: "BOOTLEGHOMUNCULUS",
    TYPE: ENEMY,
    NAME: "Failed Homunculus",
  },
  BOOTLEG_SWORD: {
    INTERNAL_ID: "BOOTLEGSWORDSMAN",
    TYPE: ENEMY,
    NAME: "Clumsy Swordsman",
  },
  BOOTLEG_BOW: {
    INTERNAL_ID: "BOOTLEGBOWMAN",
    TYPE: ENEMY,
    NAME: "Dastardly Archer",
  },
  BOOTLEG_SHOVEL: {
    INTERNAL_ID: "BOOTLEGSHOVELMAN",
    TYPE: ENEMY,
    NAME: "Compulsive Gravedigger",
  },

  // ---------------------------------------------------------------------------
  // BOSSES
  // ---------------------------------------------------------------------------
  CONCIERGE: { INTERNAL_ID: "BEHEMOTH", TYPE: ENEMY, NAME: "Concierge" },
  CONJU: { INTERNAL_ID: "BEHOLDER", TYPE: ENEMY, NAME: "Conjunctivius" },
  MAMA_TICK: { INTERNAL_ID: "MAMATICK", TYPE: ENEMY, NAME: "Mama Tick" },
  TIME_KEEPER: { INTERNAL_ID: "TIMEKEEPER", TYPE: ENEMY, NAME: "Time Keeper" },
  GIANT: { INTERNAL_ID: "GIANT", TYPE: ENEMY, NAME: "Giant" },
  HOTK: { INTERNAL_ID: "KINGSHAND", TYPE: ENEMY, NAME: "Hand of the King" },
  COLLECTOR: { INTERNAL_ID: "COLLECTOR", TYPE: ENEMY, NAME: "The Collector" },
  SCARECROW: {
    INTERNAL_ID: "GARDENERBOSS",
    TYPE: ENEMY,
    NAME: "The Scarecrow",
  },
};
