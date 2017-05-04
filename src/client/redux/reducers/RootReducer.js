import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import itemClick from './itemClick';
import itemClickGeometry from './itemClickGeometry';
import timeOfDay from './timeOfDay';

let RootReducer = combineReducers({
  itemClick,
  itemClickGeometry,
  timeOfDay,
  routing: routerReducer
});

export default RootReducer;
