import React from 'react'

const Logo = (props) => {
  return (
    <h1 className={` font-NEDGEN text-logo  uppercase ${props.className ? props.className: " text-[30px] leading-[40px]"}`}>lss.gg</h1>
  )
}

export default Logo;