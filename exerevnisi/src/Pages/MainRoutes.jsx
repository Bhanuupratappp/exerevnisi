import React from 'react'
import {Routes,Route} from "react-router-dom"
import { MainPage } from '../MainPage'

import { AiTutor } from './AiTutor'
import { About } from './About'

export const MainRoutes = () => {
  return (
    <div>
       <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/about' element={<About />} />
        <Route path='/aitutor' element={<AiTutor />} />
       </Routes>
    </div>
  )
}
