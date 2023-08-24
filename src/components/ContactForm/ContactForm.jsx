// import React from 'react'
import Button from "../Button/Button"
import styles from "./ContactForm.module.css"
import {MdWhatsapp} from "react-icons/md" 
import {MdPhone} from "react-icons/md" 
import {HiMail} from "react-icons/Hi" 


const ContactForm = () => {


  const onSubmit = (event) =>{
    event.preventDefault();
    console.log("Name :",event.target[0].value);
    console.log("Email :",event.target[1].value);
    console.log("Text",event.target[2].value);
  }




  return (
    <section className={`${styles.container}`}>
      <div className={styles.contact_form}>
          
          <div className={styles.top_btn}>
                <Button 
                text="Whatsapp" 
                icon={<MdWhatsapp fontSize="20px"/>}/>
               
                <Button  
                // onClick={onViaCallSubmit}
                text="Call" 
                icon={<MdPhone fontSize="20px"/>}/>
          </div>
       
          <Button isOutline={true} text="Via Email" icon={<HiMail fontSize="20px"/>}/>
        
          <form onSubmit={onSubmit}>
            <div className={styles.form_control}>    
              <label htmlFor="name">Name</label>
              <input type="text" name="name"/>
            </div>
            <div className={styles.form_control}>    
              <label htmlFor="email">Email</label>
              <input type="email" name="email"/>
            </div>
            <div className={styles.form_control}>    
              <label htmlFor="text">Review</label>
              <textarea  name="text" rows={10}/>
            </div>
            <div 
            style={{
              display:"flex",
              justifyContent:"end"
            }}
            >
            <Button  text="Submit" />
            </div>
            
          </form>
          
      </div>

      
      <div className={styles.contact_image}><img src="/images/rolex6.webp" alt="watch" /></div>
    </section>
  )
}

export default ContactForm
