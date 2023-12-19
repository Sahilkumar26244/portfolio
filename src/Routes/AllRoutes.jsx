import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MainHome from '../Pages/Home'
import ProjectDetails from '../Pages/ProjectDetails'
import LiveProjectDetails from '../Pages/LiveProjectDetails'

function AllRoutes({Home,About,Skills,Project,Contact}) {
  return (
    <>
        <Routes>
            <Route path='/' element={<MainHome Home={Home} About={About} Skills={Skills} Project={Project} Contact={Contact} />} />
            <Route path='/project/:id' element={<ProjectDetails/>} />
            <Route path='/liveproject/:id' element={<LiveProjectDetails/>} />
        </Routes>
    </>
  )
}

export default AllRoutes