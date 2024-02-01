import React from 'react'
import Navbar from '../Navbar/Navbar'
import './landing.css'
import Footer from '../Footer/Footer'
const Landing = () => {
  return (
    <div className='lBody'>
      <Navbar />
      <h1 className='h11'>Taste meets Wellness</h1>
        <h5 className='h55'>Take the guesswork out of meal planning with our user-friendly meal planner tool. Tailor your weekly menu to your
            dietary goals, create shopping lists with a click, and embrace a healthier lifestyle without the stress.</h5>
        <a href="/"><button type="button" className="btn btn-landing btn-warning">Get Started</button></a>

        <Footer />
    </div>
    
  )
}

export default Landing
