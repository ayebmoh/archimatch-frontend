"use client";
import Logo from "@/assets/Logo.svg";
import { CustomInput, SingleFileUploader } from "@/components";
import { useChangeCompanyMutation, useFindArchi } from "@/services/queries";
import { Avatar, Button, Typography } from "@material-tailwind/react";
import { useFormik } from "formik";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import * as Yup from "yup";

const architectInformationEntreprisePage = (props) => {
  const { children } = props;
  const cookiesdata = Cookies.get("id");
  const backend = "http://127.0.0.1:8000";
  const { data: architect, isLoading, isError } = useFindArchi(cookiesdata);
  const changeCompnayMutation = useChangeCompanyMutation();
  const [initialarchData, setInitialarchData] = useState(null);
  const [image_data, setImageData] = useState(
    architect?.data?.architect?.company_logo &&
      architect?.data?.architect?.company_logo.includes("http")
      ? architect?.data?.architect?.company_logo
      : `${backend}${architect?.data?.architect?.company_logo}`,
  );
  const formik = useFormik({
    initialValues: {
      registration_number: "",
      company_name: "",
    },

    validationSchema: Yup.object({
      registration_number: Yup.string()
        .required("Matricule est requis")
        .matches(
          /^\d{10}$/,
          "La matricule doit avoir une longueur de 10 caractères numériques",
        ),
      company_name: Yup.string()
        .required("Nom de la société est requis")
        .max(20, "Nom de la société ne doit pas depasser 20 caractères"),
    }),

    onSubmit: (values) => {
      console.log("form submitted");
      console.log(values);
      handleSubmit();
    },
  });
  useEffect(() => {
    if (architect && !initialarchData) {
      setInitialarchData(architect);
      formik.setValues({
        registration_number: architect.data.architect.registration_number,
        company_name: architect.data.architect.company_name,
      });
      setImageData(
        architect?.data?.architect?.company_logo &&
          architect?.data?.architect?.company_logo.includes("http")
          ? architect?.data?.architect?.company_logo
          : `${backend}${architect?.data?.architect?.company_logo}`,
      );
    }
  }, [architect, initialarchData]);
  const handleChange = (values) => {
    changeCompnayMutation.mutate(values);
  };

  async function blobURLtoFile(blobUrl, filename) {
    try {
      const response = await fetch(blobUrl);
      const blob = await response.blob();
      return new File([blob], filename);
    } catch (error) {
      console.error("Error converting Blob URL to File:", error);
      return null;
    }
  }
  const handleSubmit = async () => {
    const formData = new FormData();

    formData.append("id", cookiesdata); // Add other fields
    formData.append("company_name", formik.values.company_name);
    formData.append("registration_number", formik.values.registration_number);

    formData.append(
      `company_logo`,
      await blobURLtoFile(image_data.url, image_data.name),
    );

    await handleChange(formData);
  };
  // useEffect(() => {
  //   if (architect)

  // }, [architect]);
  useEffect(() => {
    console.log(image_data);
  }, [image_data]);
  return (
    <form className="h-full  flex flex-col" onSubmit={formik.handleSubmit}>
      <Typography className="self-start font-semibold text-[18px] text-black ">
        Informations de l’entreprise
      </Typography>

      <div className="flex flex-col gap-4 md:flex-col mb-4 mt-6 space-y-2">
        <CustomInput
          placeholder="Nom du société"
          containerClassName="w-full "
          value={formik.values.company_name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={
            formik.touched.company_name && formik.errors.company_name
              ? true
              : false
          }
          success={
            formik.touched.company_name && !formik.errors.company_name
              ? true
              : false
          }
          errorMessage={
            formik.touched.company_name && formik.errors.company_name
              ? formik.errors.company_name
              : undefined
          }
          label="Nom du société"
          name="company_name"
        />
        <CustomInput
          placeholder="Matricule fiscale"
          containerClassName="w-full"
          value={formik.values.registration_number}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={
            formik.touched.registration_number &&
            formik.errors.registration_number
              ? true
              : false
          }
          success={
            formik.touched.registration_number &&
            !formik.errors.registration_number
              ? true
              : false
          }
          errorMessage={
            formik.touched.registration_number &&
            formik.errors.registration_number
              ? formik.errors.registration_number
              : undefined
          }
          label="Matricule fiscale"
          name="registration_number"
        />
      </div>
      <Typography className="self-start font-semibold text-[18px] text-black mt-4">
        Logo
      </Typography>
      <Typography className="self-start text-architect-secondary_text_color text-[15px] mt-2">
        This will be displayed on your profile.
      </Typography>

      <div className="flex flex-col items-center lg:flex-row">
        <div className="  basis-0 flex-grow items-center">
          <Avatar
            variant="circular"
            className=" w-32 h-32 cursor-pointer py-0.5 "
            src={
              image_data
                ? typeof image_data === "string"
                  ? image_data
                  : image_data.url
                : Logo.src
            }
          />
        </div>
        <SingleFileUploader
          className="w-[578px] "
          setImageData={setImageData}
        />
      </div>

      <div className="flex flex-row justify-end self-end gap-3  h-full ">
        <Button
          color="gray"
          variant="outlined"
          className=" mt-16 font-semibold   self-end md:text-[14px] text-[12px] h-[48px]"
          type="submit"
          size="md"
        >
          Annuler
        </Button>
        <Button
          type="submit"
          size="md"
          className=" mt-16 self-end font-semibold  md:text-[14px] text-[12px] "

          //disabled={isLoading}
        >
          Enregistrer
        </Button>
      </div>
    </form>
  );
};

export default architectInformationEntreprisePage;
