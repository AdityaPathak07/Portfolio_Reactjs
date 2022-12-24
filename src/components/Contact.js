import React from 'react'

const Contact = () => {
  return (
    <div name='Contact' className='w-full h-screen bg-gradient-to-b from-black to-gray-800
    p-4 text-white'> 
    <div className='flex flex-col px-4 pt-28 justify-center mx-auto h-full max-w-screen-lg '>
    <div className='pb-8'>
      <p className='text-4xl font-bold border-b-4 inline border-gray-500'>Contact</p>
      <p className='py-6'>Submit the form below to get in touch with me</p>
    </div>
    <div className='flex justify-center items-center'>
    <form action='https://getform.io/f/7a8cfe46-3c55-4680-8fe8-acf93f930cbd'
    method='POST'
     className='flex flex-col w-full md:w-1/2'>
      <input name='name' 
      type='text' 
      placeholder='Enter your Name' 
      className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'
      />
      <input name='text' 
      type='email' 
      placeholder='Enter your Email' 
      className='p-2 my-4 bg-transparent border-2 rounded-md text-white focus:outline-none'
      />
      <textarea
      name='message'
      placeholder='Enter Your Message'
      rows="10"
      className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'>
      </textarea>

      <button className='text-white bg-gradient-to-r from-cyan-500 to-blue-500
      py-3 px-6 my-8 rounded-md flex items-center hover:scale-110 duration-200 mx-auto'>Let's Talk</button>
    </form>
    </div>
    </div>
    </div>
  )
}

export default Contact