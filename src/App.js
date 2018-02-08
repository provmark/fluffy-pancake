import React from 'react'
import Switch from 'react-router-dom/Switch'
import Route from 'react-router-dom/Route'

import Shell from './Shell/Shell.js'

export default class App extends React.Component {
  render() {
    return (
      <div>
      <Switch>
        <Route path="/" render={() => <Shell />} />
      </Switch>
    </div>
    )
  }
}
