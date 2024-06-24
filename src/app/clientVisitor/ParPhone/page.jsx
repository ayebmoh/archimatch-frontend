"use client";
import ClientLogo from "@/assets/ClientLogo.svg";
import LoginClient from "@/assets/LoginClient.svg";
import PopupClientOne from "@/assets/PopupClientOne.svg";
import { PageLayout, Popup } from "@/components";
import PhoneInput from "@/components/PhoneInput";
import { Button, Typography } from "@/components/RemoteComponents";
import { useGetClient } from "@/services/queries";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import * as Yup from "yup";

//import { openAlert } from "../../components/alert/OpenAlert";
//import { handleErrors } from "../../utils";

const ClientParPhonePage = () => {
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const inputRefs = useRef([]);
  const handleChange = (e, index) => {
    const { value } = e.target;
    if (value.length <= 1 && !isNaN(value)) {
      const newOTP = [...otp];
      newOTP[index] = value;
      setOtp(newOTP);

      if (value !== "") {
        const nextSibling = e.target.nextElementSibling;
        if (nextSibling !== null) {
          nextSibling.focus();
        }
      } else if (value === "" && index > 0) {
        const prevSibling = inputRefs.current[index - 1];

        if (prevSibling !== null) {
          prevSibling.focus();
          prevSibling.setSelectionRange(
            prevSibling.value.length,
            prevSibling.value.length,
          );
        }
      }
    } else if (value === "" && index === 0) {
      // If the value is empty and it's the first input, just keep focus on the current input
      e.target.focus();
    }
  };

  const [open, setOpen] = useState(false);
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      phone_number: "",
    },

    validationSchema: Yup.object({
      phone_number: Yup.string()
        .required("Numéro de téléphone est requis")
        .matches(/^\d{9}$/, "Le  de téléphone doit avoir 9 chiffre"),
    }),

    onSubmit: (values) => {
      handleGetClient(values);
    },
  });
  const getClientMutation = useGetClient("", {}, router, true);

  const handleGetClient = (values) => {
    const userData = getClientMutation.mutate({
      phone_number: values.phone_number,
    });
  };
  const handleGoArchitect = () => {
    router.push("/clientVisitor");
  };
  return (
    <PageLayout className="pb-12 lg:min-h-screen lg:pb-0">
      <div className=" border-3 w-full h-full flex flex-row justify-center mt-16 lg:mt-0 lg:justify-start lg:min-h-screen ">
        <form
          onSubmit={formik.handleSubmit}
          className="flex flex-col items-center gap-[30px] bg-white shadow-md w-[90%]  rounded-[10px] py-5 px-3 lg:w-1/2 lg:rounded-none lg:min-h-screen "
        >
          <div className="flex flex-col items-center md:w-[60%] md:items-start md:max-w-[400px]">
            <img
              className="hidden lg:block w-40 mr-4 ml-2 cursor-pointer py-0.5 mb-[200px]"
              src={ClientLogo.src}
            />
            <Typography variant="h4" className="text-[30px] font-bold mb-2">
              {" "}
              Se Connecter
            </Typography>
            <Typography
              variant="paragraph"
              className="text-architect-secondary_text_color text-[15px]"
            >
              {" "}
              Renseigner l'email avec lequel vous avez publié votre annonce de
              recherche
            </Typography>
          </div>
          <div className="flex flex-col items-center w-full gap-3 md:w-[60%] md:max-w-[400px] mt-8">
            <PhoneInput
              placeholder="Numero de téléphone"
              containerClassName="w-full"
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
            <Button
              type="submit"
              size="md"
              className="w-full mt-10"
              onClick={formik.onSubmit}
              //disabled={isLoading}
            >
              {" "}
              Se connecter{" "}
            </Button>
            <div className="flex flex-row justify-center w-full gap-1">
              <Typography
                variant="paragraph"
                className="text-architect-secondary_text_color text-[14px] mt-3"
              >
                {" "}
                Vous n’avez pas de compte?{" "}
              </Typography>
              <Typography
                variant="paragraph"
                className="text-client-primary text-[14px] self-end mt-3 underline cursor-pointer font-bold"
                onClick={() => router.push("/clientVisitor/CreateAccountPhone")}
              >
                {" "}
                S’inscrire
              </Typography>
            </div>
          </div>
        </form>
        <div className=" bg-[#d1f6ff] hidden w-[50%] lg:flex lg:flex-col lg:mt-0 lg:justify-start lg:min-h-screen">
          <img
            className="w-full  h-full cursor-pointer"
            src={LoginClient.src}
          />
        </div>
      </div>
      <Popup
        headerClassName="text-center self-center lg:w-[55%] md:w-[60%] text-center"
        open={open}
        handler={() => setOpen(!open)}
        size="sm"
        bodyClassName="flex flex-col items-center"
      >
        <img className=" w-[30%]  cursor-pointer  " src={PopupClientOne.src} />
        <Typography
          variant="paragraph"
          className="text-architect-font_gris text-center self-center lg:w-[55%] md:w-[60%] text-[30px] font-bold mt-5"
        >
          Code de vérification
        </Typography>
        <Typography
          variant="paragraph"
          className="text-architect-secondary_text_color text-center self-center lg:w-[55%] md:w-[60%] text-[14px] "
        >
          Entrez le code envoyé à votre numéro de téléphone *******253
        </Typography>

        <div className="flex justify-center space-x-2 mt-4">
          {otp.map((data, index) => (
            <input
              ref={(el) => (inputRefs.current[index] = el)}
              key={index}
              type="text"
              maxLength="1"
              className="w-12 h-12 text-4xl border rounded-lg text-center"
              value={data}
              onChange={(e) => handleChange(e, index)}
            />
          ))}
        </div>
        <Button
          type="submit"
          size="md"
          className="w-[55%] mt-4"
          onClick={() => setOpen(!open)}
          //disabled={isLoading}
        >
          {" "}
          Vérifier{" "}
        </Button>
        <div className="flex flex-row justify-center w-full gap-1">
          <Typography
            variant="paragraph"
            className="text-architect-font_gris text-[11px] mt-3"
          >
            Vous n'avez pas de code ?
          </Typography>
          <Typography
            variant="paragraph"
            className="text-client-primary text-[11px] self-end mt-3 underline cursor-pointer font-bold"
          >
            Renvoyer le code
          </Typography>
        </div>
        <div className="flex flex-row ">
          <Typography
            variant="paragraph"
            className="text-architect-font_gris flex flex-row text-[11px] self-center mt-3 items-center  cursor-pointer gap-1 "
            onClick={() => router.push("/clientVisitor/loginClient")}
          >
            <ChevronLeftIcon className="h-3 w-3" />
            Revenir pour vous connecter
          </Typography>
        </div>
      </Popup>
    </PageLayout>
  );
};

export default ClientParPhonePage;
