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
          <Image src={'/images/utils/logo.png'}
            width={268.5}
            height={400}
            quality={100}
            priority={true}
          />
        
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
