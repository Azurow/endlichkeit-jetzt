import React from 'react'
import PageContainer from '../components/PageContainer'
import styles from "../styles/Prices.module.scss"

export default function prices() {
  return (
    <PageContainer>
        <h2>Preiseliste</h2>
        <main className={styles.gridContainer}>
            <ul className={styles.grid}>
                <li>
                    <div>
                        <h3>Trauerbegleitung</h3>
                        <h4>Einzelgespräch</h4>
                        <ul className={styles.offerList}>
                            <li>
                                <p className={styles.offer}>60 Min</p> <h4 className={styles.price}>80€</h4>
                            </li>
                            <li>
                                <p className={styles.offer}>90 Min</p> <h4 className={styles.price}>120€</h4>
                            </li>
                        </ul>
                        <h4>+ Seelenmassage</h4>
                        <ul className={styles.offerList}>
                            <li>
                                <p className={styles.offer}>60 Min</p> <h4 className={styles.price}>80€</h4>
                            </li>
                        </ul>
                    </div>
                </li>
                <li>
                    <div>
                        <h3>Trauercafé</h3>
                        <h4>Trauercafé</h4>
                        <ul className={styles.offerList}>
                            <li>
                                <p className={styles.offer}>Ohne Verzehrer</p> <h4 className={styles.price}>15€</h4>
                            </li>
                        </ul>
                    </div>
                </li>
            </ul>
        </main>
    </PageContainer>
  )
}
