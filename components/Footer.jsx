import Link from 'next/link'
import React from 'react'
import styles from '../styles/Footer.module.scss'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_top}>
        <div className={styles.mapContainer}>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2557.9134868548695!2d8.703919333261608!3d50.12534081364459!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bd0eecd66cc92f%3A0xc296724631f1abd6!2sSpessartstra%C3%9Fe%2012%2C%2060385%20Frankfurt%20am%20Main!5e0!3m2!1sde!2sde!4v1665171970707!5m2!1sde!2sde" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <nav className={styles.adress}>
          <ul>
            <li>
              <p>endlichkeit.jetzt</p>
            </li>
            <li>
              <p>Spessartstraße 12</p>
            </li>
            <li>
              <p>60385 Frankfurt am Main</p>
            </li>
            <li>
              <p>Tel 069 40586207</p>
            </li>
            <li>
              <p>info@endlichkeit.jetzt</p>
            </li>
            <li>
              <p>www.endlichkeit.jetzt</p>
            </li>
            <li>
              <p>Termin nach Vereinbarung</p>
            </li>
          </ul>
        </nav>
      </div>
      <div className={styles.footer_bottom}>
        <div className={styles.links}>
          <Link href={"/"}><a href="" className={styles.link}>Impressum</a></Link>
          <Link href={"/"}><a href="" className={styles.link}>Datenschutzerklärung</a></Link>
        </div>
      </div>
    </footer>
  )
}
