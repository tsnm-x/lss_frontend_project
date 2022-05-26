import React from 'react'
import ProfileCardWrapHoc from '../../../HOC/ProfileCardWrapHoc'
import TierGraphImg from '../../../../public/assets/graph/Group 362.png'
import Image from 'next/image';


const TierGraph = () => {
  return (
    <div>
      <div className=' w-11/12 mx-auto'>
        <Image src={TierGraphImg} alt="Tier graph image" />
      </div>
    </div>
  )
}

export default ProfileCardWrapHoc(TierGraph);