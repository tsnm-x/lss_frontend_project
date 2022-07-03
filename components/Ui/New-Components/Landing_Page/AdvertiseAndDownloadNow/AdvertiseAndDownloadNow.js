import React from 'react'
import Classes from './AdvertiseAndDownloadNow.module.css'

const AdvertiseAndDownloadNow = (props) => {
  return (
    <section className={` ${Classes.section} ${props.className}`}>
      <div className="container h-full">
        <div className=' h-full flex justify-around items-center'>
          <h3 className=' text-center capitalize font-sf-pro-text text-[8px] font-bold leading-[10px] text-white '>advertisement example 2</h3>
          <h3 className=' text-center capitalize font-sf-pro-text text-[8px] font-bold leading-[10px] text-white '>download now</h3>
        </div>
      </div>
    </section>
  )
}

export default AdvertiseAndDownloadNow