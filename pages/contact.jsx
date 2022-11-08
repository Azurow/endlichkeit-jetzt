import Image from 'next/image'
import React from 'react'
import styles from '../styles/Contact.module.scss'
import PageContainer from '../components/PageContainer'

export default function contact() {
  return (
    <PageContainer>
        <h2>Kontakt</h2>
        <main className={styles.container}>
            <div className={styles.image}>
                <Image src={'/images/contact/contact.jpg'} layout='fill' objectFit='cover'/>
            </div>

            <div className={styles.infos}>
                <p>+069 40586207</p>
                <p>Hallo@endlichkeit.jetzt</p>
                <p>Spessartstraße 12</p>
                <p>60385 Frankfurt am Main</p>
            </div>
            
            
        </main>
    </PageContainer>
  )
}
