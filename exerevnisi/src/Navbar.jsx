import React from 'react'
import styled from 'styled-components'
import Logo from './images/Logo.png'
import { useNavigate } from 'react-router-dom'
export const Navbar = () => {
    const navigate = useNavigate()
  return (
    <DIV>
         <nav className='nav'>
                <img onClick={()=>navigate("/")} src={Logo} alt="Logo" className='logo' />

                <hr />
         </nav>
    </DIV>
  )
}

const DIV = styled.div`
     nav{
        text-align: left;

    }
    .logo{
       width: 5%;
       border-radius: 50%;
       text-align: left;
       padding: 10px;
       margin-left: 10px;
       
    }
`