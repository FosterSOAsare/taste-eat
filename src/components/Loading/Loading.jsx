import React from "react";

const Loading = () => {
	return (
		<div className="w-full h-[300px] gap-[20px] flex justify-center items-center flex-col bg-primary">
			<div className="h-auto p-[15px] w-[auto] rounded-full border-secondary border-[2px] border-r-transparent animate-spin"></div>
			<p className="text-white tracking-[10px]">Loading...</p>
		</div>
	);
};

export default Loading;
