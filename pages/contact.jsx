import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
import styles from '../styles/Contact.module.scss'
import PageContainer from '../components/PageContainer'

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default function contact() {

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

  const form = useRef();

  const [resultMessage, setResultMessage] = useState("");
  const [safetyNumbers, setSafetyNumbers] = useState([0, 0]);

  const safetyAnswer = useRef();

  function randomizeSafetyNumbers()
  {
    setSafetyNumbers([getRandomInt(0, 10), getRandomInt(0, 10)]);
  }

  useEffect(() =>
  {
    randomizeSafetyNumbers();
  }, [])

  const sendEmail = (e) => {
    e.preventDefault();
    setResultMessage("Bitte warten sie...");

    if(safetyAnswer.current.value != safetyNumbers.reduce((a, b) => a + b, 0))
    {
      setResultMessage("Sicherheitsfrage falsch");
      randomizeSafetyNumbers();
      return;
    }
    console.log(safetyAnswer.current.value);

    emailjs.sendForm("default_service", 'template_8adfrze', form.current, 'tqCO8DbBi_JA42ARP')
      .then((result) => {
        setResultMessage("Abgeschickt!");
        e.target.reset();
      }, (error) => {
        setResultMessage(error)
        console.log(error.text);
      });
      
      randomizeSafetyNumbers();
  };

  return (
    <PageContainer>
        <h2>Kontakt</h2>
        <main className={styles.container}>
            <div>
              <div className={styles.image}>
                  <Image src={'/images/contact/contact.jpg'} layout='fill' objectFit='cover'/>
              </div>
              <div >
                <div className={styles.infos}>
                  <p>+069 40586207</p>
                  <p>Hallo@endlichkeit.jetzt</p>
                  <p>Spessartstraße 12</p>
                  <p>60385 Frankfurt am Main</p>
                </div>
              </div>
            </div>
            
            <form className={styles.form} ref={form} onSubmit={sendEmail}>
              <label>Betreff</label>
              <input className={styles.textinput} type="text"name="subject" autoComplete="off" required />

              <label>Name</label>
              <input className={styles.textinput} type="text"name="from_name" autoComplete="off" required />

              <label>Email:</label>
              <input className={styles.textinput} type="email"name="from_email" autoCorrect='off' required />

              <label>Nachricht:</label>
              <textarea name="message" rows={10}/>

              <label>Sicherheitsfrage:</label>
              <div className={styles.safetyContainer}>
                <p>{safetyNumbers[0] + "+" + safetyNumbers[1]}</p>
                <input ref={safetyAnswer} className={styles.safetyinput} type="text"name="safety" autoComplete="off" placeholder='Antwort...' required />
              </div>

              <button type="submit">Abschicken</button>

              <sub className={styles.resultMessage}>{resultMessage}</sub>
            </form>
            
        </main>
    </PageContainer>
  )
}
