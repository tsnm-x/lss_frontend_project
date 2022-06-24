import React from 'react'
import HeaderWithSearchbar from '../../components/shared/New-Componets/HeaderWithSearchbar/HeaderWithSearchbar'
import PlayerInfo from '../../components/Ui/New-Components/Profile/PlayerInfo/PlayerInfo'
import OverviewChampion from '../../components/Ui/New-Components/Profile/OverviewChampion/OverviewChampion'
import Table from '../../components/Ui/New-Components/Profile/TableElement/Table/Table'
import Overview from '../../components/Ui/New-Components/Profile/OverviewElement/Overview/Overview'


const summoner = () => {
  return (
    <div>
      <HeaderWithSearchbar className=" laptop:py-[16px] " />
      <PlayerInfo />
      <OverviewChampion />
      {/* <Table /> */}
      <Overview />
    </div>
  )
}

export default summoner