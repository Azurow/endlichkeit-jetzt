import React, { useState } from 'react'
import Link from 'next/link'
import styles from '../styles/Navbar.module.scss'
import Image from "next/image"

export default function Navbar() {

  const [showMenu, setShowMenu] = useState(false)

  function toggleMenu() {
    setShowMenu(!showMenu);
  }

  return (
    <>
      <nav className={styles.nav}>
        <Link href={'/'}><a className={styles.link}>Start</a></Link>
        <Divider />
        <Link href={'/#service'}><a className={styles.link}>Unsere Angebote</a></Link>
        <Divider />
        
        <Link href={'/letzte-hilfe'}><a className={styles.link}>Letzte Hilfe</a></Link>
        <Divider />
        <Link href={'/about'}><a className={styles.link}>Über Uns</a></Link>
        <Divider />
        <Link href={'/prices'}><a className={styles.link}>Preise</a></Link>
        <Divider />
        <Link href={'/kontakt'}><a className={styles.link}>Kontakt</a></Link>
      </nav>
      <nav className={styles.nav_burger}>
        <button onClick={toggleMenu} className={styles.burger_button}>
          {showMenu ? 
          <Image className={styles.burger_button_image}
            src={'/images/utils/burger-menu-close.png'}
            width="25px"
            height="25px"
          />
          :
          <Image className={styles.burger_button_image}
            src={'/images/utils/burger-menu.png'}
            width="25px"
            height="25px"
          />
          }
        </button>
      </nav>
      <nav className={`${styles.nav_burger_container} ${showMenu ? styles.nav_burger_container_show : ""}`}>
        <Link href={'/'}><a className={styles.link}>Start</a></Link>
        <Link href={'/letzte-hilfe'}><a className={styles.link}>Letzte Hilfe</a></Link>
        <Link href={'/team'}><a className={styles.link}>Über Uns</a></Link>
        <Link href={'/kontakt'}><a className={styles.link}>Kontakt</a></Link>
      </nav>
    </>
  )
}

export function Divider() {
  return (
    <div className={styles.divider}>

    </div>
  )
}

