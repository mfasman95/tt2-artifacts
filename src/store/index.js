// Import core redux functionality
import { createStore, combineReducers } from 'redux';
import { snackbarReducer } from 'react-redux-snackbar';

// Import reducers
import main from './reducers/main.reducer';
import playstyle from './reducers/playstyle.reducer';
import artifacts from './reducers/artifacts.reducer';

// Export the store, made of all the reducers combined
export default createStore(combineReducers({
  main,
  playstyle,
  artifacts,
  snackbar: snackbarReducer,
}));
