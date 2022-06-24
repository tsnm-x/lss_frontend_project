import React from 'react'
import OverviewCenter from '../OverviewCenter/OverviewCenter'
import OverviewLeft from '../OverviewLeft/OverviewLeft'
import AdsImg from '../../../../../../public/assets/new-images/Profile/ads.png'
import Image from 'next/image'


const Overview = () => {
  return (
    <section className=' mt-[60px] '>
      <div className="container laptop:grid laptop:grid-cols-[220px_825px] laptop:gap-x-[22px]">
        {/* left side  */}
        <OverviewLeft />
        {/* center  */}
        <OverviewCenter />
      </div>
    </section>
  )
}

export default Overview