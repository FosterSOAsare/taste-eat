import React from "react";
import { Box, Container, Accordion, AccordionSummary, AccordionDetails, Typography } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import styles from "../../app.styles";
import faqData from "../../data/faqData";

import PageDesc from "../../components/Header/PageDesc";
import Title from "../../components/Title/Title";

const FaqPage = () => {
	return (
		<>
			<PageDesc content="FAQ" />
			<Box sx={{ marginBlock: "70px" }}>
				<Container maxWidth="lg" sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
					<Title text="Questions" />
					<Typography variant="h3" sx={{ ...styles.title, fontSize: "32px", marginTop: "20px" }}>
						Frequently Asked Questions
					</Typography>
					<Box sx={{ marginTop: "30px", width: "70%" }}>
						{faqData.map((e, index) => (
							<Accordion key={index} sx={{ marginBottom: "20px", borderRadius: "0" }}>
								<AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2a-content" id="panel2a-header">
									<Typography>{e.question}</Typography>
								</AccordionSummary>
								<AccordionDetails>
									<Typography sx={{ opacity: "0.7", fontSize: "14px" }}>{e.answer}</Typography>
								</AccordionDetails>
							</Accordion>
						))}
					</Box>
				</Container>
			</Box>
		</>
	);
};

export default FaqPage;
