"use client";
import { ToggleButtonList } from "@/components";
import { Typography } from "@/components/RemoteComponents";
import { useState } from "react";
const Step8 = (props) => {
  const architect_type_initial_values = [
    { id: 1, content: "5.000dt - 10.000dt" },
    { id: 2, content: "20.000dt - 40.000dt" },
    { id: 3, content: "40.000dt - 120.000dt" },
    { id: 4, content: "250.000dt - 500.000dt" },
    { id: 5, content: "120.000dt - 250.000dt" },
    { id: 6, content: "> 500.000dt" },
  ];
  const [value, setValue] = useState();

  const { formik } = props;

  return (
    <div>
      <Typography className="text-[25px] lg:text-[35px] text-architect-font_gris font-bold  ">
        Détails d’exécution
      </Typography>
      <Typography className="text-[18px]  text-architect-secondary_text_color   mb-10 ">
        Pour commencer, veuillez sélectionner votre spécialité
      </Typography>

      <div className="w-full lg:w-[60%] mt-6">
        <Typography className="text-architect-dark_blue !font-semibold text-[14px] mb-3">
          Surface totale du terrain
        </Typography>

        <ToggleButtonList
          data={architect_type_initial_values}
          value={formik.values.budget}
          onChange={setValue}
          formikValue={"budget"}
          formik={formik}
        />
      </div>
      <div className="w-full lg:w-[80%] mt-6">
        <Typography className="text-architect-dark_blue !font-semibold text-[14px] mb-3">
          Voulez-vous décrire plus en détail votre projet ?
        </Typography>
        <textarea
          className=" w-full lg:w-[80%] border-2 border-gray-400 resize-none  rounded-md focus:border-client-primary outline-none focus:outline-none p-2"
          placeholder="Write something awesome..."
          rows="7"
          cols="50"
          value={formik.values.details}
          onChange={(event) =>
            formik.setFieldValue("details", event.target.value)
          }
          onBlur={formik.handleBlur}
        ></textarea>
      </div>
    </div>
  );
};

export default Step8;
