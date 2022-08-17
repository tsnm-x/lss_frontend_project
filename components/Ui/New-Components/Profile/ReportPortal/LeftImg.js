import React from 'react'
import Image from 'next/image'
import LeftBg from "../../../../../public/assets/new-images/Profile/ReportBackdrop/left-bg.png";
import LeftHighlight from "../../../../../public/assets/new-images/Profile/ReportBackdrop/highlight-img.png";

const LeftImg = () => {
  return (
      <div className=" w-[453px] h-full relative grid grid-cols-1 grid-rows-1 items-center justify-items-center ">
          {/* background image  */}
          <div className=" relative w-full h-screen row-start-1 row-end-2 col-start-1 col-end-2 ">
              <Image src={LeftBg} alt="background image" layout="fill" />
          </div>
          {/* highlight img  */}
          <div className=" relative w-[693px] h-[591px] row-start-1 row-end-2 col-start-1 col-end-2 right-[45px]  ">
              <Image src={LeftHighlight} alt="highlight image" layout="fill" />
          </div>
      </div>
  );
}

export default LeftImg