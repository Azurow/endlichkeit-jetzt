import React from 'react'
import Image from 'next/image'
import styles from '../styles/Grid.module.scss'


export default function Grid() {
    return (
        <section className={styles.grid}>
            <div className={`${styles.Picture1} ${styles.Picture}`}>
                <h2>test</h2>
                <p>Lorem ipsum. Dolor sit amet. Lorem Ipsum dolor sit. Dolor amet sit Lorem ipsum.</p>
                <Image
                    alt='Bild des Endlichkeits-Teams'
                    src={'/images/start/text.jpg'}
                    layout='fill'
                    objectFit='cover'
                />
            </div>
            <div className={`${styles.Picture2} ${styles.Picture}`}>
                <h2>test</h2>
                <p>Lorem ipsum. Dolor sit amet. Lorem Ipsum dolor sit. Dolor amet sit Lorem ipsum.</p>
                <Image
                    alt='Bild des Endlichkeits-Teams'
                    src={'/images/start/text.jpg'}
                    layout='fill'
                    objectFit='cover'
                />
            </div>
            <div className={`${styles.Picture3} ${styles.Picture}`}>
                <h2>test</h2>
                <p>Lorem ipsum. Dolor sit amet. Lorem Ipsum dolor sit. Dolor amet sit Lorem ipsum.</p>
                <Image
                    alt='Bild des Endlichkeits-Teams'
                    src={'/images/start/text.jpg'}
                    layout='fill'
                    objectFit='cover'
                />
            </div>
            <div className={`${styles.Picture4} ${styles.Picture}`}>
                <h2>test</h2>
                <p>Lorem ipsum. Dolor sit amet. Lorem Ipsum dolor sit. Dolor amet sit Lorem ipsum.</p>
                <Image
                    alt='Bild des Endlichkeits-Teams'
                    src={'/images/start/text.jpg'}
                    layout='fill'
                    objectFit='cover'
                />
            </div>
            <div className={`${styles.Picture5} ${styles.Picture}`}>
                <h2>test</h2>
                <p>Lorem ipsum. Dolor sit amet. Lorem Ipsum dolor sit. Dolor amet sit Lorem ipsum.</p>
                <Image
                    alt='Bild des Endlichkeits-Teams'
                    src={'/images/start/text.jpg'}
                    layout='fill'
                    objectFit='cover'
                />
            </div>
            <div className={`${styles.Picture6} ${styles.Picture}`}>
                <h2>test</h2>
                <p>Lorem ipsum. Dolor sit amet. Lorem Ipsum dolor sit. Dolor amet sit Lorem ipsum.</p>
                <Image
                    alt='Bild des Endlichkeits-Teams'
                    src={'/images/start/text.jpg'}
                    layout='fill'
                    objectFit='cover'
                />
            </div>

        </section>
    )
}
