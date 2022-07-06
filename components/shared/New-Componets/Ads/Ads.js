import React from 'react'
import Image from 'next/image'
// import AdsImg from "../../../../../../public/assets/new-images/Profile/ads.png";
import AdsImg from "../../../../public/assets/new-images/Profile/ads.png";


const Ads = (props) => {
  return (
      <div className={`relative ${props.className}`}>
          <Image src={AdsImg} alt="ads image" layout="fill" />
      </div>
  );
}

export default Ads