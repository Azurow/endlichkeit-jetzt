import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import Link from "next/link"
import Image from 'next/image'
import styles from '../styles/LetzteHilfe.module.scss'

import PageContainer from '../components/PageContainer'
import Button from '../components/Button'
import Carousel from '../components/Carousel'

export default function LetzteHilfe() {
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

    const [selectedOption, setOption] = useState(0);

  return (
    <PageContainer>
        <Head>
            <title>Letzte Hilfe | Endlichkeit Jetzt</title>
            <meta name="description" content="Angebote im Thema Letzte Hilfe von Endlichkeit Jetzt"></meta>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
            <meta charSet="UTF-8"></meta>
        </Head>

        <h2 id="title">Letzte Hilfe - Am Ende wissen, wie es geht </h2>

        <nav onChange={e => setOption(e.target.value)}>
            <label className={styles.nav_button}>
                <input type="radio" name="age-select" value={0} defaultChecked />
                <h3>für Erwachsene</h3>
            </label>
            <label className={styles.nav_button}>
                <input type="radio" name="age-select" value={1} />
                <h3>für Kinder und Jugendliche</h3>
            </label>
        </nav>

        
        {/*Erwachsene */}
        <div className={selectedOption == 1 ? styles.hidden : styles.shown}>
            <section className={styles.description}>
                <div className={styles.description_text}>
                    <p>Der Abschied vom Leben ist der schwerste, den die Lebensreise für einen Menschen bereithält. Deshalb braucht es, wie auf allen schweren Wegen, jemanden, der die Hand reicht und stützt. </p>
                    <p>Wir möchten Grundwissen vermitteln und ermutigen, sich Sterbenden zuzuwenden. Denn Zuwendung ist das, was wir alle am Ende des Lebens am meisten brauchen. </p>
                    <p>Das Lebensende und Sterben unserer Angehörigen, Freunde und Nachbarn macht uns oft hilflos, deshalb bieten wir einen Kurs zur „Letzten Hilfe“ an. Unser Ziel ist es, Basiswissen, Orientierungen und einfache Handgriffe weiterzugeben.  </p>
                    <p>Im Kurs sprechen wir über die Normalität des Sterbens als Teil des Lebens, natürlich werden auch Patientenverfügung und Vorsorgevollmacht kurz angefügt. Wir thematisieren mögliche Leiden als Teil des Sterbeprozesses und wie wir sie lindern können. Zudem gehen wir darauf ein, wie man mit den schwereren, aber auch den leichteren Stunden umgeht. Wir überlegen abschließend gemeinsam, wie man Abschied nehmen kann, und besprechen unsere Möglichkeiten und Grenzen. </p>
                </div>
            
                <aside className={styles.description_aside}>
                    <div className={styles.image}>
                        <Image
                        alt='Post-Its'
                        src={"/images/letzte-hilfe/text-1.png"}
                        layout="fill"
                        objectFit='cover'
                        quality={100}
                        />
                    </div>
                    {/* <div className={styles.image}>
                        <Image
                            alt='Textmarker'
                            src={"/images/letzte-hilfe/text-2.JPG"}
                            layout="fill"
                            objectFit='cover'
                            quality={100}
                            />
                    </div> */}
                </aside>
            </section>
            <section className={styles.contents}>
            
                <Carousel/>
                <div className={styles.contents_text}>
                    <h2>Kursinhalte</h2>
                    <p>Wie auch bei der Ersten Hilfe soll die Letzte Hilfe Wissen zur humanen Hilfe und Mitmenschlichkeit vermitteln. Die vier Unterrichtsstunden stehen jeweils für eines der vier Module:</p>
                    <ul className={styles.contents_list}>
                        <li>Sterben ist ein Teil des Lebens</li>
                        <li>Vorsorgen und Entscheiden</li>
                        <li>Leiden lindern</li>
                        <li>Abschied nehmen</li>
                    </ul>
                    <Button text={"Anfragen"} />
                    </div>
            </section>
        </div>

        {/*Kinder */}
        <div className={selectedOption == 0 ? styles.hidden : styles.shown}>
            <section className={styles.description}>
                <div className={styles.description_text}>
                    <p>Wir bieten einen Basis-Kurs zur Letzten Hilfe für Kinder und Jugendliche von 8 - 16 Jahren an, in dem Kinder und Jugendliche lernen, was sie für ihre Mitmenschen am Ende des Lebens tun können und wie sie andere Menschen in Trauer verstehen lernen. </p>
                    <p>Wissen um Letzte Hilfe und Umsorgung von schwerkranken und sterbenden Menschen muss auch für Kinder und Jugendliche, zum Allgemeinwissen werden. Häufig fällt es uns besonders schwer mit Personen umzugehen, die hilflos sind, weil jemand lebensbedrohlich erkrankt ist. So sollten betroffene junge Menschen gut vorbereitet sein ihre Mitmenschen in so einem wichtigen Lebensabschnitt begleiten zu können.</p>
                    <p>Wir möchten Grundwissen an die Hand geben und ermutigen, sich Sterbenden und deren Angehörigen zuzuwenden. Denn Zuwendung ist das, was wir alle am Ende des Lebens am meisten brauchen.</p>
                    <ul>
                        <li>
                            <p>richtet sich an Kinder und Jugendliche, die sich über die Themen rund um das Sterben, Tod und Palliativversorgung informieren wollen</p>
                        </li>
                        <li>
                            <p>ist ein wunderbares Bildungskonzept für jegliche Bildungseinrichtungen und kann in der Schule, im Konfirmandenunterricht, in Vereinen oder zu anderen Anlässen gegeben werden.</p>
                        </li>
                        <li>
                            <p>schafft Grundlagen und hilft mit, die allgemeine ambulante Palliativversorgung zu verbessern</p>
                        </li>
                    </ul>
                </div>
            
                <aside className={styles.description_aside}>
                    <div className={styles.image}>
                        <Link href="https://www.letztehilfe.info">
                            <Image
                                alt='Post-Its'
                                src={"/images/letzte-hilfe/text-1.png"}
                                layout="fill"
                                objectFit='cover'
                                quality={100}
                                />
                        </Link>
                        
                    </div>
                </aside>
            </section>
            <section className={styles.contents}>
            
                <Carousel/>
                <div className={styles.contents_text}>
                    <h2>Kursinhalte</h2>
                    <p>Im Kurs sprechen wir nicht nur über die Normalität des Sterbens als Teil des Lebens, sondern erarbeiten viele Grundsätze interaktiv und spielerisch. Natürlich werden auch Themen wie Patientenverfügung und Vorsorgevollmacht kurz besprochen. Wir thematisieren mögliche Beschwerden die Teil des Sterbeprozesses sein können und wie wir bei der Linderung helfen können. Wir überlegen abschließend gemeinsam, wie man Abschied nehmen kann und besprechen unsere Möglichkeiten und Grenzen, ebenso Rituale, die eine schöne Erinnerung aufbauen.</p>
                    <ul className={styles.contents_list}>
                        <li>Sterben ist ein Teil des Lebens</li>
                        <li>Vorsorgen und Entscheiden</li>
                        <li>Leiden lindern</li>
                        <li>Abschied nehmen</li>
                    </ul>
                    <Button text={"Anfragen"} />
                    </div>
            </section>
        </div>

        
    </PageContainer>
  )
}
