import {React, useState} from 'react'
import styles from "../styles/PopUp.module.scss"

export default function PopUp({open, setOpen, title, text}) {
    return (
        <div onClick={e => setOpen(false)} className={`${styles.container} ${open ? styles.open : ""}`}>
            <div className={styles.modal}>
                <button onClick={e => setOpen(false)} className={styles.button}>X</button>
                <h2>{title}</h2>
                <p>{text}</p>
            </div>
        </div>
    )
}
