import React from 'react'
import IndexRoute from 'react-router/lib/IndexRoute'
import { Router, Route } from 'react-router';
import { Shell } from './Shell/Shell'

export default (
  <Router>
    <Route path="/" component={Shell} />
  </Router>
)
