import React from 'react'
import HeaderWithSearchbar from '../../components/shared/New-Componets/HeaderWithSearchbar/HeaderWithSearchbar'
import PlayerInfo from '../../components/Ui/New-Components/Profile/PlayerInfo/PlayerInfo'
import OverviewChampion from '../../components/Ui/New-Components/Profile/OverviewChampion/OverviewChampion'

const summoner = () => {
  return (
    <div>
      <HeaderWithSearchbar className=" laptop:py-[16px] " />
      <PlayerInfo />
      <OverviewChampion />
    </div>
  )
}

export default summoner