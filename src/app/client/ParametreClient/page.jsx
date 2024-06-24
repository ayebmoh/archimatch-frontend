"use client";
import { CustomInput } from "@/components";
import PhoneInput from "@/components/PhoneInput";
import {
  useFetchData,
  useUpdateBaseInfoClientMutation,
} from "@/services/queries";
import { Button, Typography } from "@material-tailwind/react";
import { useFormik } from "formik";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import * as Yup from "yup";
const ClientPersonalInformationPage = (props) => {
  const { children } = props;
  const cookiesdata = Cookies.get("id");
  const { data: client, isLoading } = useFetchData(
    `/archimatch_app/client/find_client_by_user/${cookiesdata}/`,
    "client",
  );
  const formik = useFormik({
    initialValues: {
      email: client?.data?.client?.user?.email,
      first_name: client?.data?.client?.user?.first_name,
      last_name: client?.data?.client?.user?.last_name,
      phone_number: client?.data?.client?.user?.phone_number,
    },

    validationSchema: Yup.object({
      email: Yup.string()
        .email("Email invalide")
        .required("Email est obligatoire"),

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

      handleUpdate({
        email: values.email,
        first_name: values.first_name,
        last_name: values.last_name,
        phone_number: values.phone_number,
        id: client.data.client.id,
      });
    },
  });

  const [initialClientData, setInitialClientData] = useState(null);
  useEffect(() => {
    if (client && !initialClientData) {
      console.log(client);
      formik.setValues({
        first_name: client?.data?.client?.user?.first_name,
        last_name: client?.data?.client?.user?.last_name,
        email: client?.data?.client?.user?.email,
        phone_number: client?.data?.client?.user?.phone_number,
      });
      setInitialClientData(client);
    }
  });

  const removeChanges = () => {
    formik.setValues({
      first_name: client?.data.client.user.first_name,
      last_name: client.data.client.user.last_name,
      email: client.data.client.user.email,
      phone_number: client.data.client.user.phone_number,
    });
  };
  const BaseinfoMutation = useUpdateBaseInfoClientMutation("client", {});

  const handleUpdate = (values) => {
    BaseinfoMutation.mutate(values);
  };

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
            // type="submit"
            size="md"
            onClick={removeChanges}
            //disabled={isLoading}
          >
            Annuler
          </Button>
          <Button
            type="submit"
            size="md"
            className=" mt-16 self-end font-semibold  text-[14px]"
            onClick={() => formik.submitForm()}
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
