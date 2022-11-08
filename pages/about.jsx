import React from 'react'
import Image from 'next/image';
import Head from 'next/head';
import PageContainer from "../components/PageContainer";
import styles from "../styles/About.module.scss"

export default function about() {
  return (
    <PageContainer>
        <Head>
            <title>Über uns | Endlichkeit Jetzt</title>
            <meta name="description" content="Über das Team von Endlichkeit Jetzt"></meta>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
            <meta charSet="UTF-8"></meta>
      </Head>
      <h2>Über Uns</h2>
        <main>
            <ul className={styles.personList}>
                <li className={styles.person}>
                    <div className={styles.image}>
                        <Image alt='Claudia Henrich' src={'/images/ueber-uns/claudia.jpg'} width={225} height={300}/>
                    </div>
                    <div className={styles.person_description}>
                        <h2>Claudia Henrich</h2>
                        <p>„Durch Krisen muss man nicht allein gehen.“
                        Das Wohlergehen eines jeden Menschen ist mir wichtig und ans Herz gewachsen. Durch die vielen Patienten in all den Jahren ist mir aufgefallen, wie sehr Menschen, die trauern oder einen sterbenden Menschen betreuen, mit ihren Gefühlen, Gedanken und Sorgen allein gelassen werden.
                        Ich bin Physiotherapeutin, Sterbebegleiterin und Trauerberaterin und möchte mein ganzes Wissen und meine Erfahrung in die körperliche und seelische Gesundheit einbringen. Diese Ganzheitlichkeit in Verbindung mit palliativer Physiotherapie ist für mich ein besonderes Anliegen.
                        </p>
                    </div>
                </li>

                <Divider/>

                <li className={styles.person}>
                    <div className={styles.image}>
                        <Image alt='Iris Rose' src={'/images/ueber-uns/iris.jpg'} width={225} height={300}/>
                    </div>
                    <div className={styles.person_description}>
                        <h2>Iris Rose</h2>
                        <p>Ich bin Physiotherapeutin, Coach- und Businesscoach, Achtsamkeits-Trainerin und Trauerbegleiterin. 
                        Mein Lebensmotto ist Menschen zu begleiten, ihnen Halt und Energie zu geben, um sie wieder in ihre Leichtigkeit zu bringen.
                        Eine weitere Motivation, hier im Zentrum für Sterben, Tod und Trauer begleitend dabei zu sein, sind meine selbst gemachten und erlernten Erfahrungen mit diesem Thema.
                        Trauer fängt nicht erst mit dem Tod an und ich möchte für Sie alle, ob jung oder alt, unterstützend da sein.
                        </p>
                    </div>
                </li>

                <Divider/>

                <li className={styles.person}>
                    <div className={styles.image}>
                        <Image alt='Annika' src={'/images/ueber-uns/annika.jpg'} width={225} height={300}/>
                    </div>
                    <div className={styles.person_description}>
                        <h2>Annika Reuß</h2>
                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                        </p>
                    </div>
                </li>
            </ul>
        </main>
    </PageContainer>
  )
}


export function Divider() {
  return (
    <div className={styles.divider}>
      
    </div>
  )
}

