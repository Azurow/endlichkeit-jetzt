import {React, useEffect} from 'react'
import Head from 'next/head';
import { useRouter } from 'next/dist/client/router';
import { auth} from '../utils/firebase'
import {signInWithEmailAndPassword } from 'firebase/auth'
import PageContainer from '../components/PageContainer'
import styles from "../styles/Login.module.scss"

export default function login() {

    useEffect(() =>
    {
        if(window.innerWidth > 576)
        {
            window.scrollTo({
                top: 1000,
                behavior: "smooth",
            });
        }
    }, [])

    const router = useRouter();

    const handleSubmit = (e) =>
    {
        e.preventDefault();
        const elementsArray = [...e.target.elements];

        const formData = elementsArray.reduce((accumulator, currentValue) =>
        {
            if(currentValue.id)
            {
                    accumulator[currentValue.id] = currentValue.value;
            }
            return accumulator;
        }, {});

        signInWithEmailAndPassword(auth, formData.email, formData.password)
            .then(() =>
                {
                    router.push("/admin");
                })
            .catch((error) =>
            {
                console.log("error");
            })
            
    }

    return (
        <PageContainer>
            <Head>
                <title>Login | Endlichkeit Jetzt</title>
                <meta name="robots" content="noindex, nofollow"></meta>
                <meta charSet="UTF-8"></meta>
            </Head>
            <div className={styles.container}>
                <h1>Bitte melde dich an, bevor du das Adminportal verwendest.</h1>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <label htmlFor="email">E-Mail</label>
                    <input type="email" name="email" id="email" />

                    <label htmlFor="password">Passwort</label>
                    <input type="password" name="password" id="password" />
                    <button type="submit" value="">Anmelden</button>
                    <button onClick={e => router.push("/")} value="">Zurück zur Seite</button>
                </form>
            </div>
        </PageContainer>
        
    )
}
