import React from 'react'

const SkirmishSimulatorAppBtn = (props) => {
  return (
      <button
          className={`text-center capitalize text-white
          bg-[#D55460] rounded-xl p-[6px_11.5px] laptop:sf-bold-20 ${props.className}`}
      >
          Skirmish Simulator App
      </button>
  );
}

export default SkirmishSimulatorAppBtn