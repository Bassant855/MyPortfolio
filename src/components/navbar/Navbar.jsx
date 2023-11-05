import style from './navbar.module.css'
import { Link, NavLink } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Navbar1() {
  return (
    <Navbar expand="lg" className={style.navbar} >
      <Container className='d-flex justify-content-between'>
        <NavLink to="/" 
        style={{color:'#fff', fontSize:'30px', fontWeight:'bold'}}>
            Portfolio
        </NavLink>
        <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll"  
            style={{
             color:"fff",
             backgroundColor:'var(--main-color)',
             marginTop:'3px'
     
             }}  >
            <Nav
                className="m-auto gap-4 my-3 "
                style={{  }}
                navbarScroll
            >
                <NavLink className={style.navLink} to="/">About</NavLink>
                <NavLink className={style.navLink} to="/education">Education</NavLink>
                <NavLink className={style.navLink} to="/projects">Projects</NavLink>
                <NavLink className={style.navLink} to="/contact">Contact</NavLink>
        
            </Nav>

            <a href='https://github.com/Bassant855' target='_blank' className={style.btn}>Github Profile</a>
         
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbar1;