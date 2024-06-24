"use client";
import { CustomInput } from "@/components";
import PhoneInput from "@/components/PhoneInput";
import { Checkbox, Typography } from "@/components/RemoteComponents";
import { useState } from "react";
const Step12 = (props) => {
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
    <div className="w-full lg:w-[60%]">
      <Typography className=" text-[16px] md:text-[25px] lg:text-[30px] text-architect-font_gris font-bold  ">
        Pour sauvegarder votre projet et accéder à notre estimateur en ligne
      </Typography>
      <Typography className="text-[18px]  text-architect-secondary_text_color   mb-10 ">
        Pour commencer, veuillez sélectionner votre spécialité
      </Typography>

      <div className="flex flex-col gap-6">
        <CustomInput
          placeholder="Votre Nom"
          containerClassName="w-[90%]"
          value={formik.values.first_name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={
            formik.touched.first_name && formik.errors.first_name ? true : false
          }
          success={
            formik.touched.first_name && !formik.errors.first_name
              ? true
              : false
          }
          errorMessage={
            formik.touched.first_name && formik.errors.first_name
              ? formik.errors.first_name
              : undefined
          }
          label="Nom*"
          name="first_name"
        />
        <CustomInput
          placeholder="Votre Prenom"
          containerClassName="w-[90%]"
          value={formik.values.last_name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={
            formik.touched.last_name && formik.errors.last_name ? true : false
          }
          success={
            formik.touched.last_name && !formik.errors.last_name ? true : false
          }
          errorMessage={
            formik.touched.last_name && formik.errors.last_name
              ? formik.errors.last_name
              : undefined
          }
          label="Prénom*"
          name="last_name"
        />
        <CustomInput
          placeholder="Votre Email"
          containerClassName="w-[90%]"
          error={formik.touched.email && formik.errors.email ? true : false}
          success={formik.touched.email && !formik.errors.email ? true : false}
          errorMessage={
            formik.touched.email && formik.errors.email
              ? formik.errors.email
              : undefined
          }
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          label="Email*"
          name="email"
        />
        <PhoneInput
          placeholder="Numero de téléphone"
          containerClassName="!w-[90%]"
          label="Numéro de téléphone*"
          error={
            formik.touched.phone_number && formik.errors.phone_number
              ? true
              : false
          }
          success={
            formik.touched.phone_number && !formik.errors.phone_number
              ? true
              : false
          }
          errorMessage={
            formik.touched.phone_number && formik.errors.phone_number
              ? formik.errors.phone_number
              : undefined
          }
          value={formik.values.phone_number}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          iname="phone_number"
        />
        <div className="w-[90%]">
          <Checkbox
            color="blue"
            className=""
            label={
              <Typography className="flex flex-col gap-2 font-medium  text-[12px]  md:text-[16px] ml-3  text-architect-font_gris">
                J’accepte les règles et les Conditions générales d’utilisation
                d’archimatch
              </Typography>
            }
          />
          <Checkbox
            color="blue"
            className=""
            label={
              <Typography className="flex flex-col gap-1 font-medium text-[12px]  md:text-[16px] ml-3  text-architect-font_gris">
                Je souhaite recevoir des devis d'autres architectes concernant
                mes travaux.
              </Typography>
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Step12;
