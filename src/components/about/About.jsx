import style from './about.module.css'
import bassant from '../../assets/bassant.jpeg'
import {useTypewriter , Cursor} from 'react-simple-typewriter'

const About = () => {
    const [text] = useTypewriter({
        words:['Front-end Developer'],
        loop: {},
        typeSpeed:100
    })
  return (
    <div className={style.about}>
        <div className={`container ${style.aboutContent}`}>
            <div className={style.aboutInfo}>
                <h1>Hi, I am</h1>
                <h1><span className='c-yellow'>Bassant Hassan</span></h1>
                <h2>I'm a 
                    <span className='c-yellow'> {text}</span>
                    <span className='c-yellow'> <Cursor/></span>
                </h2>
                <p>A Software Engineer With Solid Knowledge In Front-End Technologies,
                And Software Development Principles, Looking Forward To Working At An 
                Innovative Where I Can Devolop My Skills.
                </p>
                <button download className={style.aboutBtn}>
                    download CV
                </button>
            </div>
            <div className={style.imgContainer}>
                <img src={bassant} alt="" 
                style={{
                    width:'100%',
                    height:'100%',
                    objectFit:'cover',
                    borderRadius:'50%'
                }} />
            </div>
        </div>
    </div>
  )
}

export default About
