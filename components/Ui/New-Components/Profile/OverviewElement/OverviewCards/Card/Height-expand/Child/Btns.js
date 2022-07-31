import React from 'react'

const Btns = () => {
    const [btns, setBtns] = useState([
        { text: "overview", active: true },
        { text: "Runes", active: false },
    ]);
    return (
        <div className=" flex justify-center mt-3 mb-[10px] ml-[65px] ">
            {btns.map((btn, index) => {
                return (
                    <button
                        key={index}
                        className={` sf-bold-12 capitalize mx-[15px] ${
                            btn.active
                                ? "text-accent-color"
                                : " text-grayed-text"
                        }`}
                    >
                        {btn.text}
                    </button>
                );
            })}
        </div>
    );
};


export default Btns