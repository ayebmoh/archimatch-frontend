"use client";
import FileDownload from "@/assets/FileDownload.svg";
import { MainCard } from "@/components";
import {
  ChatBubbleOvalLeftEllipsisIcon,
  ClipboardDocumentListIcon,
} from "@heroicons/react/24/outline";
import { Typography } from "@material-tailwind/react";
import Devis from "./Devis";
import Négociations from "./Négociations";

const architectManagerSelectionOnePage = (props) => {
  const { children } = props;

  const data = [
    {
      label: "Devis",
      value: "Devis",
      desc: <Devis />,
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
      <MainCard className="flex flex-col justify-center items-center mt-6 ">
        <img
          className="w-[150px] cursor-pointer py-0.5 "
          src={FileDownload.src}
        />
        <Typography className="text-architect-secondary_text_color text-[14px]  ">
          Ici vous pouve
        </Typography>
        <div className="flex flex-row gap-1 mt-7"></div>
      </MainCard>
    </>
  );
};

export default architectManagerSelectionOnePage;
