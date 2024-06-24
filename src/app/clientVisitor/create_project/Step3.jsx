"use client";
import FirstRealisation from "@/assets/FirstRealisation.svg";
import FourthRealisation from "@/assets/FourthRealisation.svg";
import SecondRealisation from "@/assets/SecondRealisation.svg";
import ThirdRealisation from "@/assets/ThirdRealisation.svg";
import { Typography } from "@/components/RemoteComponents";
import ImageToggleList from "@/components/toggles/ImageToggleList";
import { useEffect, useState } from "react";
const Step3 = (props) => {
  const { formik } = props;
  const categories_values = [
    { id: 1, content: "Construction logement", image: FirstRealisation },
    { id: 2, content: "Point vente et commercial", image: FourthRealisation },
    { id: 3, content: "Grand œuvre immobilier", image: SecondRealisation },
    { id: 4, content: "Industrielle", image: ThirdRealisation },
  ];
  const [value, setValue] = useState([]);

  const [active, setActive] = useState("");

  useEffect(() => {
    console.log(active);
  }, [active]);
  return (
    <div>
      <Typography className="text-[25px] lg:text-[35px] text-architect-font_gris font-bold  ">
        Choisissez la Catégorie de Votre Projet
      </Typography>
      <Typography className="text-[18px]  text-architect-secondary_text_color   mb-10 ">
        Pour commencer, veuillez sélectionner votre spécialité
      </Typography>
      <div className="w-full  justify-center">
        <ImageToggleList
          data={categories_values}
          value={value}
          onChange={setValue}
          className="m-auto"
          formik={formik}
          formikValue={"categories"}
        />
      </div>
    </div>
  );
};

export default Step3;
