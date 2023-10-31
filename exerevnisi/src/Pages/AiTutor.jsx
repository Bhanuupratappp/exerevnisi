import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

export const AiTutor = () => {
    const navigate = useNavigate()
    return (
        <DIV>
            <div className='container'>
                <h1>Universal AI tutor: <br /> Education Reimagined & Reinvented.</h1>
                <p>Teaching constitutes of two parts : Motivation and transfer of
                    learning/information.
                    Motivation can be understood as associating students with the philosophical
                    overview of the subject and helping them to challenge the roots of the
                    subject/topic.
                    Transfer of learning/information where we train students in order to gain depth
                    for a particular purpose for a particular topic. For example solving integration
                    problem in order to master an exam or be familiar with the known methods of
                    integration in order to be able to apply when needed for some work such as
                    research, implementing commercial projects or fulfilling similar needs. This part is
                    basically for job creation, innovation, commercial application and this where societal
                    needs are getting fullfilled. Our education system largely falls in this category. <br />
                   <b>We are focused on building a Universal AI tutor which does the second part.</b> 

                    </p>
            </div>

            <div className='first'>
                <h1>“Context is Worth 80 IQ points.” – Alan kay</h1>
                <p>Our approacch focuses on two things : <br />

1. Defining the parameters in order to narrow down the context so that there is no rate
of error.
<br />
2. Adjust technologies around the user and its need (specifically in education).
<br />
Our focus is on a learner who will use, ineratct and become skilled for the particular
context after spending time with the AI tutor.
We have developed an inference engine which embeds different school of AI in order to
mimic all the aspect of a private learning session. We are not only mimicing teaching
patterns and a teacher behaviour but also adding additional capacity which only
algorihhm, data, and software can offer for an individual learning journey.We intent to
build a system which makes human intelligent in minimum possible time.
For more technical detail, Connect with us.</p>

                <h1>Education For a Data Driven Society.</h1>
                <p> <b>Better, Cheaper, and always Accessible Education ever possible in the
history of humanity.
</b> </p>
                <p>Technology alone doesn’t solves the problem. It has to find its space in society. And the
best way to do is to fulfill the need of the society. Imagine a far better version of society
and build for it.
With the changing need of society every infrastructure needs to be rethought and
reimagined. The requirement of different skill for a job, the fast moving rate of innovation
and a human need for personal attention is demanding a new infrastructure. The
standard exam sets, job processes, learning curve(grades, school and colleges) is no
longer valid for the long term future.
Looking at the infrastructure of education, the time and cost it takes is way too much.
And still, It does not appreciate and encourage individual uniqueness.
Additionally, a large part of the world still don’t have access to quality education.
As the need of society has changed, so should be its core infrastructure.
We are thinking about the whole educational infrastructure from scratch.
To know more <span onClick={()=>navigate("/about")}>Connect with us.</span> </p>
            </div>

        </DIV>
    )
}

const DIV = styled.div`
   width: 60%;
   margin: 100px auto;
   
   h2{
        color:#333333;
        text-align: left;
        margin-top: 40px;
       
   }
   p{
    
    text-align: left;
    font-size: 18px;
    line-height: 38px;
    color: #413333;
    
   }
    .container{
        
        margin: auto;
       
    }
    .container h1{
        font-size: 35px;
        letter-spacing: -2.5px;
        text-align: left;
    }
    
    .first{
        margin-top: 50px;
    }
    .first h1{
        color:#333333;
        text-align: left;
        font-size: 28px;
    }
    span{
        color: #5858f4;
        cursor: pointer;
        font-weight: bold;
    }
    
`