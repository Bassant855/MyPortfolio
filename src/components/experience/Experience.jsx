import style from './experience.module.css'
import logo from '../../assets/Logo (2).png'
import msp from '../../assets/msp.png'
import free from '../../assets/free1.png'

const Experience = () => {
  return (
    <div className={style.experience}>
        <div className="container">
            <h1 className='c-yellow text-center pt-5' >Experience</h1>
            <div className={style.expBox}>
                <div className={style.expInfo}>
                    <div>
                        <img src={logo} alt="" style={{width:'50px', height:'50px'}} />
                    </div>
                    <div>
                        <h2>Remotely Frontend Internship</h2>
                        <p>MYM</p>
                        <span >June 2023 - Nov 2023</span>
                    </div>
                    
                </div>
                <div className={style.expPara}>Work On The Company’s Main Website & dashboard Using React js, Bootstrap, Formik, Axios
                </div>
            </div>

            <div className={style.expBox}>
                <div className={style.expInfo}>
                    <div>
                        <img src={free} alt="" style={{width:'50px', height:'50px',objectFit:"contain"}} />
                    </div>
                    <div>
                        <h2>Freelance Job</h2>
                        <p>Tourism</p>
                        <span >may 2023</span>
                    </div>
                    
                </div>
                <div className={style.expPara}>I made a website that shows all places in Cairo & Giza useing Html, Css and Js
                 <a href="https://bassant855.github.io/Tourism/" target='_blank' className='c-yellow'> Link of the project</a>                
                </div>
            </div>

            <div className={style.expBox}>
                <div className={style.expInfo}>
                    <div>
                        <img src={msp} alt="" style={{width:'50px', height:'50px',objectFit:"contain"}} />
                    </div>
                    <div>
                        <h2>Frontend Leader</h2>
                        <p>MSP</p>
                        <span >Nov 2022 - sep 2023</span>
                    </div>
                    
                </div>
                <div className={style.expPara}>I was a volunteer front end leader, i explained Css,
                 Js also i made the front end for the team's website
                 <a href="https://msp-project-2.vercel.app/" target='_blank' className='c-yellow'> Link of msp website</a>                
                </div>
            </div>

            
            
        </div>
    </div>
  )
}

export default Experience