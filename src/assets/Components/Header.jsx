
import Icon from  '../Photos/Icon.png'
import  { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useRef } from 'react'
import landingPage from '../Photos/landingPage.png'

function Header() {
   const animationRef= useRef()
   const opacityAnimationRef=useRef()
    useGSAP(()=>{
        gsap.from(animationRef.current,{
            opacity:0,
            y:30,
            duration:2,
            delay:1,
        })
    })
    useGSAP(()=>{
        gsap.from(opacityAnimationRef.current,{
            opacity:0,
            duration:2,
            delay:3,
        })
    })
  return (
    <div>
          <div className='flex justify-around items-center flex-col md:flex-row'>
        <div className='my-12'>
        <h1 ref={animationRef} className='text-5xl  mx-3 font-semibold my-3' >Hi, I m Mitravinda👋</h1>
        <div ref={opacityAnimationRef}>
        <p  className='text-sm mx-3 my-3 text-gray-500 text-wrap md:w-96'>A hard-working individual with technical and management skills, looking for an opportunity to
dedicate my skills and knowledge and also to increase my potential by exploring various aspects
of the field.</p>

       <p  className='mx-6 flex items-center my-5'><img src={Icon} alt="" className='mr-5'/> Available for new projects</p>
       </div>
        </div>
        <div>
            <img src={landingPage} alt=""  className=' my-7 size-96 w-[350px] h-[390px]'/>
        </div>

    </div>
    </div>
  )
}

export default Header