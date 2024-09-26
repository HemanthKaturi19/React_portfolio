import React from 'react'
import logo from '../assets/kevinRushProfile.jpg'
import{motion} from 'framer-motion'
const container=(delay)=>({
 hidden:{x:-100, opacity:0},
 visible:{
  x:0,
  opacity:1,
  transition:{duration:0.5,delay}
 }
})
const Hero = () => {
  return (
      <div className="flex flex-col mt-16 ml-8 width-full lg:flex-row lg:justify-around">
        <div className="flex flex-col  items-center lg:items-start ">
            <motion.h1 
            variants={container(0)}
            initial="hidden"
            animate="visible"
            className="font-thin text-6xl tracking-tight lg:text-8xl text-gray-200 mt-4">Hemanth Katuri</motion.h1>
            <motion.span 
            variants={container(0.5)}
            initial="hidden"
            animate="visible"
            className="bg-gradient-to-r from-pink-300 via-slate-500  to-violet-500 bg-clip-text text-4xl tracking-tight text-transparent mt-8">Frontend Devloper</motion.span>
            <motion.p 
            variants={container(1)}
            initial="hidden"
            animate="visible"
            className="my-2 max-w-xl font-light tracking-tight text-gray-300 mt-4">Hi there! I’m a passionate Front-End Developer with a strong focus on creating dynamic and user-friendly web applications using React.js. With a solid foundation in HTML, CSS, and JavaScript, I love transforming design concepts into interactive experiences. My goal is to build intuitive interfaces that enhance user engagement while ensuring optimal performance. I’m always eager to learn new technologies and best practices in web development to continuously improve my skills and contribute to impactful projects.</motion.p>
        </div>
         <div className="mt-4 lg:mt-none w-full lg:w-1/2 lg:p-8">
         <div className="flex justify-center">
            <motion.img 
            initial={{x:100,opacity:0}}
            animate={{x:0,opacity:1}}
            transition={{duration:1,delay:1.2}}
            src={logo} alt="logo" className="rounded-md w-3/4 h-auto"/>
         </div>
         </div>
      </div>
  )
}

export default Hero
