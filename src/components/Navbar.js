import React, {useState} from 'react';
import {FaBars, FaTimes} from 'react-icons/fa';
import {Link} from "react-scroll";
 const Navbar = () => {
    const [menu, setMenu] = useState(false);
  const links = [
    {
      id : 1,
      link : "Home"
    },
    {
      id : 2,
      link : "About"
    },
    {
      id : 3,
      link : "Portfolio"
    },
    {
      id : 4,
      link : "Experience"
    },
    {
      id : 5,
      link : "Contact"
    },
  ]
  return (
    <>
    <div className='flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed'>
      <div>
      <h1 className='font-kanit text-4xl  ml-2'>Aditya Pathak</h1>
      </div>
      <ul className='hidden md:flex'>
      {links.map(({id,link}) =>{
       return <li key={id}   
       className='cursor-pointer text-lg capitalize text-slate-400 font-medium hover:scale-110 duration-200 px-4'>
       <Link to={link} 
     
       smooth={true} duration={500}>{link}</Link></li>
      })}
       </ul>
       <div className='text-white cursor-pointer md:hidden pr-4 z-10' onClick={() => setMenu(!menu)}>
       {menu === false ? <FaBars size={30} /> : <FaTimes size={30} />} 
       </div>
       {menu && (
        <ul className='flex flex-col absolute justify-center items-center 
        h-screen w-full top-0 left-0 bg-gradient-to-b from-black to-gray-800'>
        {links.map(({id,link}) =>{
       return <li key={id} className='cursor-pointer text-4xl py-6 text-gray-500  hover:scale-110 duration-100'>
       <Link to={link}
       onClick = {() => setMenu(!menu)}
        className="active:border-b-2" smooth={true} duration={500}>{link}</Link></li>
      })}
      </ul> 
       )}
      </div>
    </>
  )
}

export default Navbar;
