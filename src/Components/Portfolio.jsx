import React from 'react'
import Proshop from '../assets/portfolio/Proshop.jpg'
import Blog from '../assets/portfolio/blog.jpg'
import Ecommerce from '../assets/portfolio/Easyshop.jpg'


const Portfolio = () => {
    const portfolios=[{
        id:1,
        title:'Proshop',
        src:Proshop,
        href:'https://github.com/fayas371/E-commerce',
        target:"_blank",
    },
    {
        id:2,
        src:Blog,
        title:'My blog',
        href:'https://github.com/fayas371/Blog',
        target:"_blank",

    },{
        id:3,
        src:Ecommerce,
        title:'Easyshop',
        href:'https://github.com/fayas371/Ecommerce-django',
        target:"_blank",
    },
]
  return (
    <div name='portfolio' 
    className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='py-8'>
            <br /><br /><br /><br />
            <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
            <p className='py-6'>Check out some of the work by here</p>

        </div>
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
            {portfolios.map(({id,src,href,target,title})=>(
                <div key={id}
                className='shadow-md shadow-gray-600 rounded-lg'>
                    <center>
                    <p className='px-6 py-3  duration-200 hover:scale-105'>{title}</p>
                    </center>
                    <img src={src} alt="" 
                    className='rounded-md duration-200 hover:scale-105'/>
                    <div className='flex items-center justify-center '>
                    
                    
                    <button className='px-6 py-3 m-4 duration-200 hover:scale-105'><a href={href} target={target}> Code</a></button>
                    </div>
                </div>
            ))}
            
        </div>
      </div>
    </div>
  )
}

export default Portfolio
