import React from "react";

const Loading = ({ sx, text_sx }) => {
	return (
		<div className={`w-full h-[300px] gap-[20px] flex justify-center items-center flex-col bg-primary ${sx}`}>
			<div className="h-auto p-[15px] w-[auto] rounded-full border-secondary border-[2px] border-r-transparent animate-spin"></div>
			<p className={`text-white tracking-[10px] ${text_sx}`}>Loading...</p>
		</div>
	);
};

export default Loading;
