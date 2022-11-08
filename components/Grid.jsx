import React from 'react'
import Image from 'next/image'
import styles from '../styles/Grid.module.scss'


export default function Grid() {
    return (
        <section className={styles.grid}>
            <div className={`${styles.Picture1} ${styles.Picture}`}>
                <h2>Beerdigungsbegleitung</h2>
                <p>Wir stehen den Schüler:innen und Pädagog:innen zur Seite und begleiten sie achtsam und fürsorglich durch die Zeit. Das Team Trost besteht aus Trauerbegleiter:innen, pädagogischen Mitarbeiter:innen und Bestattungshelfer:innen</p>
                <Image
                    alt='Bild des Endlichkeits-Teams'
                    src={'/images/start/grid-1.jpg'}
                    layout='fill'
                    objectFit='cover'
                />
            </div>
            <div className={`${styles.Picture2} ${styles.Picture}`}>
                <h2>Weg-laufen Natur und Bewegung - eine Kraftquelle</h2>
                <p>Wir befinden uns in dieser Gruppe in einem geschützten Raum, in dem wir unsere Sorgen, Ängste, Trauer, Wut, Enttäuschung zeigen und aussprechen können Wir treffen uns an einem vereinbarten Ort, lernen uns kurz kennen und laufen dann los. Wer nicht mit einer Gruppe laufen, sich aber in der Natur bewegen und begleitet sein möchte, kann ebenfalls mit dem Team Trost einen Termin vereinbaren.</p>
                <Image
                    alt='Bild des Endlichkeits-Teams'
                    src={'/images/start/grid-2.jpg'}
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
                <p>Du bist genervt, weil alle ständig mit Dir über Deine Gefühle sprechen wollen, Du aber nicht? Du willst ganz laut f*** schreien, den ganzen Tag, weil jemand gestorben ist und es keinen interessiert, wie es Dir geht oder…? Dann schreib uns eine Mail blabla[at]endlichkeit.jetzt oder Mobil Message an 0151 25288191</p>
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
                <h2>Gruppen- und Einzelberatung</h2>
                <p>Natur und Bewegung - eine Kraftquelle. Sie entspannt, beruhigt, regt das Immunsystem an, ist Balsam für die Seele. Mit jemandem reden, sich austauschen, schweigen, aber auch lachen, die Natur riechen, Tiere und Pflanzen beobachten, Wind und Wetter erleben… All das beruhigt die Gedanken und fokussiert uns auf den Augenblick.</p>
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
