// express.js
import path from 'path'
import http from 'http'
import express from 'express'
import http_proxy from 'http-proxy'

// react-router
import routes from './routes.js'

// Redux
import store from './redux/store.js'

// The server code must export a function
// (`parameters` may contain some miscellaneous library-specific stuff)
export default function(parameters)
{
	console.log('parameters: ');
	console.log(parameters.chunks());
	// Create HTTP server
	const app = new express()
	const server = new http.Server(app)

	// Serve static files
	// app.use(express.static(path.join(__dirname, 'dist/assets')))

	// React application rendering
	app.use((req, res) =>
	{
		console.log('heeeere');
		// Match current URL to the corresponding React page
		// (can use `react-router`, `redux-router`, `react-router-redux`, etc)
		react_router_match_url(routes, req.originalUrl).then((error, result) =>
		{
			if (error)
			{
				res.status(500)
				return res.send('Server error')
			}

			// Render React page

			const page = redux.provide(result, store)

			res.status(200)
			res.send('<!doctype html>' + '\n' + ReactDOM.renderToString(<Html>{page}</Html>))
		})
	})

	// Start the HTTP server
	server.listen(3000, (err) => {
		if (err) console.error(err);
		console.info('on port 3000');
	})
}