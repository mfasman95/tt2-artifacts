/* eslint-disable no-undef */
import extend from 'extend';

const storedTheme = window.localStorage.getItem('theme');
const storedToggleGroup = window.localStorage.getItem('toggleGroup');

// Set initial application state
const initialState = {
  theme: storedTheme || 'default',
  toggleGroup: storedToggleGroup ? storedToggleGroup.split(',') : [],
};

const updateTheme = (theme) => {
  const themeStyle = document.getElementById('bootswatchTheme');

  if (themeStyle !== null) {
    document.head.removeChild(themeStyle);
  }

  const newStyle = document.createElement('link');
  newStyle.id = 'bootswatchTheme';
  newStyle.rel = 'stylesheet';
  newStyle.href = `./themes/bootstrap-${theme}.min.css`;
  document.head.appendChild(newStyle);

  window.localStorage.setItem('theme', theme);
};

if (initialState.theme !== 'default') {
  updateTheme(initialState.theme);
}

// Handle actions dispatched to the reducer
// Each value is a function
const actionHandlers = {
  SET_THEME: (returnState, action) => {
    const rs = returnState;

    updateTheme(action.theme);
    rs.theme = action.theme;
    return rs;
  },
  UPDATE_TOGGLE_GROUP: (returnState, action) => {
    const rs = returnState;

    window.localStorage.setItem('toggleGroup', action.toggleGroup);
    rs.toggleGroup = action.toggleGroup;
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
