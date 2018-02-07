import { handleAction, createAction } from 'redux-actions';
import { setReducer } from './base';

export const setQuery = createAction('SET_QUERY');
export default handleAction(setQuery, setReducer, {});