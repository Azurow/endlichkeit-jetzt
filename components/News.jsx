import styles from "../styles/News.module.scss"
import button from "../styles/Button.module.scss"
import { React, useState, useEffect } from 'react'
import { collection, getDocs, orderBy, query, Timestamp } from "firebase/firestore"
import { firestore } from "../utils/firebase"
import PopUp from "./PopUp";

export default function News({}) {

    const [modalOpen, setModalOpen] = useState(false);
    const [modalPost, setModalPost] = useState({})
    const [posts, setPosts] = useState([{ title: "hi" }])

    const openModal = (post) =>
    {
        setModalOpen(true);
        setModalPost(post)
    }

    const updatePosts = () => {
        const colRef = collection(firestore, "posts")
        const postQuery = query(colRef, orderBy("date", "asc")); //limit(3) also possible

        getDocs(postQuery, colRef)
            .then((snapshot) => {
                let queriedPosts = [];
                snapshot.docs.forEach((doc) => {
                    queriedPosts.push({ ...doc.data(), date: doc.data().date.toDate().toLocaleDateString("de-DE", { weekday: 'long', month: 'long', day: 'numeric', hour: "numeric", minute: "numeric" }), id: doc.id });
                })
                setPosts(queriedPosts);
            })
            .catch(err => {
                console.log(err.message);
            })
    }

    useEffect(() => {
        updatePosts();
    }, [])

    return (
        <>
            <aside className={styles.news}>
                <h2>Aktuelles</h2>
                <div className={styles.news_list_container}>
                    <ul className={styles.news_list}>
                        {posts.map((i, index) =>
                            <li  key={index}>
                                <time>{i.date + " Uhr"}</time>
                                <h3>{i.title}</h3>
                                <p>{i.description}</p>
                                <button className={button.button} onClick={e => {openModal(i);}}>Mehr Dazu</button>
                            </li>
                        )}
                        {posts.length == 0 && <p>Keine aktuellen Nachrichten...</p>}
                    </ul>
                </div>

            </aside>
            <PopUp title={modalPost.title} text={modalPost.text} open={modalOpen} setOpen={setModalOpen}/>
        </>
        
    )
}
