import { Typography } from "@/components/RemoteComponents";
import CheckToggleList from "@/components/toggles/CheckToggleList";
import { useState } from "react";

const Step2 = (props) => {
  const { formik } = props;

  const needs_values = [
    { id: 1, content: "Architecture Moderne" },
    { id: 2, content: "Architecture Contemporaine" },
    { id: 3, content: "Architecture Méditerranéenne" },
    { id: 4, content: "Style Traditionnel" },
    { id: 5, content: "Architecture de Tourisme" },
    { id: 6, content: "Architecture Institutionnelle et Publique" },
  ];
  const [value, setValue] = useState([]);
  // Fonction pour basculer l'état d'une case à cocher

  return (
    <div>
      <Typography
        variant="h1"
        className="text-architect-font_gris text-[20px]  lg:text-[26px] font-bold mt-8 "
      >
        Quel style adopter pour le projet ?
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
          architect
          formikValue={"work_style"}
        />
      </div>
    </div>
  );
};

export default Step2;
