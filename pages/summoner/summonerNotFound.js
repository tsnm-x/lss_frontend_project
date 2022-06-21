import React from 'react'
import HeaderWithSearchbar from '../../components/shared/New-Componets/HeaderWithSearchbar/HeaderWithSearchbar';
import ErrorComponent from '../../components/Ui/New-Components/SummonerNotFound/ErrorComponent/ErrorComponent';


const summonerNotFound = () => {
  return (
      <>
          <HeaderWithSearchbar />
          <ErrorComponent className=" h-[88vh] absolute left-0 bottom-0 w-screen"  />
      </>
  );
}

export default summonerNotFound;