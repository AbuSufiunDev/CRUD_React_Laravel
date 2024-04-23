import React from 'react'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from '../layout/Layout'
import Home from '../pages/Home'
import Student from '../pages/Student'
import StudentStore from '../pages/StudentStore'

function Web() {

    const routes = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<Layout/>} >
                <Route path='' element={<Home/>}></Route>
                <Route path='student' element={<Student/>}></Route>
                <Route path='student/store' element={<StudentStore/>}></Route>
            </Route>
        )
    )

    return (
        <RouterProvider router={routes} />
    )
}

export default Web
