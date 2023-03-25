import React, { useState, useReducer } from "react";
import { Popper, Button, Box, Typography } from "@mui/material";
import { useTheme } from "@emotion/react";

import styles from "../../app.styles";
import { statusFunc } from "../Snackbar/status.service";

import Snackbar from "../Snackbar/Snackbar";
function ConfirmationPopper({ anchor, question, confirm, proceedLink, anchorType, successMessage, sx }) {
	const [anchorEl, setAnchorEl] = useState(null);
	const [open, setOpen] = useState(false);
	const theme = useTheme();
	const [status, statusDispatchFunc] = useReducer(statusFunc, { error: null, success: null, waiting: null });

	const handleConfirm = async () => {
		try {
			// Handle confirmation logic here
			await confirm();
			setOpen(false);
			statusDispatchFunc({ type: "setSuccess", payload: successMessage });
		} catch (error) {
			console.error(error);
			setOpen(false);
		}
	};
	const handleButtonClick = (event) => {
		setAnchorEl(event.currentTarget);
		setOpen(true);
	};
	const handleCancel = () => {
		setOpen(false);
	};

	return (
		<>
			<Box sx={{ position: "relative" }}>
				{anchorType === "button" && <Box onClick={handleButtonClick}>{anchor}</Box>}
				{anchorType !== "button" && <Button onClick={handleButtonClick}>{anchor}</Button>}
				<Popper open={open} anchorEl={anchorEl} sx={{ ...styles.popper__container, backgroundColor: theme.palette.footerBg.main, ...sx }}>
					<Box sx={{}}>
						<Typography variant="p" sx={{ color: theme.palette.white.main, textAlign: "center", display: "block" }}>
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
			{status.success && <Snackbar close={() => statusDispatchFunc({ type: "clearStatus" })} text={status.success} link={proceedLink} />}
		</>
	);
}

export default ConfirmationPopper;
