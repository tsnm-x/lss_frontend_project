import React from "react";
import { BiCaretUp } from "react-icons/bi";

const TableControlBtns = () => {
	return (
		<div className=" flex items-center justify-start">
			<button
				className=" sf-bold-20 text-white p-[10px_50px]
                bg-card-&-content-box rounded-[23px] mr-[20px] "
			>
				Search by Champion
			</button>
			<div className=" flex ">
				<button
					className=" sf-bold-15 text-mix-white-black bg-card-&-content-box
                            p-[14px_18px] flex items-center rounded-23px mr-[20px] "
				>
					Search by Champion <BiCaretUp className=" ml-[4px] " size={16} />
				</button>
				<button
					className=" sf-bold-15 text-mix-white-black bg-card-&-content-box
                        p-[14px_18px] flex items-center rounded-23px "
				>
					Filter by Role <BiCaretUp className=" ml-[4px] " size={16} />
				</button>
			</div>
		</div>
	);
};

export default TableControlBtns;
