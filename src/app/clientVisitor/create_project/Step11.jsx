"use client";
import { FileUploader, MainCard } from "@/components";
import { Typography } from "@/components/RemoteComponents";
import { useEffect, useState } from "react";
const Step11 = (props) => {
  const { formik } = props;

  const [value, setValue] = useState([]);

  const [active, setActive] = useState("");

  useEffect(() => {
    console.log(active);
  }, [active]);
  return (
    <div>
      <Typography className="text-[25px] lg:text-[35px] text-architect-font_gris font-bold  ">
        Vous pouvez ajouter des photos pour votre projet ?
      </Typography>
      <Typography className="text-[18px]  text-architect-secondary_text_color   mb-10 ">
        Pour commencer, veuillez sélectionner votre spécialité
      </Typography>
      <MainCard>
        <FileUploader client />
      </MainCard>
    </div>
  );
};

export default Step11;
