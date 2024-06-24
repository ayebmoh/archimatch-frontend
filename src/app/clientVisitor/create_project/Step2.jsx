"use client";
import Chantier from "@/assets/Chantier.svg";
import Construire from "@/assets/Construire.svg";
import DecoExter from "@/assets/DecoExter.svg";
import DecoInter from "@/assets/DecoInter.svg";
import DocTech from "@/assets/DocTech.svg";
import Peinture from "@/assets/Peinture.svg";
import { Typography } from "@/components/RemoteComponents";
import CheckToggleList from "@/components/toggles/CheckToggleList";
import { useEffect, useState } from "react";
const Step2 = (props) => {
  const { formik } = props;
  const needs_values = [
    { id: 1, content: "Plans permis et suivi chantier", image: Chantier },
    { id: 2, content: "Plan 3d de décoration intérieur", image: DecoInter },
    { id: 3, content: "Plans et permis de construire", image: Construire },
    { id: 4, content: "Plans et documents techniques", image: DocTech },
    { id: 5, content: "Plan 3d de décoration extérieur", image: DecoExter },
    { id: 6, content: "Plan 3d de décoration extérieur", image: Peinture },
  ];
  const [value, setValue] = useState([
    "architece de construction",
    "architece de Beton",
  ]);

  const [active, setActive] = useState("");

  useEffect(() => {
    console.log(active);
  }, [active]);
  return (
    <div>
      <Typography className="text-[25px] lg:text-[35px] text-architect-font_gris font-bold  ">
        Quel est votre besoin auprès de l’architecte
      </Typography>
      <Typography className="text-[18px]  text-architect-secondary_text_color   mb-10 ">
        Pour commencer, veuillez sélectionner votre spécialité
      </Typography>
      <CheckToggleList
        data={needs_values}
        value={value}
        onChange={setValue}
        className=""
        formik={formik}
        formikValue={"need"}
      />
    </div>
  );
};

export default Step2;
