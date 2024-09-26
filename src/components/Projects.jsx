import React from 'react'
import Project from './Project';
import task from '../assets/task_manage.jpg'
import job from '../assets/jobs_app.webp'
import gpt from '../assets/gpt3_portfolio.webp'
import{motion} from 'framer-motion'

const Projects = () => {
    const project1={
        name:"Task Management",
        logo:task,
        matter:"An applicatiom for managing taks and projects, with features such as taskcreation,assignment and progress tracking.",
        tech:['HTML','CSS','React','Firebase']
    };
    const project2={
        name:"Job Listing",
        logo:job,
        matter:"Job Listing application includes features for searching jobs, uploading new job postings, and deleting existing job listings.",
        tech:['HTML','CSS','React','Tailwind']
    };
    const project3={
        name:"GPT-3 User Interface",
        logo:gpt,
        matter:"An User friendly and adaptable to various screen sizes User Interface for interacting with OpenAI's GPT-3.",
        tech:['HTML','CSS','React','Tailwind']
    };
  return (
    <div className="pb-8 mb-12 border-b border-neutral-900">
        <div className="flex justify-center ">
        <motion.h1 
        whileInView={{opacity:1,y:0}}
        initial={{opacity:0,y:-50}}
        transition={{duration:1.5}}
        className="font-thin text-3xl">Projects</motion.h1>
        </div>
        <div className="">
            <Project project={project1}/>
            <Project project={project2}/>
            <Project project={project3}/>
        </div>
    </div>
  )
}

export default Projects
