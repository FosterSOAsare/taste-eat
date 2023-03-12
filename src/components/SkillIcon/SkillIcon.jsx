import { Box, Typography } from "@mui/material";
import styles from "../../app.styles";
import { useTheme } from "@mui/material/styles";

const SkillIcon = ({ children, subject, details }) => {
	const theme = useTheme();
	return (
		<Box sx={{ ...styles.icon__container, width: "95" }}>
			<Box sx={{ ...styles.icon__wrapper, backgroundColor: theme.palette.primary.main }}>{children}</Box>
			<Box sx={{ width: "calc(100% - 50px)", height: "auto" }}>
				<Typography variant="h6" sx={{ ...styles.icon__name, fontSize: "20px" }}>
					{subject}
				</Typography>
				<Typography variant="h6" sx={{ ...styles.icon__details, ...styles.desc, fontSize: "12px" }}>
					{details}
				</Typography>
			</Box>
		</Box>
	);
};

export default SkillIcon;
