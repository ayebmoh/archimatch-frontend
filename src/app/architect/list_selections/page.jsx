"use client";
import { PageLayout } from "@/components";
import {
  Tab,
  TabPanel,
  Tabs,
  TabsBody,
  TabsHeader,
  Typography,
} from "@/components/RemoteComponents";

import InProgress from "./InProgress";
import SuggestionProjects from "./SuggestionProjects";

function SearchProjectPage() {
  const data = [
    {
      label: "Projet en cours",
      value: "inProgress",
      desc: <InProgress />,
    },
    {
      label: "Projets validés",
      value: "Valid",
      desc: <SuggestionProjects />,
    },
    {
      label: "Projets abandonnés",
      value: "abondoned",
      desc: <SuggestionProjects />,
    },
  ];

  return (
    <PageLayout className="">
      <div className=" relative flex flex-col items-center justify-center min-h-[309px] bg-gradient-to-r from-[#CEF0FF] to-[#E5EBFF] ">
        <Typography
          variant="h1"
          className="text-architect-font_gris text-[25px] md:text-[36px]"
        >
          {" "}
          Gestion des projets
        </Typography>
        <Typography
          variant="text"
          className="text-architect-secondary_text_color text-[16px] md:text-[20px] text-center max-w-[500px]"
        >
          {" "}
          Bénéficiez d'avantages exclusifs et de tarifs compétitifs pour
          concrétiser vos projets
        </Typography>

        <Typography
          variant="text"
          className="hidden lg:flex text-white font-bold opacity-40 text-[200px] !z-0 absolute bottom-[-75px] left-0  p-0 m-0 "
        >
          {" "}
          Archi
        </Typography>
      </div>
      {/* <Image
        alt="hero image"
        className="  w-full"
        src={Background}
        priority={true}
      /> */}
      <div className="w-full max-w-screen-xl m-auto md:mt-[-35px] ">
        <Tabs value="inProgress" className="">
          <TabsHeader className="flex flex-row bg-white rounded-[8px] w-full md:w-[600px] self-center m-auto">
            {data.map(({ label, value }) => (
              <Tab key={value} value={value}>
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
      </div>
    </PageLayout>
  );
}

export default SearchProjectPage;
