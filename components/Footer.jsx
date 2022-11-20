import Link from 'next/link'
import React, { useState } from 'react'
import styles from '../styles/Footer.module.scss'

export default function Footer() {

  const [showMap, setShowMap] = useState(false);

  const handleClick = () => setShowMap(!showMap);

  return (
    <footer className={styles.footer}>  
      <div className={styles.footer_top}>

        <div className={styles.mapContainer}>
          {showMap ? 
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2557.913299548724!2d8.70620995162741!3d50.12534431851632!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bd0f3e3e2bb01b%3A0x1cc1b3a2d7a2b0dc!2sEndlichkeit.jetzt%20GBR!5e0!3m2!1sde!2sde!4v1668977306428!5m2!1sde!2sde" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          :
          <>
            <button className={styles.button} onClick={() => handleClick()}>Karte anzeigen</button>
            <p className={styles.subtext}>Nach Aktivieren der Kartenansicht werden Daten an den jeweiligen Anbieter übermittelt. Weitere Informationen können der Datenschutzerklärung von Google entnommen werden.</p>
          </>
          }
          
        </div>
        <nav className={styles.adress}>
          <ul>
            <li>
              <p>endlichkeit.jetzt</p>
              <p>Zentrum für Sterben･Tod･Trauer</p>
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
          <Link href={"/legal"}><a href="" className={styles.link}>Impressum</a></Link>
          <Link href={"/legal"}><a href="" className={styles.link}>Datenschutzerklärung</a></Link>
        </div>
      </div>
    </footer>
  )
}
