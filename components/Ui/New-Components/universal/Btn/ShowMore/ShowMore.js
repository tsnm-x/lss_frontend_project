import React from 'react'
import { BsChevronDown } from "react-icons/bs";
import Classes from './ShowMore.module.css'

const ShowMore = () => {
  return (
      <button className={`${Classes.BtnWrap}`}>
          <h3 className={`${Classes.BtnTxt}`}>Show more</h3>
          <BsChevronDown className=" text-[20px]  text-white mx-auto " />
      </button>
  );
}

export default ShowMore