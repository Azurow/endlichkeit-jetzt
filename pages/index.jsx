import Image from 'next/image'
import Head from 'next/head'
import News from '../components/News'
import PageContainer from '../components/PageContainer'
import PopUp from '../components/PopUp'
import Services from '../components/Services'
import styles from '../styles/Home.module.scss'
import Grid from '../components/Grid'
import { useEffect } from 'react'

export default function Home() {


  return(
    <PageContainer>
      <Head>
            <title>Endlichkeit Jetzt</title>
            <meta name="description" content="Zentrum für Sterbe-, Tod- und Trauerbegleitungen."></meta>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
            <meta charSet="UTF-8"></meta>
      </Head>

      <section className={styles.about}>
        <main className={styles.main}>
          <h2>Wir sind Endlichkeit.</h2>
          <p>Sterben und Tod sind nach wie vor Tabu-Themen. Wenn die Extremsituation eintritt, ist niemand darauf vorbereitet – und das überfordert auf allen Ebenen. <br /> Wie Abschied nehmen? Wie damit umgehen? Wie geht es nun weiter? 

Der Verlust eines Menschen begleitet uns oft unser ganzes weiteres Leben. In unserer schnelllebigen Zeit müssen wir wieder in den Alltag finden - und es bleibt häufig kein Raum für die Trauer. <br /> 

Wir von endlichkeit.jetzt unterstützen Sie. In unserem Zentrum sind die Themen Sterben, Tod und Trauer eng miteinander verbunden. Wir begleiten Erwachsene, Jugendliche und Kinder ganz nach ihren speziellen Bedürfnissen.
          </p>
          

          <div className={styles.image}>
            <Image
            alt='Bild des Endlichkeits-Teams'
            src={'/images/start/text.jpg'}
            layout='fill'
            objectFit='cover'
            />
          </div>
          <p>Das Team von endlichkeit.jetzt besteht aus Trauerbegleiter:innen, systemischen Coaches, pädagogischen Mitarbeiter:innen, Bestattungshelfer:innen und Physiotherapeut:innen. <br />

Unser umfassendes Spektrum an Angeboten beinhaltet Sterbebegleitung, palliative Physiotherapie, Trauerarbeit für Einzelpersonen und Gruppen, spezielle Angebote der Trauerbegleitung für Kinder und Heranwachsende, Letzte-Hilfe-Kurse für Erwachsene und Kinder, Akutbegleitung für Schulen und pädagogische Einrichtungen und Beerdigungsbegleitung. <br /> 

Wir verstehen uns als Anlaufstelle für alle. Sprechen Sie mit uns – wir sind für Sie da! 
          </p>
        </main>

        <PopUp/>

        <News/>
      </section>

      <Grid />
      
      <Services/>
    </PageContainer>)
}
