import FirstRealisation from "@/assets/FirstRealisation.svg";
import FourthRealisation from "@/assets/FourthRealisation.svg";
import SecondRealisation from "@/assets/SecondRealisation.svg";
import ThirdRealisation from "@/assets/ThirdRealisation.svg";
import { Typography } from "@/components/RemoteComponents";
import ImageToggleList from "@/components/toggles/ImageToggleList";
import { useState } from "react";

const Step1 = (props) => {
  const { formik } = props;
  const [value, setValue] = useState([]);
  const categories_values = [
    { id: 1, content: "Construction logement", image: FirstRealisation },
    { id: 2, content: "Point vente et commercial", image: FourthRealisation },
    { id: 3, content: "Grand œuvre immobilier", image: SecondRealisation },
    { id: 4, content: "Industrielle", image: ThirdRealisation },
  ];
  return (
    <div>
      <Typography
        variant="h1"
        className="text-architect-font_gris text-[20px]  lg:text-[26px] font-bold mt-8 "
      >
        Choisissez la Catégorie de Projet
      </Typography>
      <Typography
        variant="paragraph"
        className="text-architect-secondary_text_color  text-[10px] lg:text-[15px]  "
      >
        Pour commencer, veuillez sélectionner votre spécialité
      </Typography>
      <div className="w-full  justify-center mt-4">
        <ImageToggleList
          data={categories_values}
          value={value}
          onChange={setValue}
          className="m-auto"
          formik={formik}
          formikValue={"categories"}
          architect
        />
      </div>
    </div>
  );
};

export default Step1;
