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
          bg-buttons-gray rounded-5px mr-[5px] desktop:px-[33px] desktop:py-3 desktop:text-lg desktop:mr-2 ${ (btnName === props.selectedMatchType) ? 'text-light-text': 'text-grayed-text'}`}>{btnName}</button>
        )
      })}
    </div>
  )
}

export default CardControlBtns