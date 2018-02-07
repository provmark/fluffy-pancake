/* eslint global-require: off */
/* eslint no-undef: off */

import { createStore as _createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import routerMiddleware from 'react-router-redux/lib/middleware';

export default function createStore(history, data) {
  const middleware = [thunk, routerMiddleware(history)];

  let finalCreateStore;
  if (__DEVELOPMENT__ && __CLIENT__ && __DEVTOOLS__) {
    // const { persistState } = require('redux-devtools')

    const devMiddleware = [applyMiddleware(...middleware)]; // autoRehydrate() ]
    if (typeof window !== 'undefined' && window.devToolsExtension) {
      devMiddleware.push(window.devToolsExtension());
    }
    // devMiddleware.push(persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/)))

    finalCreateStore = compose(...devMiddleware)(_createStore);
  } else {
    finalCreateStore = compose(applyMiddleware(...middleware)/* , autoRehydrate() */)(_createStore);
  }

  const reducer = require('./reducer');
  const store = finalCreateStore(reducer, data);

  /*if (__DEVELOPMENT__ && module.hot) {
    module.hot.accept('./modules/reducer', () => {
      store.replaceReducer(require('./modules/reducer'));
    });
  }*/

  return store;
}