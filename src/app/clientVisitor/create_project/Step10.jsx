"use client";
import { Typography } from "@/components/RemoteComponents";
import CheckToggleList from "@/components/toggles/CheckToggleList";
import { useEffect, useState } from "react";
const Step10 = (props) => {
  const { formik, category, house_type } = props;

  const needs_values = [
    { id: 1, content: "Ascenseur" },
    { id: 2, content: "Escaliers" },
    { id: 3, content: "Salle de cinéma" },
    { id: 4, content: "Salle de jeux" },
    { id: 5, content: "Cave à cigares" },
    { id: 6, content: "Bibliothèques" },

    { id: 7, content: "Salles de réunion" },
    { id: 8, content: "Salles de fête" },
    { id: 9, content: "Aires de restauration" },
    { id: 10, content: "Espaces de collaboration" },

    { id: 11, content: "Salles de conférence" },
    { id: 12, content: "Bureaux" },

    { id: 14, content: "Salles de réception" },
    { id: 15, content: "Salles de classe" },
    { id: 16, content: "Systeme de sécurité" },
  ];
  const [value, setValue] = useState([]);

  const [active, setActive] = useState("");

  const [data, setData] = useState();
  useEffect(() => {
    if (category === "Construction logement") {
      if (house_type === "Appartement") {
        setData([...needs_values.slice(1, 6), ...needs_values.slice(14, 15)]);
      } else if (house_type === "Maison") {
        setData([...needs_values.slice(4, 15)]);
      } else {
        setData([...needs_values]);
      }
    } else if (
      category === "Point vente et commercial" ||
      category === "Grand œuvre immobilier"
    ) {
      setData([...needs_values]);
    } else {
      setData([...needs_values.slice(4, 15)]);
    }
  }, []);
  return (
    <div>
      <Typography className="text-[25px] lg:text-[35px] text-architect-font_gris font-bold  ">
        Qu'aimeriez-vous inclure de plus dans votre projet ?{" "}
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
        third
        formikValue={"extra"}
      />
    </div>
  );
};

export default Step10;
