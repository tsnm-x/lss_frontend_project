import React from 'react'
import Image from 'next/image'
import AdImage from '../../../../public/assets/new-images/landing-page/Ad.png'

const HorizontalAds = (props) => {
  return (
      <div className={`absolute w-10 max-h-[381px] h-screen right-0 top-0 ${props.className}`}>
          <Image src={AdImage} alt="right side ad" layout="fill" />
      </div>
  );
}

export default HorizontalAds