import React from 'react'
import './Home.css'
import Profile from './Profile/Profile'
import Footer from './Footer/Footer'
import Navbar  from './Navbar/Navbar'
import AboutMe from './AboutMe/AboutMe'

export default function Home() {
  return (
    <div className='home-container'>
        <Navbar />
        <Profile />
        <AboutMe />
        <Footer />
    </div>
  )
}
