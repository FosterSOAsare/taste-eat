import React, { useState, useEffect } from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";

import styles from "../../app.styles";

import PageDesc from "../../components/Header/PageDesc";

import Reservation from "../../components/Reservation/Reservation";
import { useTheme } from "@mui/material/styles";
import Title from "../../components/Title/Title";

import chefsData from "../../data/chefsData";

import PromoVideoImage from "../../assets/promo-video.png";
import { useParams } from "react-router-dom";
import SkillIcon from "../../components/SkillIcon/SkillIcon";

const Chef = () => {
  const [chefData, setChefData] = useState({});
  const theme = useTheme();
  const { chefId } = useParams();
  const navigate = useNavigate();

useEffect(() => {
		if (chefsData[chefId]) {
			setChefData(chefsData[chefId]);
			return;
		}
		navigate("/404");
	}, [chefId]);
 
	return (
		<>
			<PageDesc content="Chefs Single" />
       <Box sx={{ marginBlock: "70px" }}>
        <Container maxWidth="lg">
          <Box
            sx={{
              ...styles.homepage__story,
              justifyContent: "flex-start",
              gap: "40px",
              width: "80%",
              marginInline: "auto",
              alignItems: "flex-start",
            }}
          >
            <img
              src={chefData.img}
              alt=""
              className="w-[calc(50% - 30px)] h-[300px]"
            />
            </Box>


            <Box className="story__text" sx={styles.homepage__story__text}>
              <Typography
                variant="h3"
                sx={{ ...styles.homepage__story__title, fontSize: "40px" }}
              >
                {chefData.name}
              </Typography>
              <Typography
                variant="p"
                sx={{
                  ...styles.homepage__story__desc,
                  color: theme.palette.secondary.main,
                  display: "block",
                  marginBlock: "5px",
                  fontSize: "25px",
                }}
              >
                {chefData.position}
              </Typography>
              <Typography
                variant="p"
                sx={{ ...styles.homepage__story__desc, fontSize: "20px" }}
              >
                {chefData.desc}
              </Typography>
             <Typography
                variant="p"
                sx={{ ...styles.homepage__story__desc, fontSize: "20px" }}
              >
                Deadauih
              </Typography>
              {/* <Grid container sx={{ width: "100%" , backgroundColor : 'red' , height : '200px'}}>
                <Grid item md={6}>
                  <SkillIcon
                    subject="Experience"
                    details={`${chefData.experience} years of experience`}
                  >
                    <WorkOutlineOutlinedIcon
                      sx={{
                        ...styles.icon__style,
                        color: theme.palette.white.main,
                      }}
                    />
                  </SkillIcon>
                </Grid>

                <Grid item md={6}>
                  <SkillIcon subject="Mail" details={chefData.mail}>
                    <MailOutlineIcon
                      sx={{
                        ...styles.icon__style,
                        color: theme.palette.white.main,
                      }}
                    />
                  </SkillIcon>
                </Grid>
                <Grid item md={6}>
                  <SkillIcon subject="Contact Us" details={chefData.contact}>
                    <LocalPhoneOutlinedIcon
                      sx={{
                        ...styles.icon__style,
                        color: theme.palette.white.main,
                      }}
                    />
                  </SkillIcon>
                </Grid>
                <Grid item md={6}></Grid>
                <SkillIcon subject="Locate Us" details={chefData.location}>
                  <PlaceOutlinedIcon
                    sx={{
                      ...styles.icon__style,
                      color: theme.palette.white.main,
                    }}
                  />
                </SkillIcon>
                </Grid>
              </Grid> */}
            </Box>
            <Box>
              <Box
                className={{
                  ...styles.icon__container,
                  backgroundColor: theme.palette.primary.main,
                }}
              >
                <Typography variant="h6" color={theme.palette.white.main}>
                  im here
                </Typography>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>

      <Box
        sx={{
          ...styles.chef__promo,
          backgroundColor: theme.palette.primary.main,
        }}
      >
        <Container
          maxWidth="lg"
          sx={{
            ...styles.chef__promo__container,
            color: theme.palette.white.main,
          }}
        >
          <Title text="promo" />
          <Typography
            variant="h3"
            sx={{ ...styles.title, fontSize: "24px", marginBlock: "19px" }}
          >
            My Promo Video
          </Typography>

          <Box sx={styles.chef__promo__image__container}>
            <img src={PromoVideoImage} alt="" className="h-[100%] w-[100%]" />
          </Box>
        </Container>
      </Box>
      <Box sx={{ marginTop: "200px" }}></Box>
      <Reservation />
    </>
  );
};

export default Chef;
