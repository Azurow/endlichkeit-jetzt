import Image from 'next/image'
import News from '../components/News'
import PageContainer from '../components/PageContainer'
import PopUp from '../components/PopUp'
import Services from '../components/Services'
import styles from '../styles/Home.module.scss'

export default function Home() {

  return(
    <PageContainer>
      <section className={styles.about}>
        <main className={styles.main}>
          <h2>Wir sind Endlichkeit.</h2>
          <p>Sterben und Tod sind nach wie vor ein Tabu-Thema. Wenn die
      Extremsituation eintritt, ist niemand darauf vorbereitet – und das
      überfordert auf allen Ebenen. Wie Abschied nehmen? Wie damit
      umgehen? Wir begleiten und unterstützen Kinder, Jugendliche und Erwachsene entsprechend ihrer Bedürfnisse.
          </p>
          

          <div className={styles.image}>
            <Image
            src={'/images/start/text.jpg'}
            width="1600px"
            height="920px"
            />
          </div>
          <p>Das umfassende Spektrum unserer Angebote reicht von
      spezieller palliativer Physiotherapie über Trauerarbeit, formale
      Unterstützung und Kursen für Kinder, Schüler, Pädagogen bis
      hin zu „Letzte Hilfe“-Seminaren.<br></br><br></br>
      In unserem Zentrum sind Sterben, Tod und Trauer miteinander
      verbunden – wir verstehen uns als Anlaufstelle für alle
          </p>
        </main>

        <PopUp/>

        <News/>
      </section>
      
      <Services/>
    </PageContainer>)
}
