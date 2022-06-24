import React from 'react'
import StatusCard from '../StatusCard/StatusCard'
import RankCard from '../RankCard/RankCard'
import PlayerList from '../PlayerList/PlayerList'



const Card = () => {
  return (
    <div className=' rounded-5px overflow-hidden flex justify-between '>
      <StatusCard />
      <RankCard />
      <PlayerList />
    </div>
  )
}

export default Card