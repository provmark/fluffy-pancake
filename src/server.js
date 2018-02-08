// express.js
import path from 'path'
import http from 'http'
import express from 'express'
import http_proxy from 'http-proxy'
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
	app.use('/dark', express.static('dark'));
	app.use('/dark', express.static('light'));

	// Serve static files
	// app.use(express.static(path.join(__dirname, 'dist/assets')))

	// React application rendering
	app.use((req, res) =>
	{
		console.log('heeeere');
		console.log(req.url);
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

		let lightWebpackChunks = require('../light/webpack-chunks.json');
		console.log(lightWebpackChunks);
		let darkWebpackChunks = require('../dark/webpack-chunks.json');
		const props = {
			styles: darkWebpackChunks.styles,
			js: darkWebpackChunks.javascript,
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