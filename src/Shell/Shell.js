import React from 'react'

import { Welcome } from '../Welcome/Welcome'
import styles from './Shell.css'

export default class Shell extends React.Component {
  
  render () {
  console.log('in shell render!');
  return (
    <div>
      <header className={styles.header}>Theme Pattern Example</header>
      <div className={styles.body}>
      <h1>yayyyy!</h1>
        </div>
    </div>
  )
}
}
