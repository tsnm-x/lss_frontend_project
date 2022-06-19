import React from 'react'
import Image from 'next/image'
import AnimatedImage from '../../../../../public/assets/new-images/landing-page/main-bg-sm.png'
import ProfileSearch from '../ProfileSearch/ProfileSearch'


const Main = (props) => {
  return (
    <main className={`${props.className}`}>
      <div className="container desktop:max-w-[1070px] desktop:relative ">
        {/* hightlight img  */}
        <div className=' relative w-full h-[186px] z-10 desktop:h-[666px] '>
          <Image src={AnimatedImage} alt="highlight image" layout='fill' />
        </div>
        {/* profile search  */}
        <ProfileSearch className=" -mt-[40px] relative z-20 desktop:absolute desktop:mt-0 desktop:top-0 " />
      </div>
    </main>
  )
}

export default Main