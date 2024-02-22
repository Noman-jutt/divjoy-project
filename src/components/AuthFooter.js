'use client'
import React from "react";
import Box from "@material-ui/core/Box";
import Link from "next/link";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    fontSize: "0.9rem",
    textAlign: "center",
    marginTop: theme.spacing(3),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
  spacerSmall: {
    display: "inline-block",
    width: theme.spacing(1),
  },
  spacerMedium: {
    display: "inline-block",
    width: theme.spacing(2),
  },
}));

function AuthFooter(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {props.type === "signup" && (
        <>
          {props.showAgreement && (
            <Box mb={2}>
              By signing up, you are agreeing to our{" "}
              <Link href={props.termsPath} passHref={true}>
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link href={props.privacyPolicyPath} passHref={true}>
                Privacy Policy
              </Link>
              .
            </Box>
          )}

          {props.signinText}
          <span className={classes.spacerSmall} />
          <Link href={props.signinPath} passHref={true}>
            {props.signinAction}
          </Link>
        </>
      )}

      {props.type === "signin" && (
        <>
          <Link href={props.signupPath} passHref={true}>
            {props.signupAction}
          </Link>

          {props.forgotPassAction && (
            <>
              <span className={classes.spacerMedium} />
              <Link href={props.forgotPassPath} passHref={true}>
                {props.forgotPassAction}
              </Link>
            </>
          )}
        </>
      )}

      {props.type === "forgotpass" && (
        <>
          {props.signinText}
          <span className={classes.spacerSmall} />
          <Link href={props.signinPath} passHref={true}>
            {props.signinAction}
          </Link>
        </>
      )}
    </div>
  );
}

export default AuthFooter;
