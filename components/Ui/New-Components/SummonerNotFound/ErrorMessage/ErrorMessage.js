import React from 'react'

const ErrorMessage = () => {
  return (
      <div className='  '>
      <h2 className=" sf-mid-20 text-white mobile:max-w-[290px] smTablet:sf-mid-41
          smTablet:max-w-[595px] ">
              Oops! Summoner ''ExampleError'' is not on the list :(
          </h2>
      <p className=' sf-regular-10 text-grayed-text mt-[11px] mobile:max-w-[240px] smTablet:sf-regular-25 smTablet:max-w-[585px]
            smTablet:mt-[4px] '>
              Make sure your spelling is correct or check these regions (he
              could have sneaked to another region).
          </p>
      </div>
  );
}

export default ErrorMessage