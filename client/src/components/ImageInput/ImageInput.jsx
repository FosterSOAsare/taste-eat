import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useTheme } from "@mui/material/styles";

import readImage from "../../hooks/readImage";

const ImageInput = ({ name = "image", label, handleChange, sx, image }) => {
	const [imageData, setImageData] = useState(image);
	const theme = useTheme();

	useEffect(() => {});

	return (
		<Box className="addImage" sx={sx}>
			<label htmlFor={name} className="flex items-center justify-start gap-[10px]">
				<Box sx={{ width: "120px", height: "70px", backgroundColor: theme.palette.desc.main, display: "flex", alignItems: "center", justifyContent: "center" }}>
					{!imageData && <AddIcon sx={{ fontSize: "28px" }} color="secondary" />}
					{imageData && <img src={imageData} alt="Uploaded lead" className="w-full h-full" />}
				</Box>
				{imageData ? "Change " : "Add "}
				{label}
			</label>
			<input
				type="file"
				accept="image/png, image/gif, image/jpeg"
				aria-label={label}
				onChange={async (e) => {
					handleChange(name, e.currentTarget.files[0]);
					if (e.target.files[0]) {
						let imageData = await readImage(e.target.files[0]);
						setImageData(imageData);
					}
				}}
				id={name}
				className="hidden"
			/>
		</Box>
	);
};

export default ImageInput;
