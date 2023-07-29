import React from 'react'

import {MdArrowRight} from 'react-icons/md'

import HeroImage from '../assets/HeroImage.jpg'
import {Link} from 'react-scroll'

const Home = () => {
  return (
    <div
    name="home"
    className="h-full w-full bg-gradient-to-b from-black
     via-black to-gray-900 md:h-screen"
  >
    <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
      <div className="flex flex-col justify-center h-full">
        <h2 className="text-5xl font-bold text-white">
          <br className='md:hidden'/><br className='md:hidden' /><br className='md:hidden'/>
          I'm a Full Stack Developer
        </h2>
        <p className="text-white py-8 max-w-md text-2xl">
        I'm a passionate Full Stack web developer with expertise in React, 
        Tailwind, Bootstrap, Python, and Django. I love creating engaging websites 
        and staying updated with the latest technologies.
       Let's build something incredible together!
           </p>
            <div>
            <Link
              to='portfolio' smooth              
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
                    <span className='group-hover:rotate-90 duration-300'>
                    <MdArrowRight size={30} className='ml-1'/>
                    </span>
                </Link>
            </div>
        </div>
        <div>
       
           <img
            src={HeroImage}
            alt="my profile"
            className="rounded-2xl px-8 mx-auto w-2/3  md:w-half "
          />
          

        </div>
      </div>
    </div>
  )
}

export default Home
