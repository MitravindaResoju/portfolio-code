import React from 'react'
import call from '../Photos/call.svg'
import email from '../Photos/email.svg'
import  LinkedinFill from '../Photos/LinkedinFill.png'
import GithubFill from '../Photos/GithubFill.png'

function Contact() {
  return (
    <div className='p-5'>
        <center>
            <h1 className='text-3xl mt-2'>Get in touch</h1>
            <p className='text-gray-500 my-3'>What’s next? Feel free to reach out to me if you're looking for a developer, have a query, or simply want to connect.</p>
            <div  className='flex flex-wrap justify-center items-center my-4 '>
                <img src={email} alt="" className='size-6 mt-1 mr-3'/>
                <a href="mailto:resojumitravinda@gmail.com" className='text-2xl hover:text-red-500 duration-200'>resojumitravinda@gmail.com</a>
            </div>
            <div className='flex flex-wrap justify-center items-center my-4'>
                <img src={call} alt="" className='size-6 mt-1 mr-3'/>
                <a href="tel:+91 9885778252" className='text-2xl hover:text-red-500 duration-200'>+91 9885778252</a>
            </div>

            <p className='text-gray-500 mt-10'>You may also find me on these platforms!</p>
            <div className="flex justify-center my-3">
          <a href=""><img src={GithubFill} alt="" className="mr-6" target='_blank' /></a>
          <a href=""><img src={LinkedinFill} alt="" className="mr-6" target='_blank' /></a>
        </div>
        </center>
    </div>
  )
}

export default Contact