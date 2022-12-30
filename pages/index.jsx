import Image from 'next/image'
import Head from 'next/head'
import News from '../components/News'
import PageContainer from '../components/PageContainer'
import PopUp from '../components/PopUp'
import Services from '../components/Services'
import styles from '../styles/Home.module.scss'
import Grid from '../components/Grid'
import { firestore } from "../utils/firebase"
import { collection, getDocs, orderBy, query } from "firebase/firestore"

export async function getServerSideProps() {
    const postsRef = collection(firestore, "posts")
    const postQuery = query(postsRef, orderBy("date", "asc")); //limit(3) also possible
    let posts = [];

    await getDocs(postQuery, postQuery)
        .then((snapshot) => {
            snapshot.docs.forEach((doc) => {
                posts.push({ ...doc.data(), date: doc.data().date.toDate().toLocaleDateString("de-DE", { weekday: 'long', month: 'long', day: 'numeric', hour: "numeric", minute: "numeric" }), id: doc.id });
            })
        })
        .catch(err => {
            console.log(err.message);
        });

    return {props: {posts}};
}


export default function Home(posts) {

    return (
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
                        <br /><br />
                        Der Verlust eines Menschen begleitet uns oft unser ganzes weiteres Leben. In unserer schnelllebigen Zeit müssen wir wieder in den Alltag finden - und es bleibt häufig kein Raum für die Trauer. <br />
                        <br />
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
                    <p>Das Team von endlichkeit.jetzt besteht aus Trauerbegleiterinnen, systemischen Coaches, pädagogischen Mitarbeiterinnen, Bestattungshelferinnen und Physiotherapeutinnen. <br />
                        <br />
                        Unser umfassendes Spektrum an Angeboten beinhaltet Sterbebegleitung, palliative Physiotherapie, Trauerarbeit für Einzelpersonen und Gruppen, spezielle Angebote der Trauerbegleitung für Kinder und Heranwachsende, Letzte-Hilfe-Kurse für Erwachsene und Kinder, Akutbegleitung für Schulen und pädagogische Einrichtungen und Beerdigungsbegleitung. <br />
                        <br />

                    </p>
                    <p className={styles.bold}>Wir verstehen uns als Anlaufstelle für alle. <br /> Sprechen Sie mit uns – wir sind für Sie da! </p>
                </main>

                <PopUp />

                <News posts={posts.posts} />
            </section>

            <Grid />

            <Services />
        </PageContainer>)
}
