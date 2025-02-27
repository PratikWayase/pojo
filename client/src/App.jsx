
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Student/Home'
import CourseList from './pages/Student/CourseList'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/CourseList ' element={CourseList} />
        <Route path='/CourseList ' element= {CourseList } />
      </Routes>
      
    </div>
  )
}

export default App
