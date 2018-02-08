/* eslint global-require: off */
/* eslint no-undef: off */

import { createStore } from 'redux';

function storeAction(state = [], action) {
  console.log('yay stores!');
}


export default function createReduxStore() {
  let store = createStore(storeAction, ['Use Redux']);
  return store;  
}