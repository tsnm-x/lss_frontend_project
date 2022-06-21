import React from 'react'

const ErrorMessage = () => {
  return (
      <div className=' pt-[23px] pb-14 '>
          <h2 className=" sf-mid-20 text-white">
              Oops! Summoner ''ExampleError'' is not on the list :(
          </h2>
          <p className=' sf-regular-10 text-grayed-text mt-[11px] '>
              Make sure your spelling is correct or check these regions (he
              could have sneaked to another region).
          </p>
      </div>
  );
}

export default ErrorMessage