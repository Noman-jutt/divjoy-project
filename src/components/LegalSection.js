'use client'
import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Link from "next/link";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Section from "@/components/Section";
import LegalTerms from "@/components/LegalTerms";
import LegalPrivacy from "@/components/LegalPrivacy";

function LegalSection(props) {
  const validSections = {
    "terms-of-service": true,
    "privacy-policy": true,
  };

  const section = validSections[props.section]
    ? props.section
    : "terms-of-service";

  const data = {
    domain: "company.com",
    companyName: "Company",
  };

  return (
    <Section
      bgColor={props.bgColor}
      size={props.size}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
    >
      <Tabs
        value={section}
        indicatorColor="primary"
        textColor="primary"
        centered={true}
      >
        <Link
          href="/legal/terms-of-service"
          passHref={true}
          value="terms-of-service"
        >
          <Tab component="span" label="Terms of Service" />
        </Link>
        <Link
          href="/legal/privacy-policy"
          passHref={true}
          value="privacy-policy"
        >
          <Tab component="span" label="Privacy Policy" />
        </Link>
      </Tabs>
      <Box mt={5}>
        <Container>
          {section === "terms-of-service" && <LegalTerms {...data} />}

          {section === "privacy-policy" && <LegalPrivacy {...data} />}
        </Container>
      </Box>
    </Section>
  );
}

export default LegalSection;
