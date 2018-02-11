/* eslint-disable no-undef */
import extend from 'extend';
import { DEFAULT } from './../../utils';

// Set initial application state
const initialState = {
  buildType: window.localStorage.getItem('buildType') || DEFAULT,
  heroDamageType: window.localStorage.getItem('heroDamageType') || DEFAULT,
  heroType: window.localStorage.getItem('heroType') || DEFAULT,
  playstyle: window.localStorage.getItem('playstyle') || DEFAULT,
};

// Handle actions dispatched to the reducer
// Each value is a function
const actionHandlers = {
  SET_BUILD: (returnState, action) => {
    const rs = returnState;
    rs.buildType = action.buildType;
    window.localStorage.setItem('buildType', action.buildType);
    return rs;
  },
  SET_HERO_DAMAGE_TYPE: (returnState, action) => {
    const rs = returnState;
    rs.heroDamageType = action.heroDamageType;
    window.localStorage.setItem('heroDamageType', action.heroDamageType);
    return rs;
  },
  SET_HERO_TYPE: (returnState, action) => {
    const rs = returnState;
    rs.heroType = action.heroType;
    window.localStorage.setItem('heroType', action.heroType);
    return rs;
  },
  SET_PLAYSTYLE: (returnState, action) => {
    const rs = returnState;
    rs.playstyle = action.playstyle;
    window.localStorage.setItem('playstyle', action.playstyle);
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
