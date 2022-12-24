import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import {BsFillPersonCheckFill} from 'react-icons/bs';
import resume from "../assets/portfolio/Aditya_Pathak.pdf"
const Social = () => {
  const atag = [
    {
      id:1,
      name : "LinkedIn",
      href : "https://www.linkedin.com/in/aditya-pathak-72753910a/",
      icon : <FaLinkedin size={25}/>,
      style : "rounded-tr-md"
    },
    {
      id:2,
      name : "GitHub",
      href : "https://github.com/AdityaPathak07?tab=repositories",
      icon : <FaGithub size={25}/>
    },
    {
      id:3,
      name : "Mail",
      href : "mailto:adityaamaniphone@gmail.com",
      icon : <HiOutlineMail size={25}/>
    },
    {
      id:4,
      name : "Resume",
      href : resume,
      icon : <BsFillPersonCheckFill size={25}/>,
      style : "rounded-br-md",
      download : true
    },] 
  return (
    <div className='hidden top-[35%] left-0 lg:flex flex-col fixed'>
        <ul>
        {atag.map(({id,name,icon, href, style, download}) =>{
            return <li key={id} className={`flex items-center justify-between h-14 w-40 px-4 bg-gray-500 ml-[-110px] hover:ml-[-10px] duration-[400ms] hover:rounded-md ${style}`}>
                <a 
                href={href} 
                target="_blank" 
                download={download} 
                rel="noreferrer"
                className='flex justify-between items-center w-full text-white'>
                {name} {icon} </a>
            </li>   
        })}
        </ul>
    </div>
  )
}

export default Social