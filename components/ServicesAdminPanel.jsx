import { React, useState, useEffect, useRef } from 'react'
import { collection, getDocs, addDoc, setDoc, doc, deleteDoc } from "firebase/firestore"
import { firestore } from '../utils/firebase';
import styles from "../styles/ServicesAdmin.module.scss"

export default function ServicesAdminPanel() {

    const [servicesToDisplay, setServices] = useState([]);
    const [selectedTab, setSelectedTab] = useState("");
    const [currentId, setCurrentId] = useState();
    const [errorMessage, setError] = useState("");

    const titleInput = useRef("");
    const descriptionInput = useRef("");


    const updateServices = async () => {
        if (selectedTab == "") return;
        const colRef = collection(firestore, `services/${selectedTab}/services`);

        let queriedServices = [];
        const snapshot = await getDocs(colRef)
        snapshot.docs.forEach((doc) => queriedServices.push({ ...doc.data(), id: doc.id }));

        setServices(queriedServices);

        document.getElementsByName("nav_sub").forEach(i => i.checked = false)
    }

    const onTabChange = (e) => {
        setSelectedTab(e.target.value);
    }

    useEffect(() => { updateServices() }, [selectedTab]);

    const startEditing = (service) => {
        setCurrentId(service.id);
        titleInput.current.value = service.title;
        descriptionInput.current.value = service.description;
    }

    const stopEditing = () => {
        setCurrentId(null);
        titleInput.current.value = "";
        descriptionInput.current.value = ""
    }

    const deletePost = (id) => {
        deleteDoc(doc(firestore, `services/${selectedTab}/services/${id}`)).then(updateServices());
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const elementsArray = [...e.target.elements];

        const formData = elementsArray.reduce((accumulator, currentValue) => {
            if (currentValue.id) {
                accumulator[currentValue.id] = currentValue.value;
            }
            return accumulator;
        }, {});

        if (Object.values(formData).includes("")) {
            setError("Bitte fülle alle Felder aus")
            return;
        }


        if (currentId != null) {
            setDoc(doc(firestore, `services/${selectedTab}/services/${currentId}`), formData).then(updateServices());
        }
        else {
            addDoc(collection(firestore, `services/${selectedTab}/services`), formData).then(updateServices());
        }

        stopEditing();
    }

    return (
        <>
            <h2>Angebote</h2>
            <div className={styles.container}>
                <div className={styles.tabs} onChange={e => onTabChange(e)}>
                    <label htmlFor="sterben">
                        <input type="radio" name="tabs" id="sterben" value={"Sterben"} />
                        <h2>Sterben</h2>
                    </label>

                    <label htmlFor="tod">
                        <input type="radio" name="tabs" id="tod" value={"Tod"} />
                        <h2>Tod</h2>
                    </label>

                    <label htmlFor="trauer">
                        <input type="radio" name="tabs" id="trauer" value={"Trauer"} />
                        <h2>Trauer</h2>
                    </label>

                </div>

                {selectedTab != "" &&
                    <div className={styles.panel}>
                        <form className={styles.inputForm} onSubmit={(e) => handleSubmit(e)}>
                            <label htmlFor="title">Titel</label>
                            <input type="text" name="title" id="title" ref={titleInput} />
                            <label htmlFor="description">Beschreibung</label>
                            <textarea name="description" id="description" cols="30" rows="10" ref={descriptionInput} />
                            <button type="submit">Speichern</button>
                            {currentId != null && <button onClick={e => stopEditing()}>Bearbeiten beenden</button>}
                            <strong className={styles.error}>{errorMessage}</strong>
                        </form>
                        <div className={styles.services}>
                            <ul>
                                {servicesToDisplay.map((i) =>
                                    <li key={i.id}>
                                        <h3>{i.title}</h3>
                                        <p>{i.description.substring(0, 200) + "..."}</p>
                                        <button onClick={e => startEditing(i)}>Bearbeiten</button>
                                        <button onClick={e => deletePost(i.id)}>Löschen</button>
                                    </li>
                                )}
                            </ul>
                        </div>
                    </div>}

            </div>
        </>
    )
}
