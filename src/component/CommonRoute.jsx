import React from 'react'
import Header from './commonComponent/Header'
import { Outlet } from 'react-router-dom'
import Footer from './commonComponent/Footer'

export default function CommonRoute() {
  return (
    <div>
        <Header/>
        <Outlet/>
        <Footer/>

      
    </div>
  )
}
