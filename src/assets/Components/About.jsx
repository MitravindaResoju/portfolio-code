import React from 'react'
import Icon from  '../Photos/Icon.png'
import  { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import About1 from '../Photos/About1.jpg'


function About() {
  useGSAP(()=>{
    gsap.from('mark',{
      css:{
        backgroundColor: 'white', 
      },
      duration:3,
      ease: 'power2.inOut',
      stagger:0.7,
    })
  })
  return (
         <div className='bg-gray-50 p-3'>
           <center className='text-3xl mt-8 -mb-2'><h1>About</h1></center> 
          <div className='flex justify-around items-center flex-col-reverse md:flex-row-reverse'>
        <div className='my-3'>
        <h1 className='text-3xl  mx-3 font-semibold my-3' >Curious about me? Here you have it:</h1>
        <p className='text-sm mx-3 my-3 text-gray-500 text-wrap md:w-[500px]'>
        A dedicated and <mark className='bg-amber-200 '>technically skilled</mark> individual with a strong foundation in computer science, holding a <mark className='bg-cyan-200'>B.Tech</mark> in <mark className='bg-cyan-200'>Computer Science and Engineering</mark>  from Velagapudi Ramakrishna Siddhartha Engineering College. I bring a diverse set of programming skills in languages like <mark className='bg-amber-200'>Python, Java, and C++,</mark> along with experience in web technologies and database management.
        </p>
        <p className='text-sm mx-3 my-3 text-gray-500 text-wrap md:w-[500px]'>
        I have contributed to projects across remote sensing, Android app development, and web-based applications, demonstrating an aptitude for problem-solving and innovation.
        </p>
        <p className='text-sm mx-3 my-3 text-gray-500 text-wrap md:w-[500px]'>
        As a <mark className='bg-red-300'>co-founder</mark> and <mark className='bg-red-300'>Chief Operating Officer</mark> of <mark className='bg-blue-200'>CS CODENZ</mark>, I developed a platform for affordable technical education and training, showing a commitment to community empowerment through tech. My work has been published and presented at <mark className='bg-lime-200'>industry conferences</mark>, and I have also served as a technical trainer, helping students and professionals upskill in universities across India. <mark className='bg-lime-200'>Passionate</mark> about continuous learning, I look forward to contributing to meaningful projects that blend technology with real-world applications.
        </p>
        <p className='text-sm mx-3 my-3 text-gray-500 text-wrap md:w-[500px]'>
        One last thing, I'm available for <mark className='bg-lime-200'>freelance</mark> work, so feel free to reach out and say hello! I promise I don't bite 😉
        </p>
        </div>

        <div>
            <img src={About1} alt=""  className='mx-3 my-10 md:my-10 size-96 w-[344px]'/>
        </div>

    </div>
    </div>
   
  )
}

export default About