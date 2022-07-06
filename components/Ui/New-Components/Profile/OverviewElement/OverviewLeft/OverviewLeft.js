import React from 'react'
import RankTierGraph from './RankTierGraph/RankTierGraph'
import OftenPlayWith from './OftenPlayWith/OftenPlayWith'

const OverviewLeft = () => {
  return (
    <aside>
      <RankTierGraph />
      <OftenPlayWith />
    </aside>
  )
}

export default OverviewLeft