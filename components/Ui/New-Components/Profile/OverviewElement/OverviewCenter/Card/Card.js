import React from 'react'
import StatusCard from '../StatusCard/StatusCard'
import RankCard from '../RankCard/RankCard'
import PlayerList from '../PlayerList/PlayerList'



const Card = (props) => {
  return (
      <div className={`rounded-5px overflow-hidden flex justify-between border-b border-background ${props.className}`} >
          <StatusCard />
          <RankCard />
          <PlayerList index={props.index} />
      </div>
  );
}

export default Card