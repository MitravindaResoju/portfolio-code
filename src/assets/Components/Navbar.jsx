import React from 'react'
import { IoIosMenu } from "react-icons/io";
import Mitravinda from  '../Photos/Mitravinda.png';


function Navbar() {
    const  [isOpen, setIsOpen] = React.useState(false);
    const toggle = () => {
        setIsOpen(!isOpen);
        }
  return (
    <div>
        <div>
        <nav className='flex justify-around items-center pt-5 mb-5'>
            <span><img src={Mitravinda} alt   =""  className='ml-4 shrink-0 w-[80%] lg:w-[50%] lg:ml-40'/></span>
            <ul className="flex justify-around hidden md:flex">
                <li className="mr-4 hover:text-red-500 duration-200 md:mr-10"><a href="#Home">Home</a></li>
                <li className="mr-4 hover:text-red-500 duration-200 md:mr-10"><a href="#About">About Me</a></li>
                <li className="mr-4 hover:text-red-500 duration-200 md:mr-10"><a href="#Experience">Experience</a></li>
                <li className="mr-4 hover:text-red-500 duration-200 md:mr-10"><a href="#Contact">Contact Me</a></li>
            </ul>
            <div className='mr-4 flex justify-around items-center'>
                <button className='bg-black text-white rounded-xl p-3 w-40 mx-6'>Download CV</button>
            <button onClick={toggle} className="md:hidden z-50"><IoIosMenu style={{height:40,width:40}}/></button>
            </div>  
            {isOpen && <div className='bg-gray-200 absolute w-screen h-screen top-0'>
                    <center className='flex justify-around flex-col pt-40 text-2xl'>
                    <a href="" className='mb-5'>Home</a>
                    <a href="" className='mb-5'>About Me</a>
                    <a href="" className='mb-5'>Experience</a>    
                    <a href="" className='mb-5'>Contact Me</a>    
                    </center>
                </div>}
        </nav>

    </div>
    </div>
  )
}

export default Navbar