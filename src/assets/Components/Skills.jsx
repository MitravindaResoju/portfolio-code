import React from 'react'
import c from '../Photos/c.svg'
import cPlus from '../Photos/cPlus.svg'
import java from '../Photos/java.svg'
import python from '../Photos/python.svg'
import js from '../Photos/js.svg'
import html5 from '../Photos/html5.svg'
import css3 from '../Photos/css3.svg'
import mysql from '../Photos/mysql.svg'
import php from '../Photos/php.svg'




function Skills() {
  return (
    <div className='flex flex-grow flex-col'> 
           <center>
            <h1 className='text-3xl mt-8'>Skills</h1>
            <p className='text-base mx-3 my-3 text-gray-500 text-wrap md:w-96'>The skills, tools and technologies I am really good at:</p>
           </center>
                <center>
                <div className='flex justify-evenly items-center flex-wrap gap-6 aspect-auto mx-12  md:gap-11 p-7 md:flex-wrap md:mx-40 '>
                    <img src={python} alt="" className=''/>
                    <img src={java} alt="" className=''/>
                    <img src={cPlus} alt="" className=''/>
                    <img src={c} alt="" className='size-[6.5rem]' />
                    <img src={mysql} alt="" className=''/>
                    <img src={html5} alt="" className=''/>
                    <img src={css3} alt="" className=''/>
                    <img src={js} alt="" className=''/>
                    <img src={php} alt="" className=''/>
                </div>
                </center>
                
          
    </div>
  )
}

export default Skills