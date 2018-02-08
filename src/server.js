// express.js
import path from 'path'
import http from 'http'
import express from 'express'
import http_proxy from 'http-proxy'
import qs from 'qs'

// react
import React from 'react';
import StaticRouter from 'react-router/StaticRouter';
import Provider from 'react-redux/lib/components/Provider';
import ReactDOM from 'react-dom/server';

// import routes from './routes.js'
import App from './App.js'
import createReduxStore from './redux/store.js'
import Html from './Html.js'

// The server code must export a function
// (`parameters` may contain some miscellaneous library-specific stuff)
export default function(parameters)
{
	console.log('parameters: ');
	console.log(parameters.chunks());
	// Create HTTP server
	const app = new express()
	const server = new http.Server(app)
	app.use('/build', express.static('build'));

	// Serve static files
	// app.use(express.static(path.join(__dirname, 'dist/assets')))

	// React application rendering
	app.use((req, res) =>
	{
		console.log('heeeere');
		console.log(req.url);
		const query = qs.parse(req.query);
		console.log('query: ');
		console.log(query);

		// Match current URL to the corresponding React page
		// (can use `react-router`, `redux-router`, `react-router-redux`, etc)
		let component = (
			<Provider store={createReduxStore()} key="provider">
			<StaticRouter location={req.url} context={{}}>
			  <App />
			</StaticRouter>
		  </Provider>
		);
		console.log('component');
		console.log(component);
		
		let chunks = require('../build/light/webpack-chunks.json');
		if (query.brand && query.brand == 'dark') {
			chunks = require('../build/dark/webpack-chunks.json');
		}
		const props = {
			styles: chunks.styles,
			js: chunks.javascript,
			component: component
		}
		console.log('about to send!');
		res.send(`<!doctype html>\n${ReactDOM.renderToString(<Html {...props} />)}`);
	})

	// Start the HTTP server
	server.listen(3000, (err) => {
		if (err) console.error(err);
		console.info('on port 3000');
	})
}