import React from 'react'
import Toggle from '../Toggle/Toggle'
import './Navbar.css'
import {Link} from 'react-scroll';


const Navbar = () => {
  return (
    <div className="n-wrapper">
        <div className="n-left">
            <div className="n-name">Rahul's Portfolio</div>
            <Toggle/>
        </div>
        <div className="n-right">
            <div className="n-list">
                <ul style={{listStyleType: 'none'}}>
                    <Link spy={true} to='Navbar' smooth={true} activeClass='activeClass'>
                    <li>Home</li>
                    </Link>
                    <Link spy={true} to='About' smooth={true}>
                    <li>About</li>
                    </Link>
                    <Link spy={true} to='Experience' smooth={true}>
                    <li>Experience</li>
                    </Link>
                    <Link spy={true} to='Projects' smooth={true}>
                    <li>Projects</li>
                    </Link>
                    <Link spy={true} to='Acheivements' smooth={true}>
                    <li>Acheivements</li>
                    </Link>
                    {/* <Link spy={true} to='Contact' smooth={true}>
                    <li>Contact</li>
                    </Link> */}
                </ul>
            </div>
            <Link spy={true} to='Contact' smooth={true} activeClass='activeClass'>
            <button className="button n-button">
                    Contact
            </button>
            </Link>
        </div>
    </div>
  )
}

export default Navbar