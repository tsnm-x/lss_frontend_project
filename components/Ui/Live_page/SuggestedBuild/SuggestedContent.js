import React from 'react'
import LiveContentWrap from '../../../HOC/LiveContentWrapHoc/LiveContentWrapHoc'
import ItemsWithName from '../ItemsWithName/ItemsWithName'

const SuggestedContent = (props) => {
  return (
    <div className={`${props.className}`}>
      <div className=''>
        <p className=' capitalize gotham-10px-mid text-full-dark mb-1 '>suggested build</p>
        <p className=' capitalize gotham-10px-mid text-white-blue'>{props.championName}</p>
      </div>
      {/* bottom line  */}
      <div className=' flex gap-x-2 justify-end'>
        {props.items.map((items, index) => {
          return (
              <ItemsWithName
                  key={index}
                  name={items.name}
                  itemList={items.itemsList}
              />
          );
        })}
      </div>
    </div>
  )
}

export default LiveContentWrap(SuggestedContent)