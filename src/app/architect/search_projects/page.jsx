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

import Background from "@/assets/background.svg";
import Image from "next/image";
import MyProjects from "./MyProjects";
import ProjetsInternationale from "./ProjetsInternationale";
import SuggestionProjects from "./SuggestionProjects";
function SearchProjectPage() {
  const data = [
    {
      label: "Mes Projets",
      value: "my_projects",
      desc: <MyProjects />,
    },
    {
      label: "Suggestions Projets",
      value: "project_suggestions",
      desc: <SuggestionProjects />,
    },
    {
      label: "Projets Internationale ",
      value: "Projets Internationale ",
      desc: <ProjetsInternationale />,
    },
  ];

  return (
    <PageLayout className="">
      <div className="absolute pt-10 w-screen justify-center text-center">
        {" "}
        <Typography
          variant="h1"
          className="text-architect-font_gris text-[20px] lg:text-[36px] font-extrabold"
        >
          Gestion de Projets Architecturaux
        </Typography>
        <Typography
          variant="paragraph"
          className="text-architect-secondary_text_color text-[15px] lg:text-[20px]"
        >
          Gérez vos projets pour recevoir de nouvelles propositions
        </Typography>
      </div>
      <Image
        alt="hero image"
        className="  w-full"
        src={Background}
        priority={true}
      />
      <div className="w-full max-w-screen-xl m-auto md:mt-[-35px] ">
        <Tabs value="my_projects" className="">
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
