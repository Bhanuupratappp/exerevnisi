import React from 'react'
import styled from 'styled-components'
import { FaXTwitter } from 'react-icons/fa6'
import { BiLogoLinkedin } from 'react-icons/bi'
import { FaAngellist } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

export const Footer = () => {
    const navigate = useNavigate()
    const handleTutor = (event)=>{
       
        navigate("/aitutor")
        window.scrollTo(0, 0);
    }
  return (
    <DIV>
        <footer className='footer'>
                <div>
                    <h4>Product</h4>
                    <a target="_blank" href="http://studytable.co.in/">   <p> STUDYtable </p></a>
                    <p onClick={handleTutor}>Universal AI tutor</p>
                </div>
                <div>
                    <h4>Resources</h4>
                    <p onClick={()=>navigate("/about")}>About Us</p>
                    <p>Legal & Press Release</p>
                </div>
                <div className='links'>
                    
                    <a target="_blank" href="https://www.linkedin.com/company/exerevnisi/"> <BiLogoLinkedin /> </a>
                    <a target="_blank" href="https://x.com/Exerevnisi?s=20"><FaXTwitter /></a>
                    <a target="_blank" href="https://wellfound.com/company/exerevnisi"> <FaAngellist /> </a>
                </div>

               </footer>
              
               <hr style={{width:"70%"}} />
               <p className='copyright'>©Exerevnisi Private Limited.</p>
    </DIV>
  )
}

const DIV = styled.div`
    .footer{
        display: flex;
        justify-content: space-between;
        width: 70%;
        
        margin: 30px auto ;
        text-align: left;
    }
    footer h4{
        color: #333333;
        font-weight: 600;
    }
    footer p{
        color: #666666;
        font-weight: 600;
        cursor: pointer;
    }
    footer a{
        text-decoration: none;
    }
    .links a{
        text-decoration: none;
        margin: 10px;
        display: block;
        color: #666666;
        font-size: 20px;
        
        
    }
    .links{
        margin: 16px;
    }
    
    .copyright{
        text-align: left;
        width: 70%;
        
        margin: auto;
        color: #666666;
        font-size: 14px;
        font-weight: 600;
        margin-top: 30px;
        margin-bottom: 30px;
        
    }

    @media only screen and (max-width: 599px) {
    .footer{
        display: inline-block;
    }
  }
`