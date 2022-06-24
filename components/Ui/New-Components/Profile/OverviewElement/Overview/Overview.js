import React from 'react'
import OverviewCenter from '../OverviewCenter/OverviewCenter'
import OverviewLeft from '../OverviewLeft/OverviewLeft'
import AdsImg from '../../../../../../public/assets/new-images/Profile/ads.png'
import Image from 'next/image'


const Overview = () => {
  return (
    <section>
      <div className="container">
        {/* left side  */}
        <OverviewLeft />
        {/* center  */}
        <OverviewCenter />
      </div>
    </section>
  )
}

export default Overview