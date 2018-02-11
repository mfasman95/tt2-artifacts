import { artifactData, artifactCosts } from './artifactData';
import { displayPercentage, displayTruncated } from './roundingDisplay';
import { calcCurrentEffect, calcCurrentCost, calcTotalAd } from './artifactCalculations';

export const DEFAULT = 'N/A';

export const THEME_OPTIONS = [
  'default',
  'cerulean',
  'cosmo',
  'cyborg',
  'darkly',
  'flatly',
  'journal',
  'lumen',
  'paper',
  'readable',
  'sandstone',
  'simplex',
  'slate',
  'spacelab',
  'superhero',
  'united',
  'yeti',
];

export const BUILD_OPTIONS = [
  DEFAULT,
  'hero',
  'tap',
  'pet',
  'hs',
  'sc',
  'cs',
];

export const HERO_DAMAGE_TYPES = [
  DEFAULT,
  'melee',
  'ranged',
  'spell',
];

export const HERO_TYPES = [
  DEFAULT,
  'ground',
  'flying',
];

export const PLAYSTYLES = [
  DEFAULT,
  'online',
  'offline',
];

export const ARTIFACT_LIST = [
  'Book of Shadows',
  'Stone of Valrunes',
  'Chest of Contentment',
  'Heroic Shield',
  'Book of Prophecy',
  'Zakynthos Coin',
  'Great Fay Medallion',
  'Coins of Ebizu',
  'Heavenly Sword',
  'Divine Retribution',
  'Drunken Hammer',
  'Samosek Sword',
  'The Retaliator',
  'Hero\'s Blade',
  'The Sword of Storms',
  'Furies\' Bow',
  'Charm of the Ancients',
  'Tiny Titan Tree',
  'Helm of Hermes',
  'Fruit of Eden',
  'Influential Elixir',
  'O\'Ryan\'s Charm',
  'Heart of Storms',
  'Apollo Orb',
  'Avian Feather',
  'Corrupted Rune Heart',
  'Durendal Sword',
  'Helheim Skull',
  'Ring of Calisto',
  'Blade of Damocles',
  'Helmet of Madness',
  'Titanium Plating',
  'Amethyst Staff',
  'Invader\'s Gjalarhorn',
  'Titan\'s Mask',
  'Royal Toxin',
  'Laborer\'s Pendant',
  'Bringer of Ragnarok',
  'Parchment of Foresight',
  'Elixir of Eden',
  'Hourglass of the Impatient',
  'Phantom Timepiece',
  'Forbidden Scroll',
  'Ring of Fealty',
  'Glacial Axe',
  'Aegis',
  'Swamp Gauntlet',
  'Infinity Pendulum',
  'Glove of Kuma',
  'Titan Spear',
  'Oak Staff',
  'The Arcana Cloak',
  'Hunter\'s Ointment',
  'Ambrosia Elixir',
  'Mystic Staff',
  'Egg of Fortune',
  'Divine Chalice',
  'Invader\'s Shield',
  'Axe of Muerte',
  'Essence of the Kitsune',
  'Lost King\'s Mask',
  'Staff of Radiance',
  'The Master\'s Sword',
  'Aram Spear',
  'Ward of the Darkness',
];

export const ARTIFACT_EXPONENTS = [
  DEFAULT,
  'K',
  'M',
  'B',
  'T',
  'e13',
  'e14',
  'e15',
  'e16',
  'e17',
  'e18',
];

export const BOS_FORCE_TYPES = [
  DEFAULT,
  'levels',
  'percentage',
];

export const ARTIFACT_DATA = artifactData;
export const ARTIFACT_COSTS = artifactCosts;
export const displayPct = displayPercentage;
export const displayTrunc = displayTruncated;
export const calcCurrentArtifactEffect = calcCurrentEffect;
export const calcCurrentArtifactCost = calcCurrentCost;
export const calcTotalArtifactDamage = calcTotalAd;

export default Object.freeze({
  DEFAULT,
  THEME_OPTIONS,
  BUILD_OPTIONS,
  HERO_DAMAGE_TYPES,
  HERO_TYPES,
  PLAYSTYLES,
  ARTIFACT_LIST,
  ARTIFACT_EXPONENTS,
  BOS_FORCE_TYPES,
  ARTIFACT_DATA: artifactData,
  ARTIFACT_COSTS: artifactCosts,
  displayPct: displayPercentage,
  displayTrunc: displayTruncated,
  calcCurrentArtifactEffect: calcCurrentEffect,
  calcCurrentArtifactCost: calcCurrentCost,
  calcTotalArtifactDamage: calcTotalAd,
});
