import React from 'react'
import RankTierGraph from './RankTierGraph/RankTierGraph'
import OftenPlayWith from './OftenPlayWith/OftenPlayWith'

const OverviewLeft = (props) => {
  return (
    <aside>
      <RankTierGraph
        rankSolo={props?.rankSolo}
        rankFlex={props?.rankFlex}
      />
      <OftenPlayWith/>
    </aside>
  )
}

export default OverviewLeft