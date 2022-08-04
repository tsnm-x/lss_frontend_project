import React from 'react'
import Link from "next/link";

const Logo = (props) => {
  return (
      <Link href="/">
          <h1
              className={` font-NEDGEN text-[#D55460]  uppercase ${
                  props.className
                      ? props.className
                      : " text-[30px] leading-[40px]"
              }`}
          >
              lss.gg
          </h1>
      </Link>
  );
}

export default Logo;