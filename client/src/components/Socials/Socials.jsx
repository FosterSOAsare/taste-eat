import React from "react";
import { Box, Button } from "@mui/material";

import styles from "../../app.styles";

import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";

const Socials = ({ links, sx }) => {
	return (
		<Box>
			<a href={links?.instagram}>
				<span className="hidden" hidden>
					Instagram profile link
				</span>
				<InstagramIcon sx={{ ...styles.menu__icon, ...sx }} />
			</a>
			<a href={links?.facebok}>
				<span className="hidden" hidden>
					Instagram profile link
				</span>
				<FacebookOutlinedIcon sx={{ ...styles.menu__icon, ...sx }} />
			</a>
			<a href={links?.twitter}>
				<span className="hidden" hidden>
					Instagram profile link
				</span>
				<TwitterIcon sx={{ ...styles.menu__icon, ...sx }} />
			</a>
			<a href={links?.pinterest}>
				<span className="hidden" hidden>
					Instagram profile link
				</span>
				<PinterestIcon sx={{ ...styles.menu__icon, ...sx }} />
			</a>
		</Box>
	);
};

export default Socials;
