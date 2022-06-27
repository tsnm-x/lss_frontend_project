import React from 'react'
import Image from "next/image";
import Gold from "../../../../../../../../public/assets/new-images/Profile/card/CardExpand/Graph/gold-graph.png";


const GoldDiffCard = () => {
  return (
      <div className={`w-[782px] h-[452px] relative`}>
          <Image src={Gold} alt="Gold chart" layout="fill" />
      </div>
  );
}

export default GoldDiffCard