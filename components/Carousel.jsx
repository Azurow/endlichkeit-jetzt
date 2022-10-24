import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import styles from '../styles/Carousel.module.scss'

export default function Carousel() {

    const [imageCounter, setImageCounter] = useState(1);

    useEffect(() =>
    {
        const interval = setInterval(() => setImageCounter(imageCounter + 1), 5000)

        if(imageCounter > 3)
        {
            setImageCounter(1);
        }

        return(() => clearInterval(interval));
    }, [imageCounter])

  return (
    <div className={styles.carousel_container}>
        <div className={`${styles.carousel_image} ${imageCounter === 1 ? styles.current : ""}`}>
            <Image
            alt='Bildercollage'
            src={"/images/letzte-hilfe/carousel-1.jpg"}
            layout="fill"
            objectFit='cover'
            quality={100}
            />
        </div>
        <div className={`${styles.carousel_image} ${imageCounter === 2 ? styles.current : ""}`}>
            <Image
            alt='Bildercollage'
            src={"/images/letzte-hilfe/carousel-2.jpg"}
            layout="fill"
            objectFit='cover'
            quality={100}
            />
        </div>
        <div className={`${styles.carousel_image} ${imageCounter === 3 ? styles.current : ""}`}>
            <Image
            alt='Bildercollage'
            src={"/images/letzte-hilfe/carousel-3.jpg"}
            layout="fill"
            objectFit='cover'
            quality={100}
            />
        </div>
    </div>
  )
}
