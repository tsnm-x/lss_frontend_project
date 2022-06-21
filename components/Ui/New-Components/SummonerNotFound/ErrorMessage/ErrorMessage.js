import React from 'react'

const ErrorMessage = () => {
  return (
      <div className='  '>
          <h2 className=" sf-mid-20 text-white mobile:max-w-[290px] ">
              Oops! Summoner ''ExampleError'' is not on the list :(
          </h2>
          <p className=' sf-regular-10 text-grayed-text mt-[11px] mobile:max-w-[240px] '>
              Make sure your spelling is correct or check these regions (he
              could have sneaked to another region).
          </p>
      </div>
  );
}

export default ErrorMessage