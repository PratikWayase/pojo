
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Student/Home'
import CourseList from './pages/Student/CourseList'
import CourseDetails from './pages/Student/CourseDetails'
import MyEnrollment from './pages/Student/MyEnrollment'
import Player from './pages/Student/Player'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/CourseList ' element={<CourseList />} />
        <Route path='/CourseList/:input ' element={<CourseList/>} />
        <Route path='/Course/:id ' element={<CourseDetails/>} />
        <Route path='/MyEnrollment' element={<MyEnrollment />} />
        <Route path='/player/:courseId' element={<Player/>} />
    
      </Routes>
      
    </div>
  )
}

export default App
