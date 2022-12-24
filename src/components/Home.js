import React from 'react'
import hero from "../assets/1profile_pic.jpg"
import {BiRightArrow} from 'react-icons/bi'
import { Link } from 'react-scroll'

const Home = () => {
  return (
    <div name="Home">
    <div className='bg-gradient-to-b from-black via-black to-gray-800 h-screen w-full'>
        <div className='flex flex-col justify-center items-center
        max-w-screen-lg mx-auto h-full px-4 md:flex-row text-white'>
         <div className='flex flex-col justify-center h-full'>
            <h1 className='sm:text-4xl md:text-5xl'>I'm a Full Stack Developer</h1>
            <p className='py-4 text-lg max-w-lg'>A Dedicated And Result-Oriented Software Engineer With A BTech In Computer Science, I Am Desirous To Showcase My Skills In Programming To Generate High-End Solutions.</p>
            <Link to='Portfolio' duration={500} smooth
             className='flex cursor-pointer my-2 rounded-xl w-fit px-6 py-3 items-center
             group bg-gradient-to-r from-cyan-500 to-blue-500'>Portfolio
            <span className='group-hover:rotate-90 duration-300 px-1'><BiRightArrow size={18}/></span></Link>
         </div>
         <div className='md:mx-12'>
            <img className='rounded-2xl mx-auto w-full h-[24rem]' src={hero} alt="aditya"/>
         </div>
        </div>
    </div>
    </div>
  )
}

export default Home