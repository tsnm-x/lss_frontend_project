import React from 'react'
import Image from 'next/image';

const ItemsWithName = (props) => {
  return (
      <div>
          <div className=' flex gap-x-1 pb-2 border-b border-mix-white-black mb-1 '>
              {props.itemList.map((img, index) => {
                  return (
                      <div className=' w-8 h-8 rounded-full ' key={index}>
                          <Image src={img} alt="item image" width={'100%'} height={'100%'} className="rounded-full" />
                      </div>
                  );
              })}
          </div>
          <h5 className=" gotham-5px-mid text-[#0A0C14] capitalize text-center ">{props.name}</h5>
      </div>
  );
}

export default ItemsWithName