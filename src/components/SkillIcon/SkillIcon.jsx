import { Box, Typography } from "@mui/material";
import styles from "../../app.styles";
import { useTheme } from "@mui/material/styles";

const SkillIcon = ({children , subject , details}) => {
  const theme = useTheme();
  return (
    <Box sx={{ ...styles.icon__container }}>
      <Box
        sx={{
          ...styles.icon__wrapper,
          backgroundColor: theme.palette.primary.main,
        }}
      >
        {children}
      </Box>
      <Box>
      <Typography variant="h6" sx={{ ...styles.icon__name }}>
        {subject}
      </Typography>
      <Typography variant="h6" sx={{ ...styles.icon__details }}>
        {details}
      </Typography>

      </Box>
    </Box>
  );
};

export default SkillIcon;
