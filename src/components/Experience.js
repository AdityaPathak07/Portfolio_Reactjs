import React from 'react'
import html from "../assets/html.png"
import css from "../assets/css.png"
import javascript from "../assets/javascript.png"
import reactImage from "../assets/react.png"
import nextjs from "../assets/nextjs.png"
import node from "../assets/node.png"
import github from "../assets/github.png"
import tailwind from "../assets/tailwind.png"
import mongodb from '../assets/mongodb.png'
const Experience = () => {
    const tech = [{
        id:1,
        src: html,
        title : "HTML",
        style : 'shadow-orange-500'
    },
    {
        id:2,
        src: css,
        title : "CSS",
        style : 'shadow-blue-500'
    },
    {
        id:3,
        src: javascript,
        title : "JavaScript",
        style : 'shadow-yellow-500'
    },
    {
        id:4,
        src: reactImage,
        title : "React",
        style : 'shadow-blue-500'
    },
    {
        id:5,
        src: tailwind,
        title : "Tailwind",
        style : 'shadow-sky-500'
    },
    {
        id:6,
        src: nextjs,
        title : "Next JS",
        style : 'shadow-white'
    },
    {
        id:7,
        src: node,
        title : "Nodejs",
        style : 'shadow-green-400'
    },
    {
        id:8,
        src: github,
        title : "GitHub",
        style : 'shadow-gray-500'
    },
    {
        id:9,
        src: mongodb,
        title : "MongDB",
        style : 'shadow-green-500'
    },
]
  return (
    <div className='bg-gradient-to-b from-gray-800 to-black h-screen text-white w-full ' name="Experience">
        
        <div className='px-4 pt-28 w-full h-full mx-auto max-w-screen-lg flex flex-col justify-center'>
            <div>
                <p className='text-4xl border-b-4 border-gray-500 inline'>Experience</p>
                <p className='py-6'>These are the Technologies I've worked with</p>
            </div>
            <div className='grid grid-cols-2 sm:grid-cols-3 w-full gap-8 
            text-center py-8 px-12 sm:px-0'>

            {tech.map(({id,src,title,style}) =>{
                return <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                    <img src={src} alt="hl" className='w-20 mx-auto' />
                    <p className='mt-4'>{title}</p>
                </div>
            })}
                
            </div>
        </div>
    </div>
  )
}

export default Experience