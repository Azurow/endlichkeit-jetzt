import React from 'react'
import PageContainer from '../components/PageContainer'
import styles from "../styles/Prices.module.scss"
import { useEffect } from 'react'

export default function prices() {

    useEffect(() =>
    {
        if(window.innerWidth > 576)
        {
            window.scrollTo({
                top: 1000,
                behavior: "smooth",
            });
        }
    }, [])

  return (
    <PageContainer>
        <h2>Preiseliste</h2>
        <main className={styles.gridContainer}>
            <ul className={styles.grid}>
                <li>
                    <div className={styles.offerContainer}>
                        <h3>Trauerbegleitung</h3>
                        <h4>Einzelgespräch</h4>
                        <ul className={styles.offerList}>
                            <li>
                                <p className={styles.offer}>60 Min</p> <div className={styles.price}><h4 >80€</h4></div>
                            </li>
                            <li>
                                <p className={styles.offer}>90 Min</p> <div className={styles.price}><h4>120€</h4></div>
                            </li>
                        </ul>
                        <h4>+ Seelenmassage</h4>
                        <ul className={styles.offerList}>
                            <li>
                                <p className={styles.offer}>60 Min</p> <div className={styles.price}><h4>80€</h4></div>
                            </li>
                        </ul>
                    </div>
                </li>
                <li>
                    <div className={styles.offerContainer}>
                        <h3>Trauercafé</h3>
                        <h4></h4>
                        <ul className={styles.offerList}>
                            <li>
                                <p className={styles.offer}>Ohne Verzehr</p> <div className={styles.price}><h4>15€</h4></div>
                            </li>
                        </ul>
                    </div>
                </li>
                <li>
                    <div className={styles.offerContainer}>
                        <h3>Letzte Hilfe Kurse</h3>
                        <h4></h4>
                        <ul className={styles.offerList}>
                            <li>
                                <p className={styles.offer}>4x 45 Min</p> <div className={styles.price}><h4>20€</h4></div> 
                            </li>
                        </ul>
                    </div>
                </li>
                <li>
                    <div className={styles.offerContainer}>
                        <h3>Preise nach Absprache, Wünschen und Aufwand für folgende Angebote: <br /><br /></h3>
                        <ul className={styles.offerList}>
                            <li>
                                <p className={styles.offer}>Beerdigungsbegleitung für Kinder</p>
                            </li>
                            <li>
                                <p className={styles.offer}>Sterbebegleitung</p>
                            </li>
                            <li>
                                <p className={styles.offer}>persönliche Begleitung über den Tod hinaus (z.B. Beerdigungsplanung) </p>
                            </li>
                        </ul>
                    </div>
                </li>
                
            </ul>
        </main>
    </PageContainer>
  )
}
