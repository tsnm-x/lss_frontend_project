import React from "react";

import { useSelector } from "react-redux";

function Loader() {
	const loading = useSelector((state) => state.loader.loader);
	let circleCommonClasses = "h-[6.5px] w-[6.5px] bg-current   rounded-full";

	return (
		<>
			{loading && (
				<div className="flex justify-center items-center">
					<div
						className={`${circleCommonClasses} mr-1 mt-1 animate-bounce`}
					></div>
					<div
						className={`${circleCommonClasses} mr-1 mt-1 animate-bounce200`}
					></div>
					<div
						className={`${circleCommonClasses} mt-1 animate-bounce400`}
					></div>
				</div>
			)}
		</>
	);
}

export default Loader;
