"use client";

import React from "react";

import {
  Tab,
  TabPanel,
  Tabs,
  TabsBody,
  TabsHeader,
} from "@material-tailwind/react";
import InviEnvoyerTab from "./InviEnvoyerTab";
import InviTab from "./InviTab";
const architectInvitationPage = (props) => {
  const { children } = props;
  const [code, setCode] = React.useState("");
  const onChange = ({ target }) => setCode(target.value);

  const [activeTab, setActiveTab] = React.useState("inviter");
  const data = [
    {
      label: "Inviter",
      value: "inviter",
      desc: <InviTab />,
    },
    {
      label: "Suivi Invitation",
      value: "suivi invitation",
      desc: <InviEnvoyerTab />,
    },
  ];

  return (
    <>
      <Tabs value={activeTab} className="  w-full">
        <TabsHeader
          className="rounded-none  bg-transparent p-0 lg:w-[300px] w-full"
          indicatorProps={{
            className:
              "bg-transparent border-b-2 border-architect-primary shadow-none rounded-none  ",
          }}
        >
          {data.map(({ label, value }) => (
            <Tab
              key={value}
              value={value}
              onClick={() => setActiveTab(value)}
              className={
                activeTab === value
                  ? "text-architect-primary"
                  : "text-architect-secondary_text_color"
              }
            >
              {label}
            </Tab>
          ))}
        </TabsHeader>
        <TabsBody>
          {data.map(({ value, desc }) => (
            <TabPanel key={value} value={value}>
              {desc}
            </TabPanel>
          ))}
        </TabsBody>
      </Tabs>
    </>
  );
};

export default architectInvitationPage;
