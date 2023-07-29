import React from 'react'
import { FaGithub, FaLinkedin,FaWhatsapp,FaFacebook,FaInstagram } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";


const SocialLinks = () => {
    const yourWhatsAppNumber = "9847043803";
  
    const links=[
        {
            id:1,
            child:(
                <>
                Linked In <FaLinkedin size={30}/>
                </>

            ),
            href:'https://www.linkedin.com/in/fayas-abdulmanaf-32034a262/',
            target:"_blank",
            style:'rounded-tr-md'

        },
        {
            id:2,
            child:(
                <>
                Git Hub<FaGithub size={30}/>
                </>

            ),
            href:'https://github.com/fayas371',
            target:"_blank"
            

        },
        {
            id:3,
            child:(
                <>
                Mail<HiOutlineMail size={30}/>

                </>

            ),
            href:'mailto:fayasabdulmanaf.k@gmail.com',
            target:'blank',
        },
        {
            id:4,
            child:(
                <>
                Resume <BsFillPersonLinesFill size={30}/>
                </>

            ),
            href:'/fayas.pdf',
            style:'rounded-br-md',
            download:true
            

        },
        {
            id:5,
            child:(
                <>
                WhatsApp <FaWhatsapp size={30}/></>
            ),
            href:`https://wa.me/${yourWhatsAppNumber}`,
            target:'_blank',

        },
        {
            id:6,
            child:(
                <>
                Instagram <FaInstagram size={30}/></>
            ),
            href:'https://www.instagram.com/fayasabdulmanaf/',
            target:'_blank',

        },
        {
            id:7,
            child:(
                <>
                Facebook <FaFacebook size={30}/></>
            ),
            href:'https://www.facebook.com/fayas.abdulmanaf',
            target:'_blank',

        }
        
    ]
    
  return (

    <div className='hidden lg:flex flex-col top-[35%] left-0 fixed'>
      <ul>
        {links.map(({id,child,href,style,download})=>(
            <li key={id} className={
            "flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500"+ 
            " "+
            style
            }>
                <a
                href={href}
                className='flex justify-between items-center w-full text-white'
                download={download}
                target="_blank"
                rel="noreferrer">
                    {child}
                </a>
            </li>
        ))}
        
      </ul>
    </div>
  )
}

export default SocialLinks
