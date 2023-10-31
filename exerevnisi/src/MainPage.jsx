import React from 'react'
import styled from 'styled-components';

import { BsArrowRight } from 'react-icons/bs'
import { Navigate, useNavigate } from 'react-router-dom';

export const MainPage = () => {
    const navigate = useNavigate()
    return (
        <DIV>
           
            <div className='Container'>
                <div className='MainText'>
                    <h1>A World Where Education is A Choice.</h1>
                </div>
                <div className='About-us'>
                    <p className='aboutus'>We are here on a jouney to build the future of education. <br />
                        From student to teachers, schools to colleges, and job to curiosity — We are on a mission to <span> recreate the universe of education.</span><br />
                        To give every kid of the world a personal  AI tutor with basic education for free.</p>

                    <button onClick={()=>navigate('/about')} className='btn'>About Us</button>
                </div>

                <div className='studytable'>
                    <div>
                        <h1>Universal AI Tutor.</h1>
                        <button onClick={()=>navigate('/aitutor')} className='Button'><BsArrowRight /></button>
                    </div>
                </div>

                <div className='studytable'>
                    <div>
                        <h1>STUDYtable</h1>
                        <p>Study With Personal Care</p>
                        <button className='Button'><BsArrowRight /></button>
                    </div>
                </div>
                
                <div style={{height:"600px"}} className='studytable'>
                    <div>
                        <h2>Join The Team</h2>
                        <h4> founder@exerevnisi.com <br />
                            For openings checkout our LinkedIn, <br />
                            and Angellist page.</h4>
                    </div>
                </div>
               <hr />

               
               
            </div>
        </DIV>
    )
}

const DIV = styled.div`
   
    hr{
        opacity: 0.2;
    }
    .MainText{
        /* border: 2px solid red; */
        height: 780px;
        font-size: 24px;
        padding-top: 190px;
        color: #333333;
       letter-spacing: -2px;
       text-align: center;
    }
    .aboutus{
        text-align: left;
        margin-left: 50px;
        font-size: 23px;
        font-weight: 450;
        color: #333333;
    }
    .aboutus span{
        font-weight: 700;
        color: #2a2a2a;
    }
    
    .btn{
        background-color: #222222;
        color: white;
        font-weight: bold;
        padding: 10px 14px 10px 14px;
        font-size: 15px;
        border-radius: 8px;
        border: none;
        text-align: center;
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
        cursor: pointer;
    }
    
    .studytable{
        height: 900px;
        display: grid;
        align-items: center;
        color: #222222;
       
       
    }
    .Button{
        border: none;
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
        cursor: pointer;
        color: white;
        background-color: #222222;
        padding: 6px 16px 2px 16px;
        border-radius: 8px;
        font-size: 25px;
    }
    .studytable h1{
        font-size: 50px;
        letter-spacing: -2px;
        color: #333333;
    }
    .studytable p{
        font-size: 17px;
        margin-top: -20px;
        font-weight: 500;
        letter-spacing: -1px;
    }
    .studytable h4{
        font-weight: 400;
        line-height: 25px;
        font-size: 20px;
    }
    .studytable h2{
        font-size: 50px;
        letter-spacing: -2px;
        color: black;
    }

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
    }
    footer a{
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

`

