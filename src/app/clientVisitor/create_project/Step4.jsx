"use client";
import Appartement from "@/assets/Appartement.svg";
import Building from "@/assets/Building.svg";
import Clinic from "@/assets/Clinic.svg";
import Ecole from "@/assets/Ecole.svg";
import Interpot from "@/assets/Entrepot.svg";
import Hotel from "@/assets/Hotel.svg";
import House from "@/assets/House.svg";
import Usine from "@/assets/Usine.svg";
import Villa from "@/assets/Villa.svg";
import { Typography } from "@/components/RemoteComponents";
import CheckToggleList from "@/components/toggles/CheckToggleList";
import { useEffect, useState } from "react";
const Step4 = (props) => {
  const { formik, category } = props;
  const [data, setData] = useState();
  const house_type_value = [
    { id: 1, content: "Maison", image: House },
    { id: 2, content: "Appartement", image: Appartement },
    { id: 3, content: "Immobilier", image: Building },
    { id: 4, content: "Villa", image: Villa },
  ];
  const [value, setValue] = useState([]);

  const [active, setActive] = useState("");

  useEffect(() => {
    if (category === "Construction logement") {
      setData([
        { id: 1, content: "Maison", image: House },
        { id: 2, content: "Appartement", image: Appartement },
        { id: 3, content: "Immobilier", image: Building },
        { id: 4, content: "Villa", image: Villa },
      ]);
    } else if (category === "Point vente et commercial") {
      setData([
        { id: 1, content: "Restaurant/Salon de thé" },
        { id: 2, content: "Magasin" },
        { id: 3, content: "Agences/Bureaux" },
        { id: 4, content: "Salons de coiffure" },
        { id: 5, content: "Spa et bien -être" },
        { id: 6, content: "Salle de sport" },
        { id: 7, content: "Point de vente cosmétique" },
        { id: 8, content: "Boutique de mode" },
        { id: 9, content: "Autre" },
      ]);
    } else if (category === "Grand œuvre immobilier") {
      setData([
        { id: 1, content: "Immeubles bureaux", image: House },
        { id: 2, content: "Hôtel", image: Hotel },
        { id: 3, content: "Clinique", image: Clinic },
        { id: 4, content: "école", image: Ecole },
        { id: 4, content: "Showroom", image: Villa },
        { id: 4, content: "Résidence", image: Villa },
      ]);
    } else if (category === "Industrielle") {
      setData([
        { id: 1, content: "Entrepôt", image: Interpot },
        { id: 2, content: "Usines", image: Usine },
        { id: 3, content: "Atelier conception", image: Building },
      ]);
    }
  }, []);
  return (
    <div>
      <Typography className="text-[25px] lg:text-[35px] text-architect-font_gris font-bold  ">
        Quel est le type de votre bien
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
        formikValue={"house_type"}
      />
    </div>
  );
};

export default Step4;
