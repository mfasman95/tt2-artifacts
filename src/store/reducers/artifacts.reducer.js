/* eslint-disable no-undef */
import extend from 'extend';
import { camelCase } from 'lodash';
import { DEFAULT, ARTIFACT_LIST, ARTIFACT_DATA, calcCurrentArtifactEffect, calcTotalArtifactDamage, calcCurrentArtifactCost } from './../../utils';

// Set initial application state
const initialState = {
  exponent: DEFAULT,
  artifactList: {},
  totalArtifactDamage: window.localStorage.getItem('totalArtifactDamage') || 0,
};

// Grab the artifact list
// Search for artifact data stored in local storage
// Set default values for anything not stored
ARTIFACT_LIST.map((artifact) => {
  const camelCasedArtifact = camelCase(artifact);
  // Grab the JSON for this artifact from local storage
  const storedArtifact = window.localStorage.getItem(camelCasedArtifact);
  initialState.artifactList[camelCasedArtifact] =
    // Check if the stored artifact exists
    storedArtifact
      // If it exists, parse the json data into a js object
      ? JSON.parse(storedArtifact)
      // Otherwise, create the default value
      : {
        name: artifact,
        checked: true,
        level: 0,
        currentEffect: calcCurrentArtifactEffect(0, ARTIFACT_DATA[camelCasedArtifact]),
        currentCost: calcCurrentArtifactCost(0, ARTIFACT_DATA[camelCasedArtifact]),
      };
  return camelCasedArtifact;
});

// Handle actions dispatched to the reducer
// Each value is a function
const actionHandlers = {
  UPDATE_ARTIFACT: (returnState, action) => {
    const rs = returnState;
    const { artifact, prop, value } = action;
    const camelCasedArtifactName = camelCase(artifact);
    const artifactObj = rs.artifactList[camelCasedArtifactName];

    // Update the value in the redux state
    artifactObj[prop] = value;

    if (prop === 'level') {
      const { level } = artifactObj;
      const artifactData = ARTIFACT_DATA[camelCasedArtifactName];

      artifactObj.currentEffect = calcCurrentArtifactEffect(level, artifactData);
      artifactObj.currentCost = calcCurrentArtifactCost(level, artifactData);
    }

    // Artifact level cannot go below 0
    if (artifactObj.level < 0) {
      artifactObj.level = 0;
    }

    // Update the value in local storage
    // Get and parse the artifact's current value in storage
    let artifactValues = window.localStorage.getItem(camelCasedArtifactName);

    // Handle if the artifact value was not stored in local storage
    artifactValues = JSON.parse(artifactValues) || Object.assign({}, artifactObj);

    const artifactKeys = Object.keys(artifactObj);
    for (let i = 0; i < artifactKeys.length; i++) {
      const key = artifactKeys[i];
      artifactValues[key] = artifactObj[key];
    }
    // Store the updated value
    window.localStorage.setItem(camelCasedArtifactName, JSON.stringify(artifactValues));

    // Update total artifact damage
    rs.totalArtifactDamage = calcTotalArtifactDamage(rs.artifactList, ARTIFACT_DATA)
      * rs.artifactList.heavenlySword.currentEffect;

    window.localStorage.setItem('totalArtifactDamage', rs.totalArtifactDamage);
    return rs;
  },
  UPDATE_EXPONENT: (returnState, action) => {
    const rs = returnState;

    rs.exponent = action.exponent;
    return rs;
  },
};

// Export the reducer
export default (state = initialState, action) => {
  // Handle unknown action types
  if (!actionHandlers[action.type]) return state;

  // Handle the action dispatched to the reducer, return the updated state
  return actionHandlers[action.type](
    extend(true, {}, state),
    action,
    state,
  );
};
