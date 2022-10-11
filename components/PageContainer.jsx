import React from 'react'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import Footer from './Footer'
import styles from '../styles/PageContainer.module.scss'
import HeroTitle from './HeroTitle'

export default function PageContainer({ children }) {
  return (
    <>
      <header className={styles.header}>
          <div className={styles.image}>
            <Image src={'/images/utils/logo.png'}
              alt='Abstraktes Hintergrundbild'
              layout='fill'
              objectFit='cover'
              priority={true}
            />
          </div>

          
        
        <HeroTitle/>
      </header>

      <Navbar />

      <div className={styles.container}>
        {children}
      </div>

      <Footer />

    </>
  )
}
