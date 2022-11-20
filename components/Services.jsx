import { React, useState, useEffect } from 'react'
import styles from '../styles/Services.module.scss'
import Button from './Button'
import { collection, getDocs } from "firebase/firestore"
import { firestore } from '../utils/firebase';

export default function Services() {

    const [topNav, setTopNav] = useState([]);
    const [article, setArticle] = useState({})

    async function onTopNavChange(e) {
        const colRef = collection(firestore, `services/${e.target.value}/services`);

        let queriedServices = [];
        const snapshot = await getDocs(colRef)
        snapshot.docs.forEach((doc) => queriedServices.push(doc.data()));

        setTopNav(queriedServices);

        document.getElementsByName("nav_sub").forEach(i => i.checked = false)
    }

    function onSubNavChange(e) {
        setArticle(topNav.find(i => i.title == e.target.value))
    }

    return (
        <section className={styles.services} >
            <h2>Unsere Angebote zu den Themen...</h2>
            <div className={styles.services_container}>
                <div className={styles.services_nav}>
                    <nav className={styles.services_nav_top} onChange={onTopNavChange}>
                        <label className={styles.services_nav_top_tab}>
                            <input type="radio" name="nav_top" value={"Sterben"} />
                            <h3>Sterben</h3>
                        </label>
                        <Divider />
                        <label className={styles.services_nav_top_tab}>
                            <input type="radio" name="nav_top" value={"Tod"} />
                            <h3>Tod</h3>
                        </label>
                        <Divider />
                        <label className={styles.services_nav_top_tab}>
                            <input type="radio" name="nav_top" value={"Trauer"} />
                            <h3>Trauer</h3>
                        </label>
                    </nav>
                    <nav className={styles.services_nav_sub}>
                        <ul>
                            {topNav.map((i) => (
                                <li onChange={onSubNavChange} key={i.title}>
                                    <label className={styles.services_nav_sub_tab}>
                                        <input type="radio" name="nav_sub" value={i.title} />
                                        <h3>･ {i.title} </h3>
                                    </label>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>

                <div className={styles.sub}>
                    <article className={styles.services_article}>
                        <h3>{Object.keys(article).length === 0 ? "Bitte wählen Sie ein Angebot aus." : article.title}</h3>
                        <p>{article.description}</p>
                        {Object.keys(article).length !== 0 && <Button text="Anfragen" subject={article.title}/>}
                    </article>
                </div>

                
            </div>
        </section>
    )
}

export function Divider() {
    return (
        <div className={styles.divider}>･</div>
    )
}
