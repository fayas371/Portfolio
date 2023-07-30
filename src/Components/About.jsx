import React from 'react';

const About = () => {
  return (
    <div 
      name='about'
      className="w-full h-screen bg-gradient-to-b from-gray-800 
      to-black text-white"
    >
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col
        justify-center w-full h-full'
      >
        <div className='pb-8'>
          <br className='md:hidden'/><br className='md:hidden'/><br className='md:hidden'/>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About Me</p>
          <div>
            <p className='text-xl mt-20'>Hello, I'm Fayas, a former pharmacist turned IT enthusiast. After completing my pharmacy course, I realized my true passion lies in technology. Alongside my pharmacy career, I honed my programming skills in Python and React. I've had the pleasure of creating various websites, including personal blogs,
            e-commerce projects and more. Now, I'm actively seeking a rewarding career in the IT industry, motivated to excel as a programmer.
            </p>
            <br/>
            <p className='text-xl'>Nothing is possible without consistency, patience, and the dream to achieve it!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
