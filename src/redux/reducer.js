import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux/lib/reducer';
import form from 'redux-form/lib/reducer';

import query from './query';

export default combineReducers({
  query,
});