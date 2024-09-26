import React from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Aboutme from './components/Aboutme.jsx'
import Technologies from './components/Technologies.jsx'
import Projects from './components/Projects.jsx'
import Contact from './components/Contact.jsx'

const App = () => {
  return (
   <div className="overflow-x-hidden  text-neutral-300 antialiased selection bg-cyan-300 selection:text-cyan-900 ">
      <div className="absolute top-0 z-[-2] h-max w-auto px-12 bg-neutral-950 bg-radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
        <div className="container px-4 ">
        <Navbar />
        <Hero />
        <Aboutme />
        <Technologies />
         <Projects />
         < Contact />
        </div>
    </div>
</div>
    
  )
}

export default App
