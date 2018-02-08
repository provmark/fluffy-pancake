import React from 'react'

import Welcome from '../Welcome/Welcome'
import styles from './Shell.css'

// todo is there a better way to do this...?
import baseStyles from '../styles/styles.css'

export default function Shell() {
  return (
      <div>
        <header className={styles.header}>Theme Pattern Example</header>
        <div className={styles.body}>
          <Welcome></ Welcome>
        </div>
      </div>
  )
}