import React from 'react'
import nft from '../assets/nft.png'
import resume from '../assets/resume.jpg'
import pokemon from '../assets/pokemon.jpg'
import React_note from '../assets/React_note.png'
import portfolio_js from '../assets/portfolio_js.png'
import simon from '../assets/simon.png'
const Portfolio = () => {
    const portfolios = [
        {
            id:1,
            title : "NFT MarketPlace (Nextjs)",
            demo_url :"https://with-tailwindcss-qh526ica2-adityapathak07.vercel.app/",
            code_url : "https://github.com/AdityaPathak07/OpenA_NFT_MarketPlace",
            src: nft
        },
        {
            id:2,
            title : "Resume Builder",
             demo_url :"https://adityapathak07.github.io/Resume_Builder/",
            code_url : "https://github.com/AdityaPathak07/Resume_Builder",
            src: resume
        },
        {
            id:3,
            title : "Pokemon Finder",
             demo_url :"https://adityapathak07.github.io/Pokemon-Finder/",
            code_url : "https://github.com/AdityaPathak07/Pokemon-Finder",
            src: pokemon
        },
        {
            id:4,
            title : "Keeper Note",
             demo_url :"https://adityapathak07.github.io/React-Note-App/",
            code_url : "https://github.com/AdityaPathak07/React-Note-App",
            src: React_note
        },
        {
            id:5,
            title : "Portfolio (HTML,CSS,JavaScript)",
             demo_url :"https://adityapathak07.github.io/Portfolio/",
            code_url : "https://github.com/AdityaPathak07/Portfolio",
            src: portfolio_js
        },
        {
            id:6,
            title : "Memory Gane (Simon-Game)",
             demo_url :"https://with-tailwindcss-qh526ica2-adityapathak07.vercel.app/",
            code_url : "https://github.com/AdityaPathak07/OpenA_NFT_MarketPlace",
            src: simon
        }
    ]
  return (
    <div name="Portfolio" className='bg-gradient-to-b from-black to-gray-800 text-white md:h-screen w-full'>
    <div className='px-4 pt-32 max-w-screen-lg mx-auto flex flex-col justify-center w-full h-full'>
        <div>
            <p className='text-4xl font-bold border-b-4 border-gray-500 inline'>Portfolio</p>
            <p className='py-6'>Check out some of my work right here</p>
        </div>
        <div className='px-12 grid sm:grid-cols-2 md:grid-cols-3 gap-8 sm:px-0'>
        {portfolios.map(({id,title,demo_url,code_url,src}) =>{
            return <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
             <img src={src} alt="wether" className='h-40 w-80  rounded-md duration-200 hover:scale-105'/>
             <p className='flex justify-center pt-6 text-xl hover:text-cyan-300 '>{title}</p>
             <div className='flex items-center justify-center'>
                <a rel="noreferrer" href={demo_url} target="_blank" className='w-1/2 px-6  m-4 duration-200 hover:scale-105'>Demo</a>
                <a rel="noreferrer" href={code_url} target="_blank" className='w-1/2 px-6  m-4 duration-200 hover:scale-105'>Code</a>
             </div>
            </div>
        })}
        </div>
    </div>
    </div>
  )
}

export default Portfolio