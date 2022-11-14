import Image from 'next/image'
import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';
import styles from '../styles/Contact.module.scss'
import PageContainer from '../components/PageContainer'

export default function contact() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("default_service", 'template_8adfrze', form.current, 'tqCO8DbBi_JA42ARP')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
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
              <input type="email"name="from_email" autoCorrect='off' required />
              <label>Nachricht:</label>
              <textarea name="message" rows={10}/>
              <button type="submit">Abschicken</button>
            </form>
            
        </main>
    </PageContainer>
  )
}
