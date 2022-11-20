import React from 'react'
import styles from '../styles/Button.module.scss'
import Link from 'next/link'

export default function Button({ text, subject}) {
  return (
    <Link href={{pathname: "/contact", query: subject}}><input type="button" value={text} className={styles.button}></input></Link>
    
  )
}
