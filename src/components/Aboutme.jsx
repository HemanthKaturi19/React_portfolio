import React from 'react'
import logo from '../assets/about.jpg'
import{motion} from 'framer-motion'

const Aboutme = () => {
  return (
    <div className="mt-16 p-12">
      <div className="flex justify-center">
        <h3 className="text-3xl">About</h3>
        <h3 className="text-slate-600 ml-2 text-3xl">Me</h3>
        </div>  
         <div className="flex justify-around flex-col lg:flex-row-reverse lg:p-20">
            <div className="tracking-tight h-72 max-w-Screen-xl flex justify-center  lg:items-start mt-8 lg:mt-0 lg:w-fit font-thin text-gray-100 lg:ml-8">
                <motion.p
                whileInView={{opacity:1,x:0}}
                initial={{x:100,opacity:0}}
                transition={{duration:0.5}}
                >Hi! I'm a passionate Front-End Developer specializing in React. With a keen eye for design and a love for creating seamless user experiences, I bring ideas to life through clean, efficient code.
I thrive on transforming complex concepts into intuitive interfaces and enjoy collaborating with teams to deliver innovative solutions. Whether I'm building responsive layouts or optimizing performance, I’m dedicated to crafting beautiful, functional web applications.
When I’m not coding, you can find me exploring the latest web technologies, contributing to open source projects, or diving into the world of design. Let’s connect and create something amazing together!</motion.p>
            </div>
            <div className="h-full w-full   mt-0 hidden md:block">
                <motion.img 
                whileInView={{opacity:1,x:0}}
                initial={{x:-100,opacity:0}}
                transition={{duration:0.5}}
                src={logo} alt="logo" className="rounded-md" />
            </div>
         </div>
    </div>
  )
}

export default Aboutme
