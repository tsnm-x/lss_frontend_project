import React from 'react'
import HeaderWithSearchbar from '../../components/shared/New-Componets/HeaderWithSearchbar/HeaderWithSearchbar'
import PlayerInfo from '../../components/Ui/New-Components/Profile/PlayerInfo/PlayerInfo'


const summoner = () => {
  return (
    <div>
      <HeaderWithSearchbar className=" laptop:py-[16px] " />
      <PlayerInfo />
    </div>
  )
}

export default summoner