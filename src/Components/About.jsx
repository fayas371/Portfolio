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
            <p className='text-xl mt-20'>Hey there I'm Fayas. I used to work as a pharmacist.
             I discovered my love, for technology after finishing my pharmacy studies. While 
             pursuing my pharmacy career I have dedicated my time to mastering Python and React 
             programming languages. Building websites such as blogs and e-commerce projects has been 
             an enjoyable experience for me. Now I'm eagerly searching for a fulfilling job, in the IT field
             where I can work as a programmer.


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
