import React from 'react';
import { FaGithub, FaLinkedin,FaWhatsapp } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const SocialLinksmobile = () => {
  const yourWhatsAppNumber='98470439803'
  const links = [
    {
      id: 1,
      child: <FaLinkedin size={30} />,
      href: 'https://linkedin.com',
      target: "_blank",
      style: 'rounded-tr-md',
    },
    {
      id: 2,
      child: <FaGithub size={30} />,
      href: 'https://github.com/fayas371',
      target: "_blank",
    },
    {
      id: 3,
      child: <HiOutlineMail size={30} />,
      href: 'mailto:fayasabdulmanaf.k@gmail.com',
      target: 'blank',
    },
    {
      id: 4,
      child: <BsFillPersonLinesFill size={30} />,
      href: '/fayas.pdf',
      style: 'rounded-br-md',
      download: true,
    },
    {
    id:5,
    child:(
    <>
    <FaWhatsapp size={30}/></>
    ),
    href:`https://wa.me/${yourWhatsAppNumber}`,
    target:'_blank',

    },
    
  ];

  return (
    <div className='md:hidden flex flex-col items-center'>
      <ul className='flex'> {/* Use flex class here */}
        {links.map(({ id, child, href, style, download }) => (
          <li
            key={id}
            className={
              "flex justify-between items-center " +
              style
            }
          >
            <a
              href={href}
              className='flex justify-between items-center w-full text-white px-3'
              download={download}
              target="_blank"
              rel="noreferrer"
            >
               {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinksmobile;
