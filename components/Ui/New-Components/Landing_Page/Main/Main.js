import React from 'react'
import Image from 'next/image'
import AnimatedImage from '../../../../../public/assets/new-images/landing-page/main-bg-sm.png'
import ProfileSearch from '../ProfileSearch/ProfileSearch'


const Main = (props) => {
  return (
    <main className={`${props.className}`}>
      <div className="container">
        {/* hightlight img  */}
        <div className=' relative w-full h-[186px] z-10 '>
          <Image src={AnimatedImage} alt="highlight image" layout='fill' />
        </div>
        {/* profile search  */}
        <ProfileSearch className=" -mt-[40px] relative z-20 " />
      </div>
    </main>
  )
}

export default Main