"use client";

import {
  Tab,
  TabPanel,
  Tabs,
  TabsBody,
  TabsHeader,
} from "@/components/RemoteComponents";
import { useCheckSelection, useFetchData } from "@/services/queries";
import {
  ChatBubbleOvalLeftEllipsisIcon,
  ClipboardDocumentListIcon,
} from "@heroicons/react/24/outline";
import { usePathname } from "next/navigation";
import React from "react";
import Devis from "../../Devis";
import Négociations from "../../Négociations";

const architectDevisPage = () => {
  const pathname = usePathname();

  const id = pathname.split("/")[6];
  const ar_id = pathname.split("/")[4];
  const an_id = pathname.split("/")[3];
  const { data: architect, isLoadingArchitect } = useFetchData(
    `/archimatch_app/architect/${ar_id}/`,
    "architect",
  );
  const { data: selection, loading } = useCheckSelection(
    architect?.data?.user?.id,
    an_id,
  );
  console.log("id", id, "arch", ar_id, "ann", an_id, "sel", selection);
  const data = [
    {
      label: "Devis",
      value: "Devis",
      desc: (
        <Devis
          id={id}
          ar_id={ar_id}
          selection_id={selection?.data?.selection?.id}
        />
      ),
      icon: ClipboardDocumentListIcon,
    },
    {
      label: "Négociations",
      value: "Négociations",
      desc: <Négociations />,
      icon: ChatBubbleOvalLeftEllipsisIcon,
    },
  ];
  return (
    <>
      <div className="w-full max-w-screen-2xl m-auto md:mt-[-35px] ">
        <Tabs value="Devis" className="mt-8 ">
          <TabsHeader className="flex flex-row bg-white  shadow-md rounded-[8px] w-full md:w-[428px] self-center m-auto">
            {data.map(({ label, value, icon }) => (
              <Tab key={value} value={value}>
                <div className="flex items-center gap-2">
                  {React.createElement(icon, { className: "w-5 h-5" })}
                  {label}
                </div>
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
    </>
  );
};

export default architectDevisPage;
