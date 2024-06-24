"use client";
import { Typography } from "@/components/RemoteComponents";
import CheckToggleList from "@/components/toggles/CheckToggleList";
import { useEffect, useState } from "react";
const Step5 = (props) => {
  const { formik, house_type } = props;
  const work_type_values = [
    {
      id: 2,
      content: "Surélévation",
      tip: "L'ajout de nouveaux niveaux ou étages à une construction existante",
    },
    {
      id: 3,
      content: "Rénovation extérieure",
      tip: "Transformer et améliorer l'apparence d'un bâtiment existant",
    },
    {
      id: 4,
      content: "Rénovation intérieure",
      tip: "Transformer et moderniser les espaces existants",
    },
    {
      id: 5,
      content: "Extension & aménagement",
      tip: "Agrandir et améliorer un espace existant.",
    },
  ];

  const [data, setData] = useState();
  useEffect(() => {
    if (house_type === "Appartement") {
      setData([...work_type_values]);
    } else {
      setData([
        {
          id: 1,
          content: "Construction neuve",
          tip: "La création d'une structure entièrement nouvelle à partir de zéro",
        },
        ...work_type_values,
      ]);
    }
  }, []);
  const [value, setValue] = useState([]);

  const [active, setActive] = useState("");

  useEffect(() => {
    console.log(active);
  }, [active]);
  return (
    <div>
      <Typography className="text-[25px] lg:text-[35px] text-architect-font_gris font-bold  ">
        Quelle est le type de travaux
      </Typography>
      <Typography className="text-[18px]  text-architect-secondary_text_color   mb-10 ">
        Pour commencer, veuillez sélectionner votre spécialité
      </Typography>
      <CheckToggleList
        data={data}
        value={value}
        onChange={setValue}
        className=""
        formik={formik}
        formikValue={"work_type"}
      />
    </div>
  );
};

export default Step5;
