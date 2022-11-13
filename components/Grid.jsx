import React from 'react'
import Image from 'next/image'
import styles from '../styles/Grid.module.scss'


export default function Grid() {
    return (
        <section className={styles.grid}>
            <div className={`${styles.Picture1} ${styles.Picture}`}>
                <h2>Beerdigungsbegleitung</h2>
                <p>Akutbegleitung - Wir helfen zwischen dem Tod und der Beerdigung. Für alle: vom Kleinkind bis ins hohe Alter</p>
                <Image
                    alt='Bild des Endlichkeits-Teams'
                    src={'/images/start/grid-1.png'}
                    layout='fill'
                    objectFit='cover'
                />
            </div>
            <div className={`${styles.Picture2} ${styles.Picture}`}>
                <h2>Weg-laufen <br /> Natur und Bewegung - eine Kraftquelle</h2>
                <p>Wir treffen uns an einem vereinbarten Ort und laufen von dort aus los.</p>
                <Image
                    alt='Bild des Endlichkeits-Teams'
                    src={'/images/start/grid-2.png'}
                    layout='fill'
                    objectFit='cover'
                />
            </div>
            <div className={`${styles.Picture3} ${styles.Picture}`}>
                <h2>Trauercafé im Café Menthe</h2>
                <p>In einem geschützten Rahmen können Sie sich mit anderen Trauernden austauschen. Der Nachmittag wird mit Angeboten und Anregungen für den Alltag begleitet und bietet Inspirationen und Impulse, die Kraft für diese Extremsituation geben sollen.</p>
                <Image
                    alt='Bild des Endlichkeits-Teams'
                    src={'/images/start/grid-3.jpg'}
                    layout='fill'
                    objectFit='cover'
                />
            </div>
            <div className={`${styles.Picture4} ${styles.Picture}`} id="service">
                <h2 >Sterbebegleitung</h2>
                <p>Ein guter Abschied ist eine große Hilfe.</p>
                <Image
                    alt='Bild des Endlichkeits-Teams'
                    src={'/images/start/grid-4.jpg'}
                    layout='fill'
                    objectFit='cover'
                />
            </div>
            <div className={`${styles.Picture5} ${styles.Picture}`}>
                <h2>palliative Physiotherapie</h2>
                <p>Im Vordergrund stehen das Wohlbefinden und die innere Kraft des Patienten mit Berührung, Aktivität und Energiearbeit.</p>
                <Image
                    alt='Bild des Endlichkeits-Teams'
                    src={'/images/start/grid-5.jpg'}
                    layout='fill'
                    objectFit='cover'
                />
            </div>
            <div className={`${styles.Picture6} ${styles.Picture}`}>
                <h2>Unser Zentrum</h2>
                <p>In unseren Räumlichkeiten finden Gruppen- und Einzelberatungen statt. Wir stehen in direktem Kontakt mit der benachbarten Physiotherapie Henrich und können dadurch besondere Angebote rund um die palliative Physiotherapie anbieten.</p>
                <Image
                    alt='Bild des Endlichkeits-Teams'
                    src={'/images/start/grid-6.jpg'}
                    layout='fill'
                    objectFit='cover'
                />
            </div>

        </section>
    )
}
