import { collection, doc, getDoc, addDoc, getDocs, orderBy, query, Timestamp, setDoc, deleteDoc } from "firebase/firestore"
import { React, useState, useEffect, useRef } from 'react'
import styles from "../styles/NewsAdmin.module.scss"
import { firestore } from '../utils/firebase';
import moment from "moment";

export default function NewsAdminPanel() {

    const [posts, setPosts] = useState([]);
    const [currentId, setCurrentId] = useState();
    const [errorMessage, setError] = useState("");

    const colRef = collection(firestore, "posts")

    const titleInput = useRef("");
    const descriptionInput = useRef("");
    const textInput = useRef("");
    const dateInput = useRef("");

    useEffect(() => {
        updatePosts();
    }, [])

    useEffect(() => {
        if (!currentId) return;

        getDoc(doc(firestore, `posts/${currentId}`))
            .then(snapshot => {
                try {
                    titleInput.current.value = snapshot.data().title;
                    descriptionInput.current.value = snapshot.data().description;
                    textInput.current.value = snapshot.data().text;
                    dateInput.current.value = moment(snapshot.data().date.toDate()).format("yyyy-MM-DDThh:mm");
                }
                catch (error) { }
            })
    }, [currentId])

    const updatePosts = () => {
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

    const deletePost = (id) => {
        deleteDoc(doc(firestore, `posts/${id}`)).then(updatePosts());
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const elementsArray = [...e.target.elements];

        const formData = elementsArray.reduce((accumulator, currentValue) => {
            if (currentValue.id) {
                if (currentValue.id == "date") {
                    accumulator[currentValue.id] = Timestamp.fromDate(new Date(currentValue.value));
                } else {
                    accumulator[currentValue.id] = currentValue.value;
                }
            }
            return accumulator;
        }, {});

        if (Object.values(formData).includes("")) {
            setError("Bitte fülle alle Felder aus")
            return;
        }

        if (currentId) {
            setDoc(doc(firestore, `posts/${currentId}`), formData).then(updatePosts());
        }
        else {
            addDoc(colRef, formData).then(updatePosts());
        }
    }

    const resetEditing = () => {
        setCurrentId(null);
        titleInput.current.value = null;
        descriptionInput.current.value = null;
        textInput.current.value = null;
        dateInput.current.value = null;
    }

    return (
        <>
            <h2>Aktuelles</h2>
            <div className={styles.container}>

                <div>
                    <form className={styles.form} onSubmit={(e) => handleSubmit(e)} method="post">
                        <div className={styles.upperForm}>
                            <div >
                                <label htmlFor="title">Titel</label>
                                <input type="text" name="title" id="title" ref={titleInput} />
                            </div>
                            <div>
                                <label htmlFor="description">Kurzbeschreibung</label>
                                <input type="text" name="description" id="description" ref={descriptionInput} />
                            </div>
                        </div>
                        <label htmlFor="text">Text/Inhalt</label>
                        <textarea type="text" name="text" id="text" ref={textInput} />
                        <label htmlFor="date">Datum</label>
                        <input className={styles.date} required type="datetime-local" name="date" id="date" ref={dateInput} />
                        <button type="submit">Speichern</button>
                        {currentId != null && <button onClick={e => resetEditing()}>Bearbeiten beenden / Neuen Beitrag starten</button>}
                        <strong className={styles.error}>{errorMessage}</strong>
                        <small className={styles.id}>Momentane ID: {currentId}</small>
                    </form>
                </div>
                {
                    posts.length > 0 &&
                    <div className={styles.posts}>
                        <ul className={styles.posts_list}>
                            {posts.map((i, index) =>
                                <li key={index}>
                                    <time>{i.date}</time>
                                    <h3>{i.title}</h3>
                                    <p>{i.description}</p>
                                    <button onClick={e => setCurrentId(i.id)}>Bearbeiten</button>
                                    <button onClick={e => deletePost(i.id)}>Löschen</button>
                                </li>
                            )}
                        </ul>
                    </div>
                }
            </div>
        </>
    )
}
