'use client'
import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Link from "next/link";
// import makeStyles from '@mui/styles/makeStyles';
import Section from "@/components/Section";
import SectionHeader from "@/components/SectionHeader";
import { style } from "./style";
// import { style } from "./style";

// const useStyles = makeStyles((theme) => ({
//   // Increase <Container> padding so it's
//   // at least half of <Grid> spacing to
//   // avoid horizontal scroll on mobile.
//   // See https://material-ui.com/components/grid/#negative-margin
//   container: {
//     padding: `0 ${theme.spacing(3)}`,
//   },
//   image: {
//     margin: "0 auto",
//     maxWidth: 570,
//     display: "block",
//     height: "auto",
//     width: "100%",
//   },
// }));

 

function HeroSection(props) {
  // const classes = useStyles();

  return (
    <Section
      bgColor={props.bgColor}
      size={props.size}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
    >
      <Container sx={style.container} >
        <Grid container={true} alignItems="center" spacing={6}>
          <Grid container={true} item={true} direction="column" xs={12} md={6}>
            <Box textAlign={{ xs: "center", md: "left" }}>
              <SectionHeader
                title={props.title}
                subtitle={props.subtitle}
                size={4}
              />
              <Link href={props.buttonPath} passHref={true}>
                <Button
                  variant="contained"
                  size="large"
                  color={props.buttonColor}
                >
                  {props.buttonText}
                </Button>
              </Link>
            </Box>
          </Grid>
          <Grid item={true} xs={12} md={true}>
            <figure>
              <img
                src={props.image}
                alt="illustration"
                // className={style.image}
                style={style.image}
              />
            </figure>
          </Grid>
        </Grid>
      </Container>
    </Section>
  );
}

export default HeroSection;
