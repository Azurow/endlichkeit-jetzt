import React from 'react'
import Image from 'next/image'
import styles from '../styles/Grid.module.scss'


export default function Grid() {
    return (
        <section className={styles.grid}>
            <div className={`${styles.Picture1} ${styles.Picture}`}>
                <h2>„Ciao, Kakao!“ </h2>
                <p>Wir stehen den Schüler:innen und Pädagog:innen zur Seite und begleiten sie achtsam und fürsorglich durch die Zeit. Das Team Trost besteht aus Trauerbegleiter:innen, systemischen Coaches, pädagogischen Mitarbeiter:innen, Bestattungshelfer:innen und Ritualgestalter:innen.</p>
                <Image
                    alt='Bild des Endlichkeits-Teams'
                    src={'/images/start/grid-1.jpg'}
                    layout='fill'
                    objectFit='cover'
                />
            </div>
            <div className={`${styles.Picture2} ${styles.Picture}`}>
                <h2>„Wellenreiter“ </h2>
                <p>Wir befinden uns in dieser Gruppe in einem geschützten Raum, in dem wir unsere Sorgen, Ängste, Trauer, Wut, Enttäuschung zeigen und aussprechen können Wir treffen uns an einem vereinbarten Ort, lernen uns kurz kennen und laufen dann los. Wer nicht mit einer Gruppe laufen, sich aber in der Natur bewegen und begleitet sein möchte, kann ebenfalls mit dem Team Trost einen Termin vereinbaren.</p>
                <Image
                    alt='Bild des Endlichkeits-Teams'
                    src={'/images/start/grid-2.jpg'}
                    layout='fill'
                    objectFit='cover'
                />
            </div>
            <div className={`${styles.Picture3} ${styles.Picture}`}>
                <h2>Weglaufen</h2>
                <p>Natur und Bewegung - eine Kraftquelle. Sie entspannt, beruhigt, regt das Immunsystem an, ist Balsam für die Seele. Mit jemandem reden, sich austauschen, schweigen, aber auch lachen, die Natur riechen, Tiere und Pflanzen beobachten, Wind und Wetter erleben… All das beruhigt die Gedanken und fokussiert uns auf den Augenblick. </p>
                <Image
                    alt='Bild des Endlichkeits-Teams'
                    src={'/images/start/grid-3.jpg'}
                    layout='fill'
                    objectFit='cover'
                />
            </div>
            <div className={`${styles.Picture4} ${styles.Picture}`}>
                <h2>Blablabla…</h2>
                <p>Du bist genervt, weil alle ständig mit Dir über Deine Gefühle sprechen wollen, Du aber nicht? Du willst ganz laut f*** schreien, den ganzen Tag, weil jemand gestorben ist und es keinen interessiert, wie es Dir geht oder…? Dann schreib uns eine Mail blabla[at]endlichkeit.jetzt oder Mobil Message an 0151 25288191</p>
                <Image
                    alt='Bild des Endlichkeits-Teams'
                    src={'/images/start/grid-4.jpg'}
                    layout='fill'
                    objectFit='cover'
                />
            </div>
            <div className={`${styles.Picture5} ${styles.Picture}`}>
                <h2>Seelenmassage </h2>
                <p>Der Körper speichert alle Emotionen und alle Traumata. Für die Seele ist im Alltag meistens keine Zeit und sie kommt nicht „hinterher“.  Körper, Geist und Seele sollen in Einklang kommen und so das Erlebte auf eine gesunde Art und Weise umsetzen. Durch das Gespräch während der Behandlung können Sorgen und Gedanken geteilt und Lösungen gesucht werden.</p>
                <Image
                    alt='Bild des Endlichkeits-Teams'
                    src={'/images/start/grid-5.jpg'}
                    layout='fill'
                    objectFit='cover'
                />
            </div>
            <div className={`${styles.Picture6} ${styles.Picture}`}>
                <h2>Weglaufen</h2>
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
