import React from 'react'
import CardControlBtns from './CardControlBtns/CardControlBtns'
import Card from './Card/Card'

const OverviewCenter = () => {
  return (
    <aside>
      <CardControlBtns />
      {/* card container  */}
      <div className=' mt-5'>
        <Card />
      </div>
    </aside>
  )
}

export default OverviewCenter