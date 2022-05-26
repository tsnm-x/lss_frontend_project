import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import classes from "./header.module.css";
import Logo from "../../../public/assets/Logo.svg";
import Image from "next/image";
import { AiOutlineWifi } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import ProfileImg from "../../../public/assets/profile/profile.png";

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}
const navigation = [
    { name: "Home", href: "#", current: true, icon: null },
    { name: "Live", href: "#", current: false, icon: <AiOutlineWifi /> },
    { name: "1vs1 Simulator", href: "#", current: false, icon: null },
];
function Header() {
    return (
        <>
            <Disclosure as="nav" className={classes.nav}>
                {({ open }) => (
                    <>
                        <div className=" py-4 w-full mx-auto flex items-center justify-between px-14 2xl:px-24 max-w-[1900px]">
                            {/* logo  */}
                            <Image
                                src={Logo}
                                className=" w-[70px] "
                                alt="brand-logo"
                            />
                            {/* nav bar  */}
                            <div className="hidden justify-self-center  sm:block sm:ml-6  ">
                                <div className="flex space-x-4 ">
                                    {navigation.map((item) => (
                                        <a
                                            key={item.name}
                                            href={item.href}
                                            className={` flex gap-x-3 items-center ${classNames(
                                                item.current
                                                    ? " text-white"
                                                    : " text-nav-text hover:border-nav-text ",
                                                "px-3 py-2 text-sm font-medium border-b border-transparent"
                                            )}`}
                                            aria-current={
                                                item.current
                                                    ? "page"
                                                    : undefined
                                            }
                                        >
                                            {item.name} {item.icon}
                                        </a>
                                    ))}
                                </div>
                            </div>
                            {/* Champoin Img */}
                            <div className=" flex items-center gap-x-11 ">
                                {/* search  */}

                                <FiSearch className=" text-nav-text text-base" />

                                {/* profile img  */}
                                <div className=" w-12 h-12 rounded-full border-4 border-nav-text">
                                    <Image src={ProfileImg} alt="profile img" />
                                </div>
                            </div>
                        </div>
                    </>
                )}
            </Disclosure>
        </>
    );
}

export default Header;
