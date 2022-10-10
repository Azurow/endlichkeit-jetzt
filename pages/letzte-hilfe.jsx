import React from 'react'
import Image from 'next/image'
import styles from '../styles/LetzteHilfe.module.scss'

import PageContainer from '../components/PageContainer'
import Button from '../components/Button'
import Carousel from '../components/Carousel'

export default function LetzteHilfe() {
  return (
    <PageContainer>
        <h2>Letzte Hilfe - Am Ende wissen, wie es geht </h2>

        <section className={styles.description}>
            <div>
                <p>Der Abschied vom Leben ist der schwerste, den die Lebensreise für einen Menschen bereithält. Deshalb braucht es, wie auf allen schweren Wegen, jemanden, der die Hand reicht.</p>
                <p>Wir möchten Grundwissen vermitteln und ermutigen, sich Sterbenden zuzuwenden. Denn Zuwendung ist das, was wir alle am Ende des Lebens am meisten brauchen.</p>
                <p>Das Lebensende und Sterben unserer Angehörigen, Freunde und Nachbarn macht uns oft hilflos, deshalb bieten wir einen Kurs zur „Letzten Hilfe“ an. Unser Ziel ist es, Basiswissen, Orientierungen und einfache Handgriffe weiterzugeben. </p>
                <p>Im Kurs sprechen wir über die Normalität des Sterbens als Teil des Lebens, natürlich werden auch Patientenverfügung und Vorsorgevollmacht kurz angefügt. Wir thematisieren mögliche Leiden als Teil des Sterbeprozesses und wie wir lindern können. Zudem gehen wir darauf ein, wie man mit den schwereren, aber auch den leichteren Stunden umgeht. Wir überlegen abschließend gemeinsam, wie man Abschied nehmen kann und besprechen unsere Möglichkeiten und Grenzen.</p>
            </div>
            
            <aside className={styles.description_aside}>
                <div className={styles.image}>
                    <Image
                    src={"/images/letzte-hilfe/text-1.JPG"}
                    layout="fill"
                    objectFit='cover'
                    quality={100}
                    />
                </div>
                <div className={styles.image}>
                    <Image
                        src={"/images/letzte-hilfe/text-2.JPG"}
                        layout="fill"
                        objectFit='cover'
                        quality={100}
                        />                    
                </div>
            </aside>
        </section>

        <section className={styles.contents}>
            
            <Carousel/>

            <div>
                <h2>Kursinhalte</h2>
                <p>Wie auch bei der Ersten Hilfe soll die Letzte Hilfe Wissen zur humanen Hilfe und Mitmenschlichkeit vermitteln. Die vier Unterrichtsstunden stehen jeweils für eines der vier Module:</p>
                <ul className={styles.contents_list}>
                    <li>Sterben ist ein Teil des Lebens</li>
                    <li>Vorsorgen und Entscheiden</li>
                    <li>Leiden lindern</li>
                    <li>Abschied nehmen</li>
                </ul>
                <Button text={"Buchen"} />
                </div>
        </section>
    </PageContainer>
  )
}
