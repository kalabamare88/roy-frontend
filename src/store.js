import { combineReducers, createStore } from 'redux';

import { appReducer } from './reducers/appReducer';

const reducer = combineReducers({
  appControllers: appReducer
});
let initialState = {
  appControllers: {
    currentStep: 0,
    screenSize: undefined,
    currentColor: localStorage.getItem('colorMode') ? localStorage.getItem('colorMode') : '#03C9D7',
    currentMode: localStorage.getItem('themeMode') ? localStorage.getItem('themeMode') : 'Dark',
    themeSettings: false,
    activeMenu: true
  }
};
const store = createStore(reducer, initialState);

export default store;
