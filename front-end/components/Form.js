import {React, useRef} from 'react'
import styles from '../styles/form.module.css'
import emailjs from '@emailjs/browser'
import Image from 'next/image'
import linkedin from '../public/linkedin-icon.png'

const Form = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_59dt0oc', 'template_wi7rniv', form.current, 'VJvlZ5JVm5KqB7YEd')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
    };
    

  return (
    <div>
     <form className={styles.form} ref={form} onSubmit={sendEmail} >

        <label htmlFor="usuario" className={styles.h2} >Name:</label>
        <input placeholder="Name..." className={styles.usuario} name="usuario" type="text"></input>

        <label htmlFor="email" className={styles.h2} >E-mail:</label>
        <input placeholder="E-mail..." className={styles.gmail} name="email" type="email"></input>

        <label htmlFor="message" className={styles.h2} >Message:</label>
        <textarea placeholder="Write your message..." className={styles.message} name="message" ></textarea>

        <button type="submit" className={styles.btn} >
            Send
        </button>

        
      <div className={styles.linkedin} >
      <a href='https://www.linkedin.com/in/brian-galdo/' target="_blank" rel="noreferrer" ><Image src={linkedin} width={40} height={40} alt="linkedin" /></a>
      </div>
        
      </form>
    </div>       
  )
}

export default Form