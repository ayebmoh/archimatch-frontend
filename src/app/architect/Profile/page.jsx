"use client";
import {
  Tab,
  TabPanel,
  Tabs,
  TabsBody,
  TabsHeader,
} from "@material-tailwind/react";
import { useRouter } from "next/navigation";
import React from "react";
import ClientRatingTab from "./ClientRatingTab";
import DetailsTab from "./DetailsTab";
import ServicesTab from "./ServicesTab";
import WorkTab from "./WorkTab";
const architectPersonalInformationPage = (props) => {
  const router = useRouter();
  const { children } = props;
  const [activeTab, setActiveTab] = React.useState("Travaux");
  const data = [
    {
      label: "Travaux",
      value: "Travaux",
      desc: <WorkTab />,
    },
    {
      label: "à propos",
      value: "à propos",
      desc: <DetailsTab />,
    },
    {
      label: "Services",
      value: "Services",
      desc: <ServicesTab />,
    },
    {
      label: "Avis clients",
      value: "Avis clients",
      desc: <ClientRatingTab />,
    },
  ];
  return (
    <>
      <Tabs value={activeTab} className="  w-full">
        <TabsHeader
          className="rounded-none  bg-transparent p-0 lg:w-[50%]"
          indicatorProps={{
            className:
              "font-normal  bg-transparent border-b-2 border-client-primary shadow-none rounded-none",
          }}
        >
          {data.map(({ label, value }) => (
            <Tab
              key={value}
              value={value}
              onClick={() => setActiveTab(value)}
              className={
                activeTab === value
                  ? "text-client-primary"
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

export default architectPersonalInformationPage;
