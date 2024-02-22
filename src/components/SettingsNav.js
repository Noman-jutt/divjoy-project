import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Link from "next/link";

function SettingsNav(props) {
  return (
    <Tabs
      value={props.activeKey}
      indicatorColor="primary"
      textColor="primary"
      centered={true}
    >
      <Link href="/settings/general" passHref={true} value="general">
        <Tab label="General" />
      </Link>
      <Link href="/settings/password" passHref={true} value="password">
        <Tab label="Password" />
      </Link>
      <Link href="/settings/billing" passHref={true} value="billing">
        <Tab label="Billing" />
      </Link>
    </Tabs>
  );
}

export default SettingsNav;
