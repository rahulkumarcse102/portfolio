import React from 'react'
import './Footer.css'
import Wave from '../../img/wave.png'
import Linkdin from '@iconscout/react-unicons/icons/uil-linkedin'
import Facebook from '@iconscout/react-unicons/icons/uil-facebook'
import Github from '@iconscout/react-unicons/icons/uil-github'

const Footer = () => {
  return (
    <div className="footer">
        <img src={Wave} alt="" style={{width: '100%'}}/>
        <div className="f-content">
            <span><a href="mailto:rahul9709347233@gmail.com" target= "_blank" rel="noreferrer">rahul9709347233@gmail.com</a></span>
            <div className="f-icons">
            <a href="https://www.linkedin.com/in/rahul-kumar-57587a200/" target= "_blank" rel="noreferrer">
            <Linkdin color='white' size='3rem'/>
                </a>
                <a href="https://www.facebook.com/profile.php?id=100043886371903" target= "_blank" rel="noreferrer">
                <Facebook color='white' size='3rem'/>
                </a>
                <a href="https://github.com/rahulkumarcse102" target= "_blank" rel="noreferrer">
                <Github color='white' size='3rem'/>
                </a>
            </div>
        </div>
    </div>
  )
}

export default Footer