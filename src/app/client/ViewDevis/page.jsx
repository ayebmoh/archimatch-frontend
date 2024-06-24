"use client";
import { Typography } from "@/components/RemoteComponents";
import { useRouter } from "next/navigation";
import { IoIosArrowBack } from "react-icons/io";
import Card1 from "./Card1";
import Card2 from "./Card2";
import Card3 from "./Card3";
import SelectDevis from "./SelectDevis";

import {
  Tab,
  TabPanel,
  Tabs,
  TabsBody,
  TabsHeader,
} from "@/components/RemoteComponents";
import BoiteMessgerie from "./BoiteMessgerie";
const page = () => {

  const data = [
    {
      label: "Devis",
      value: "devis",
      desc: <SelectDevis />,
      color: "blue",
    },
    {
      label: "Négociations",
      value: "boite_messgerie",
      desc: <BoiteMessgerie />,
    },
  ];
  const router = useRouter();
  const handleClickBack = () => {
    router.back();
  };
  return (
    <div className=" w-full flex flex-col bg-[#FAFBFF]  ">
      <div className=" w-full flex flex-col  mx-auto items-center ">
        <div className=" items-center">
          <div className="flex felx-col  ">
            <div className="flex flex-row items-center absolute  gap-2 mt-7   ">
              <div className="cursor-pointer ">
                <IoIosArrowBack
                  className="size-5 text-[#344054]"
                  onClick={handleClickBack}
                />
              </div>
              <Typography className="text-[#344054] text-[14px]  font-semibold">
                Retour
              </Typography>
            </div>
            <div className="flex flex-col  md:flex-row mt-16 gap-5">
              <Card1 />
              <Card2 />
            </div>
          </div>
        </div>

        <div className="justify-center mt-12 ">
          <Tabs value="devis" className=" ">
            <TabsHeader className="flex flex-row bg-white shadow-md  rounded-[8px] w-full md:w-[428px] self-center m-auto">
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

        <div className="flex flex-col ">
          <Typography className="self-start text-semibold text-[20px] text-[#344054] mt-8 ">
            Historique des devis
          </Typography>
          <Card3 />
        </div>
      </div>
    </div>
  );
};

export default page
