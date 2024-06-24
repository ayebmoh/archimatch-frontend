import Chantier from "@/assets/Chantier.svg";
import Construire from "@/assets/Construire.svg";
import DecoExter from "@/assets/DecoExter.svg";
import DecoInter from "@/assets/DecoInter.svg";
import DocTech from "@/assets/DocTech.svg";
import Peinture from "@/assets/Peinture.svg";
import { Typography } from "@/components/RemoteComponents";
import CheckToggleList from "@/components/toggles/CheckToggleList";
import { useRouter } from "next/navigation";
import { useState } from "react";
const Step4 = (props) => {
  const { formik } = props;
  const router = useRouter();
  const needs_values = [
    { id: 1, content: "Plans permis et suivi chantier", image: Chantier },
    { id: 2, content: "Plan 3d de décoration intérieur", image: DecoInter },
    { id: 3, content: "Plans et permis de construire", image: Construire },
    { id: 4, content: "Plans et documents techniques", image: DocTech },
    { id: 5, content: "Plan 3d de décoration extérieur", image: DecoExter },
    { id: 6, content: "Plan 3d de décoration extérieurr", image: Peinture },
  ];
  const [value, setValue] = useState([]);
  // Fonction pour basculer l'état d'une case à cocher

  return (
    <div>
      <Typography
        variant="h1"
        className="text-architect-font_gris text-[20px]  lg:text-[26px] font-bold mt-8 "
      >
        Les services approuvée
      </Typography>
      <Typography
        variant="paragraph"
        className="text-architect-secondary_text_color  text-[10px] lg:text-[15px]  "
      >
        Pour commencer, veuillez sélectionner votre spécialité
      </Typography>
      <div className="mt-5">
        <CheckToggleList
          data={needs_values}
          value={value}
          onChange={setValue}
          className=""
          formik={formik}
          formikValue={"need"}
          architect
        />
      </div>
    </div>
  );
};

export default Step4;
