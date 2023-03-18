import React, { useState } from "react";
import { Popper, Button, Box, Typography } from "@mui/material";
import styles from "../../app.styles";
import { useTheme } from "@emotion/react";
import { useNavigate } from "react-router-dom";

function ConfirmationPopper({ anchor, question, confirm, proceedLink }) {
	const [anchorEl, setAnchorEl] = useState(null);
	const [open, setOpen] = useState(false);
	const theme = useTheme();
	const navigate = useNavigate();

	const handleConfirm = async () => {
		// Handle confirmation logic here
		await confirm();
		setOpen(false);
		navigate(proceedLink);
	};
	const handleButtonClick = (event) => {
		setAnchorEl(event.currentTarget);
		setOpen(true);
	};
	const handleCancel = () => {
		setOpen(false);
	};

	return (
		<Box>
			<Button onClick={handleButtonClick}>{anchor}</Button>
			<Popper open={open} anchorEl={anchorEl} sx={{ ...styles.popper__container, backgroundColor: theme.palette.primary.main }}>
				<Box sx={{ ...styles.popper }}>
					<Typography variant="p" sx={{ color: theme.palette.white.main }}>
						{question}
					</Typography>
					<Box sx={{ marginTop: "10px", display: "flex", justifyContent: "center" }}>
						<Button onClick={handleConfirm} color="secondary" variant="contained" sx={{ ...styles.button, marginRight: "10px" }}>
							Yes
						</Button>
						<Button onClick={handleCancel} color="white" variant="outlined" sx={{ ...styles.button }}>
							No
						</Button>
					</Box>
				</Box>
			</Popper>
		</Box>
	);
}

export default ConfirmationPopper;
