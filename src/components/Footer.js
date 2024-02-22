'use client'
import React from "react";
import Container from "@material-ui/core/Container";
import Link from "next/link";
import Typography from "@material-ui/core/Typography";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import { makeStyles } from "@material-ui/core/styles";
import Section from "@/components/Section";
import { useDarkMode } from "@/util/theme";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  sticky: {
    marginTop: "auto",
  },
  wrapper: {
    display: "flex",
    flexWrap: "wrap",
  },
  item: {
    display: "flex",
    flex: "none",
    justifyContent: "center",
    width: "100%",
    marginBottom: 24,
    [theme.breakpoints.up("sm")]: {
      flex: "50%",
    },
  },
  brand: {
    display: "block",
    height: 32,
  },
  social: {
    alignItems: "flex-end",
  },
  link: {
    color: "inherit",
    lineHeight: 1,
    "&:not(:last-of-type)": {
      marginRight: "1.2rem",
    },
  },
  left: {
    [theme.breakpoints.up("sm")]: {
      justifyContent: "flex-start",
    },
  },
  right: {
    [theme.breakpoints.up("sm")]: {
      justifyContent: "flex-end",
    },
  },
  // Move links to end (bottom right)
  // Swaps position with social
  smallLinks: {
    [theme.breakpoints.up("sm")]: {
      order: 1,
    },
  },
  legal: {
    opacity: 0.6,
    fontSize: "0.875rem",
    "& a": {
      color: "inherit",
      marginLeft: "0.8rem",
    },
  },
  linkWrapper: {
    gap: '1.2rem',
    '& a:hover': {
      textDecoration: 'underline'
    }
  }
}));

function Footer(props) {
  const classes = useStyles();

  const darkMode = useDarkMode();
  // Use inverted logo if specified
  // and we are in dark mode
  const logo =
    props.logoInverted && darkMode.value ? props.logoInverted : props.logo;

  return (
    <Section
      bgColor={props.bgColor}
      size={props.size}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
      className={props.sticky && classes.sticky}
    >
      <Container>
        <div className={classes.wrapper}>
          <div className={`${classes.item} ${classes.left}`}>
            <Link href="/">
              <img src={logo} alt="Logo" className={classes.brand} />
            </Link>
          </div>
          <div
            className={`${classes.item} ${classes.right} ${classes.smallLinks}`}
          >
            <Box display='flex' alignItems='center' className={classes.linkWrapper}>
              <Link href="/about" passHref={true}>
                <Typography className={classes.link}>About</Typography>
              </Link>
              <Link href="/faq" passHref={true}>
                <Typography className={classes.link}>FAQ</Typography>
              </Link>
              <Link href="/contact" passHref={true}>
                <Typography className={classes.link}>Contact</Typography>
              </Link>
              <Link
                href="https://medium.com"
                target="_blank"
                rel="noreferrer"
              >
                <Typography className={classes.link}>
                  Blog
                </Typography>
              </Link>
            </Box>
          </div>
          <div className={`${classes.item} ${classes.right} ${classes.social}`}>
            <Link
              href="https://twitter.com/divjoy"
              target="_blank"
              rel="noreferrer"
              className={classes.link}
            >
              <TwitterIcon fontSize="small" />
            </Link>
            <Link
              href="https://facebook.com/DivjoyOfficial"
              target="_blank"
              rel="noreferrer"
              className={classes.link}
            >
              <FacebookIcon fontSize="small" />
            </Link>
            <Link
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className={classes.link}
            >
              <InstagramIcon fontSize="small" />
            </Link>
          </div>
          <span className={`${classes.item} ${classes.legal} ${classes.left}`}>
            {props.copyright}
            <Link href="/legal/terms-of-service" passHref={true}>
              Terms
            </Link>
            <Link href="/legal/privacy-policy" passHref={true}>
              Privacy
            </Link>
          </span>
        </div>
      </Container>
    </Section>
  );
}

export default Footer;
