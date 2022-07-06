import React from 'react'

const CardControlBtns = (props) => {

  const filterMatches = (btn) => {
    props.setSelectedMatchType(btn);
  };
  return (
    <div className=''>
      {props?.ControlBtnLists.map((btnName, index) => {
        return (
          <button key={index} onClick={() => filterMatches(btnName)} className={` sf-mid-14 text-center  capitalize py-[11px] px-[30px]
          bg-buttons-gray rounded-5px mr-[5px] ${ (btnName === props.selectedMatchType) ? 'text-light-text': 'text-grayed-text'}`}>{btnName}</button>
        )
      })}
    </div>
  )
}

export default CardControlBtns