"use client";
import { MainCard, SinglePdfUploader } from "@/components";
import { useAddDevisMutation, useCheckSelection } from "@/services/queries";
import {
  ChatBubbleOvalLeftEllipsisIcon,
  ClipboardDocumentListIcon,
} from "@heroicons/react/24/outline";
import Cookies from "js-cookie";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Devis from "./Devis";
import Négociations from "./Négociations";
const architectManagerSelectionOnePage = (props) => {
  const { children } = props;
  const pathname = usePathname();
  const id = pathname.split("/")[3];
  const cookiesdata = Cookies.get("id");

  const { data: selection, loading } = useCheckSelection(cookiesdata, id);
  const [devis, setDevis] = useState();
  const addDevisMutation = useAddDevisMutation("", {});

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
      desc: <Négociations selection={selection?.announcement} />,
      icon: ChatBubbleOvalLeftEllipsisIcon,
    },
  ];
  async function blobURLtoFile(blobUrl, filename) {
    try {
      const response = await fetch(blobUrl);
      const blob = await response.blob();
      return new File([blob], filename);
    } catch (error) {
      console.error("Error converting Blob URL to File:", error);
      return null;
    }
  }
  const handleSubmit = async (deviss) => {
    const formData = new FormData();

    formData.append("architect_id", cookiesdata); // Add other fields
    formData.append("ann_id", id);
    if (deviss) {
      formData.append(`devis`, await blobURLtoFile(deviss.url, deviss.name));
    }

    await addDevisMutation.mutate(formData);
  };
  // useEffect(() => {
  //   handleSubmit();
  // }, [devis]);
  useEffect(() => {
    console.log(selection);
  }, [selection]);

  return (
    <>
      <MainCard className="flex flex-col justify-center items-center mt-6 ">
        <SinglePdfUploader changePdf={setDevis} handleSubmit={handleSubmit} />
      </MainCard>
    </>
  );
};

export default architectManagerSelectionOnePage;
