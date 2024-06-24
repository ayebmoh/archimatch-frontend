"use client";
import { CustomInput, CustomTextArea, SingleVideoUploader } from "@/components";
import PhoneInput from "@/components/PhoneInput";
import Otpcode from "@/components/popups/Otpcode";
import {
  useFindArchi,
  useSendotp,
  useUpdateBaseInfo,
  useUpdateVideo,
} from "@/services/queries";
import { Button, Typography } from "@material-tailwind/react";
import { useFormik } from "formik";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import * as Yup from "yup";
const architectPersonalInformationPage = () => {
  const cookiesdata = Cookies.get("id");
  const UpdateVideoMutation = useUpdateVideo("architect");
  const backend = "http://localhost:8000";

  const uploadData = (data) => {
    UpdateVideoMutation.mutate(data);
  };
  const [showPopup, setShowPopup] = useState(false);
  const [data, setData] = useState(null);
  const { data: architect, isLoading, isError } = useFindArchi(cookiesdata);
  const [initialarchData, setInitialarchData] = useState(null);

  useEffect(() => {
    if (architect && !initialarchData) {
      setInitialarchData(architect);
      formik.setValues({
        first_name: architect.data.architect.user.first_name,
        last_name: architect.data.architect.user.last_name,
        email: architect.data.architect.user.email,
        phone_number: architect.data.architect.user.phone_number,
        bio: architect.data.architect.bio,
      });
    }
  }, [architect, initialarchData]);
  const formik = useFormik({
    initialValues: {
      email: "",
      first_name: "",
      last_name: "",
      bio: "",

      phone_number: "",
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
      bio: Yup.string().required("bio est requis"),
    }),

    onSubmit: (values) => {
      console.log("form submitted");
      console.log(values);
      setData(values);
      setShowPopup(true);
      handleEmail(values);

      // handlebaseinfo(values);
    },
  });

  const BaseinfoMutation = useUpdateBaseInfo("", {
    email: formik.email,
    first_name: formik.first_name,
    last_name: formik.last_name,
    bio: formik.bio,
    phone_number: formik.phone_number,
  });

  const handlebaseinfo = (values) => {
    BaseinfoMutation.mutate({ ...values, id: cookiesdata });
  };

  const handleVerify = async (allValues) => {
    console.log("All values from parent:", allValues);
    handlebaseinfo(allValues);
    // You can consume `allValues` here as needed
    console.log("Attempting to call BaseinfoMutation.mutateAsync");

    try {
      const response = await BaseinfoMutation.mutateAsync({
        id: cookiesdata,
        email: allValues.email,
        first_name: allValues.first_name,
        last_name: allValues.last_name,
        bio: allValues.bio,
        phone_number: allValues.phone_number,
        otp_code: allValues.otp_code,
      });

      console.log("Infos Updated successfully", response);
    } catch (error) {
      console.error("Error updating Infos:", error);
    }
  };

  const SendEmailMutation = useSendotp({});
  const handleEmail = async (values) => {
    try {
      const response = await SendEmailMutation.mutateAsync({
        id: cookiesdata,
        email: values.email,
      });

      console.log("Email sent successfully", response);
    } catch (error) {
      console.error("Error sending email:", error);
    }
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
      <div className="flex flex-col gap-4 md:flex-row mb-4">
        <CustomInput
          placeholder="Votre Email"
          containerClassName="w-full"
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
      </div>
      <PhoneInput
        placeholder="Numero de téléphone"
        containerClassName="w-full"
        label="N° de téléphone "
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
      <div className="flex flex-col  mt-2 ">
        <Typography className="font-semibold text-[16px]">Bio</Typography>
        {/* <Typography className="text-architect-secondary_text_color text-[15px]">
          Write a short introduction.
        </Typography> */}
        <CustomTextArea
          className=" w-full lg:w-full "
          placeholder="Write something awesome..."
          value={formik.values.bio}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.bio && formik.errors.bio ? true : false}
          success={formik.touched.bio && !formik.errors.bio ? true : false}
          errorMessage={
            formik.touched.bio && formik.errors.bio
              ? formik.errors.bio
              : undefined
          }
          label="Write a short introduction."
          name="bio"
          rows="7"
          cols="50"
        />
        <Typography className="font-semibold text-[19px] mt-5">
          Présentation vidéo
        </Typography>
        <Typography className="text-architect-secondary_text_color text-[16px]">
          Upload a short introduction video.
        </Typography>

        {architect?.data.architect.video_presentation ? (
          <video className="h-full w-full rounded-lg" controls>
            <source
              src={`${backend}${architect?.data.architect.video_presentation}`}
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        ) : (
          <SingleVideoUploader
            initialData={`${backend}${architect?.data.architect.video_presentation}`}
            id={cookiesdata}
            uploadData={uploadData}
          />
        )}

        <div className="flex flex-row  self-end gap-3 ">
          <Button
            color="gray"
            variant="outlined"
            className=" mt-16 font-semibold text-[14px]"
            type="submit"
            size="md"

            // onClick={formik.onSubmit}
            //disabled={isLoading}
          >
            Annuler
          </Button>
          <Button
            // type="submit"
            size="md"
            className=" mt-16 self-end font-semibold  text-[14px]"
            // onClick={formik.onSubmit}
            onClick={formik.handleSubmit}

            //disabled={isLoading}
          >
            Enregistrer les changements
          </Button>
        </div>
      </div>
      {showPopup && <Otpcode data={formik.values} onVerify={handleVerify} />}
    </form>
  );
};

export default architectPersonalInformationPage;
