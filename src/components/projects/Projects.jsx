import style from './projects.module.css'

import {myProjects} from '../../data.js'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

const Projects = () => {
    // const [myPro, setMyPro] = useState([{myProjects}])
    const [porojectPerPage, setPorjectPerPage] = useState(6)
    const [currentPage, setCurrentPage] = useState(1)
    const [backToUp, setBackToUp] = useState(false)

    const {pathname} = useLocation()
    useEffect(() => {
        window.scrollTo({top:0, behavior:'smooth'})
        // window.addEventListener('scroll', () => {
        //     if(window.scrollY > 20) {
        //         setBackToUp(true)
        //     } else {
        //         setBackToUp(false)
        //     }
        // })
    },[])

    const numOfPages = Math.ceil(myProjects.length / porojectPerPage); //20 / 6 = 4
    const pages = [...Array(numOfPages + 1).keys()].slice(1) 
   
    const lastIndex = currentPage * porojectPerPage ; // 1 * 6 = 6
    const firstIndex = lastIndex - porojectPerPage; // 6 - 6 = 0
  
    const visable = myProjects.slice(firstIndex, lastIndex)
  
  
  
    const prevHandel = () => {
      if(currentPage !== 1) setCurrentPage(currentPage - 1),
      window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
    
    }
    const nextHandel = () => {
        
      if(currentPage !== numOfPages) setCurrentPage(currentPage + 1) ,
       window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
    
    }
  return (
    <div className={style.projects}>
        <div className="container pt-4">
        <h2 className={`${style.contHead}`}>My <span className='c-yellow'>Projects</span></h2>
        <div className={style.projectsContainer}>

            {
                visable.map((item) => {
                    return(
                        <div key={item.id} className={style.pro} >
                            <div className={style.proImg}>
                                <img src={item.img} alt="projct06"
                                style={{width:'100%', height:'100%',objectFit:'cover', borderRadius:'10px'}} />
                            </div>
                            <div className='my-2 d-flex flex-wrap '>
                                <span className={style.proTools}>{item.tools[0]}</span>
                                <span className={style.proTools}>{item.tools[1]}</span>
                                {
                                (item.tools.length > 2 &&  <span className={style.proTools}>{item.tools[2]}</span> )
                                }
                               
                            </div>
                            <h3 className='fs-4'>{item.name}</h3>
                            <p className='fs-6'>{item.description} </p>
                            <div className={style.btnCont}>
                                <a href={item.code} 
                                target='_blanket'
                                className={style.viewBtn}>View Code</a>
                                <a href={item.live}
                                target='_blanket'
                                className={style.liveBtn}>View Live App</a>
                            </div>
                        </div>
                    )
                })
            }

        </div>

           {/* pages */}
           <div  style={{display:'flex', gap:'10px', alignItems:'center', justifyContent:'center', marginTop:'20px',paddingBottom:'10px'}}>
            <span className='next' onClick={prevHandel}>Prev</span>
            {pages.map((page,i) => <span key={i} className={`${currentPage === page ? "num active" : "num" } `}
            onClick={() => {setCurrentPage(page) ,window.scrollTo({top: 0, left: 0, behavior: 'smooth'})}}> {page}</span>)}
            <span className='next' onClick={nextHandel}>Next</span>
        </div>
        
        </div>
    </div>
  )
}

export default Projects