import React from 'react'
import Image from 'next/image'
import AnimatedImage from '../../../../../public/assets/new-images/landing-page/main-bg-sm.png'

const Main = () => {
  return (
    <main>
      <div className="container">
        {/* hightlight img  */}
        <div className=' relative w-full h-[186px] '>
          <Image src={AnimatedImage} alt="highlight image" layout='fill' />
        </div>
      </div>
    </main>
  )
}

export default Main