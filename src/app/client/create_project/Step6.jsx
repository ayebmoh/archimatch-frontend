"use client";
import { Counter } from "@/components";
import { Typography } from "@/components/RemoteComponents";
import { useState } from "react";
const Step6 = (props) => {
  const { formik } = props;

  const initial_values = [
    {
      value: formik.values.nb_suite_parental,
      content: "suite parental",
      key: "nb_suite_parental",
    },
    {
      value: formik.values.nb_cuisine,
      content: "Cuisine",
      key: "nb_cuisine",
    },
    {
      value: formik.values.nb_Terasse,
      content: "Terrasse",
      key: "nb_Terasse",
    },
    {
      value: formik.values.nb_chambre,
      content: "Chambre",
      key: "nb_chambre",
    },
    {
      value: formik.values.nb_salle_a_manger,
      content: "salle à manger",
      key: "nb_salle_a_manger",
    },
    {
      value: formik.values.nb_jardin,
      content: "jardin",
      key: "nb_jardin",
    },
    {
      value: formik.values.nb_chambre_enfant,
      content: "Chambre enfant ",
      key: "nb_chambre_enfant",
    },
    {
      value: formik.values.nb_salle_bain,
      content: "Salle de bain ",
      key: "nb_salle_bain",
    },
    {
      value: formik.values.nb_haul,
      content: "haul / entrée  ",
      key: "nb_haul",
    },
    {
      value: formik.values.nb_salon,
      content: "Salon",
      key: "nb_salon",
    },
    {
      value: formik.values.nb_bureau,
      content: "Bureau",
      key: "nb_bureau",
    },
    {
      value: formik.values.nb_garage,
      content: "Garage",
      key: "nb_garage",
    },
  ];

  const [value, setValue] = useState([]);

  return (
    <div>
      <Typography className="text-[25px] lg:text-[35px] text-architect-font_gris font-bold  ">
        Quelles sont les pièces que vous souhaitez rénover ?
      </Typography>
      <Typography className="text-[18px]  text-architect-secondary_text_color   mb-10 ">
        Pour commencer, veuillez sélectionner votre spécialité
      </Typography>
      <div className="flex flex-col md:flex-row gap-4 flex-wrap justify-center items-center ">
        {initial_values.map((element, index) => (
          <Counter
            key={element.key}
            value={element.value}
            onChange={setValue}
            content={element.content}
            className=""
            formik={formik}
            formikValue={element.key}
          />
        ))}
      </div>
    </div>
  );
};

export default Step6;
