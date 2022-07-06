import React from 'react'
import Image from 'next/image'
import PowerChart from '../../../../../../../../public/assets/new-images/Profile/card/CardExpand/Graph/power-graph.png'

const PowerCard = (props) => {
  return (
    <div className={`w-[782px] h-[452px] relative`}>
      <Image src={PowerChart} alt="power chart" layout='fill' />
    </div>
  )
}

export default PowerCard