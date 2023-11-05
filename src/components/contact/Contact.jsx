import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import style from './contact.module.css'
import {GrMail} from 'react-icons/gr'
import {FaLocationDot} from 'react-icons/fa6'


const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_hy0j24g', 'template_e6bm03n', form.current, 'SUvZqXcSyBJu0rmUH')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
       
    };
  
    return (
        <div className={style.contPage}>
            <div className="container pt-4">
                <div className='text-center'>
                    <h2 className={style.contHead}><span className='c-yellow'>Contact</span> Me</h2>
                    <p>Feel free to reach out to me for any questions or opportunities!</p> 
                </div>
                
                <div className={`d-flex justify-content-between mt-4 gap-5 ${style.contContainer}`}>
                    <div className={style.contInfo}>
                        <h4 className='text-center-sm'>CONTACT INFO</h4>
                        <div className={`py-2 ${style.info}`} >
                            <GrMail className='c-yellow me-2' size={25}/>
                            bassanthassan855@gmail.com
                        </div>
                        <div className={`py-2 ${style.info}`}>
                            <FaLocationDot className='c-yellow me-2' size={25} />
                             Cairo, Egypt
                        </div>
                    </div>

                <form ref={form} onSubmit={sendEmail} className={style.form}>
                   
                    <input type="text" name="from_name" placeholder='Name' 
                    />
                  
                    <input type="email" name="from_email" placeholder='Email' 
                  
                  />
                  
                    <textarea name="message" placeholder='Message' rows={7} cols={10}  
                    />
                    <button type="submit" value="Send" className='btn mt-3 mx-auto' > Send</button>
                </form>

                </div>
            </div>
           
        </div>
    
    );
}

export default Contact