"use client";
import { CustomInput } from "@/components";
import PhoneInput from "@/components/PhoneInput";
import { Button, Typography } from "@material-tailwind/react";
import { useFormik } from "formik";
import * as Yup from "yup";
const ClientPersonalInformationPage = (props) => {
  const { children } = props;
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      first_name: "",
      last_name: "",
      phone_number: "",
    },

    validationSchema: Yup.object({
      email: Yup.string()
        .email("Email invalide")
        .required("Email est obligatoire"),
      password: Yup.string()
        .required("Le mot de passe est requis")
        .test(
          "containsLowerCase",
          "Doit contenir au moins une lettre minuscule",
          (value) => /[a-z]/.test(value),
        )
        .test(
          "containsUpperCase",
          "Doit contenir au moins une lettre majuscule",
          (value) => /[A-Z]/.test(value),
        )
        .test("containsDigit", "Doit contenir au moins un chiffre", (value) =>
          /\d/.test(value),
        )
        .test(
          "containsSpecialSymbol",
          "Doit contenir au moins un caractère spécial",
          (value) => /[!@#$%^&*(),.?":{}|<>]/.test(value),
        )
        .min(8, "Le mot de passe doit comporter au moins 8 caractères"),
      first_name: Yup.string()
        .required("Nom est requis")
        .max(20, "Nom ne doit pas depasser 20 caractères"),
      last_name: Yup.string()
        .required("Prenom est requis")
        .max(20, "Prenom ne doit pas depasser 20 caractères"),
      phone_number: Yup.string()
        .required("Numéro de téléphone est requis")
        .matches(/^\d{9}$/, "Le  de téléphone doit avoir 9 chiffre"),
    }),

    onSubmit: (values) => {
      console.log("form submitted");
      console.log(values);
      handleLogin(values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Typography className="self-start text-semibold text-[18px] ">
        Informations du base
      </Typography>
      <div className="flex flex-col gap-4 md:flex-row mb-4 mt-3">
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
          label="Nom"
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
          label="Prénom"
          name="last_name"
        />
      </div>
      <div className="flex flex-col gap-4 md:flex-row mb-4 mt-5">
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
          label="Email"
          name="email"
        />
        <PhoneInput
          placeholder="Numero de téléphone"
          containerClassName="w-[90%]"
          label="Numéro de téléphone"
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
      </div>
      <div className="flex flex-col   ">
        <div className="flex flex-row  self-end gap-3 ">
          <Button
            color="gray"
            variant="outlined"
            className=" mt-16 font-semibold text-[14px]"
            type="submit"
            size="md"
            onClick={formik.onSubmit}
            //disabled={isLoading}
          >
            Annuler
          </Button>
          <Button
            type="submit"
            size="md"
            className=" mt-16 self-end font-semibold  text-[14px]"
            onClick={formik.onSubmit}
            //disabled={isLoading}
          >
            Enregistrer
          </Button>
        </div>
      </div>
    </form>
  );
};

export default ClientPersonalInformationPage;
