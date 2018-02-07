import React from 'react'

import { Welcome } from '../Welcome/Welcome'
import styles from './Shell.css'

export default function Shell() {
  return (
    <div>
      <header className={styles.header}>Theme Pattern Example</header>
      <div className={styles.body}>
      <Welcome></Welcome>
        </div>
    </div>
  )
}
