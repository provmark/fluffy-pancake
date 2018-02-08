import React from 'react'
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
