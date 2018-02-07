/* eslint no-underscore-dangle: off */

/**
 * THIS IS THE ENTRY POINT FOR THE CLIENT, JUST LIKE server.js IS THE ENTRY POINT FOR THE SERVER.
 */
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import ConnectedRouter from 'react-router-redux';
import createStore from './redux/store';
import App from './App.js';

const store = createStore(browserHistory, window.__data);

window.addEventListener('load', () => {
  FastClick.attach(document.body);
});

const render = (renderRoutes, renderStore) => {
  ReactDOM.hydrate(
      <Provider key="provider">
        <ConnectedRouter>
          <App></App>
        </ConnectedRouter>
      </Provider>
  );
};

render(routes, store);

if (process.env.NODE_ENV !== 'production') {
  window.React = React; // enable debugger

  if (
    !dest ||
      !dest.firstChild ||
      !dest.firstChild.attributes ||
      !dest.firstChild.attributes['data-react-checksum']
  ) {
    // eslint-disable-next-line no-console
    console.error('Server-side React render was discarded. ' +
        'Make sure that your initial render does not contain any client-side code.');
  }
}