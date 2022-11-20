import React from 'react'
import styles from '../styles/Button.module.scss'

export default function Button({ text }) {
  return (
    <a href="/contact"><input type="button" value={text} className={styles.button}></input></a>
    
  )
}
