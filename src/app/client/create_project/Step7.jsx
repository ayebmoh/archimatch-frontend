"use client";
import { CustomInput, CustomSelect, ToggleButtonList } from "@/components";
import { Typography } from "@/components/RemoteComponents";
import { useState } from "react";
const Step7 = (props) => {
  const architect_type_initial_values = [
    { id: 1, content: "< 40m²" },
    { id: 2, content: "40m² - 90m²" },
    { id: 3, content: "90m² - 200m²" },
    { id: 4, content: "200m² - 500m²" },
    { id: 5, content: "> 500m²" },
  ];
  const [value, setValue] = useState();
  const villes = [
    { id: 1, content: "Tunis", value: "Tunis" },
    { id: 2, content: "Monastir", value: "Monastir" },
    { id: 3, content: "Sousse", value: "Sousse" },
    { id: 4, content: "Mahdia", value: "Mahdia" },
  ];
  const { formik } = props;

  return (
    <div>
      <Typography className="text-[25px] lg:text-[35px] text-architect-font_gris font-bold  ">
        Plus de détails
      </Typography>
      <Typography className="text-[18px]  text-architect-secondary_text_color   mb-10 ">
        Pour commencer, veuillez sélectionner votre spécialité
      </Typography>
      <CustomInput
        placeholder="Adresse de votre bureau"
        containerClassName="w-full lg:w-[60%]"
        value={formik.values.adresse}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.adresse && formik.errors.adresse ? true : false}
        success={
          formik.touched.adresse && !formik.errors.adresse ? true : false
        }
        errorMessage={
          formik.touched.adresse && formik.errors.adresse
            ? formik.errors.adresse
            : undefined
        }
        label="Adresse de votre bureau"
        name="adresse"
      />
      <CustomSelect
        options={villes}
        label="Ville"
        containerClassName="mt-6 w-full lg:w-[60%]"
        value={formik.values.town}
        onChange={(value) => formik.setFieldValue("town", value)}
        onBlur={formik.handleBlur}
        error={formik.touched.town && formik.errors.town ? true : false}
        success={formik.touched.town && !formik.errors.town ? true : false}
        errorMessage={
          formik.touched.town && formik.errors.town
            ? formik.errors.town
            : undefined
        }
        name="town"
      />
      <div className="w-full lg:w-[60%] mt-6">
        <Typography className="text-architect-dark_blue font-semibold text-[14px] mb-3">
          Surface totale du terrain
        </Typography>

        <ToggleButtonList
          data={architect_type_initial_values}
          value={formik.values.surface_terrain}
          onChange={setValue}
          formikValue={"surface_terrain"}
          formik={formik}
        />
      </div>
      <div className="w-full lg:w-[70%] mt-6">
        <Typography className="text-architect-dark_blue font-semibold text-[14px] mb-3">
          Surface des travaux
        </Typography>

        <ToggleButtonList
          data={architect_type_initial_values}
          value={formik.values.surface_travaux}
          onChange={setValue}
          formikValue={"surface_travaux"}
          formik={formik}
        />
      </div>
    </div>
  );
};

export default Step7;
