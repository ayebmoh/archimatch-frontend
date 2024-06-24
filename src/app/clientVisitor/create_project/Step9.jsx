"use client";
import { Typography } from "@/components/RemoteComponents";
import CheckToggleList from "@/components/toggles/CheckToggleList";
import { useEffect, useState } from "react";
const Step9 = (props) => {
  const { formik, category, house_type, handleNext } = props;
  const needs_values = [
    { id: 1, content: "Architecture Moderne" },
    { id: 2, content: "Architecture Contemporaine" },
    { id: 3, content: "Architecture Méditerranéenne" },
  ];
  const [value, setValue] = useState([]);

  const [active, setActive] = useState("");

  const [data, setData] = useState();
  useEffect(() => {
    if (category === "Construction logement") {
      if (house_type === "Appartement" || house_type == "Immobilier") {
        setData([...needs_values]);
      } else {
        setData([...needs_values, { id: 4, content: "Style Traditionnel" }]);
      }
    } else if (
      category === "Point vente et commercial" ||
      category === "Grand œuvre immobilier"
    ) {
      setData([...needs_values, { id: 4, content: "Style Traditionnel" }]);
    } else {
      handleNext();
    }
  }, []);
  return (
    <div>
      <Typography className="text-[25px] lg:text-[35px] text-architect-font_gris font-bold  ">
        Quel style souhaitez-vous adopter pour votre projet ?
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
        formikValue={"work_style"}
      />
    </div>
  );
};

export default Step9;
