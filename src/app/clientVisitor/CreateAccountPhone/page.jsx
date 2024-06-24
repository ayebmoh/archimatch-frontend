"use client";
import ClientLogo from "@/assets/ClientLogo.svg";
import LoginClient from "@/assets/LoginClient.svg";
import { CustomInput, PageLayout } from "@/components";
import PhoneInput from "@/components/PhoneInput";
import { Button, Typography } from "@/components/RemoteComponents";
import { Checkbox } from "@material-tailwind/react";

import { useFetchData, useloginClient } from "@/services/queries";
import { useFormik } from "formik";
import { useCookies } from "next-client-cookies";
import { useRouter } from "next/navigation";
import * as Yup from "yup";
//import { openAlert } from "../../components/alert/OpenAlert";
//import { handleErrors } from "../../utils";

const ClientCreateAccountPhonePage = ({ params, searchParams }) => {
  const router = useRouter();
  const cookies = useCookies();
  const phone_number = searchParams?.phone_number;
  const id = searchParams?.id;
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      phone_number: phone_number,
      password: "",
    },

    validationSchema: Yup.object({
      phone_number: Yup.string()
        .required("Numéro de téléphone est requis")
        .matches(/^\d{9}$/, "Le  de téléphone doit avoir 9 chiffre"),
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
    }),

    onSubmit: (values) => {
      console.log("form submitted");
      console.log(values);
      handleLogin(values);
    },
  });

  const { data: user, isLoading } = useFetchData(
    `/archimatch_app/user/${id}/by_id/`,
  );
  const loginMutation = useloginClient("", {}, cookies, router);
  const handleLogin = (values) => {
    const userData = loginMutation.mutate({
      username: user.data.email,
      password: values.password,
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
            <Typography variant="h4" className="text-[30px] font-bold">
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
          <div className="flex flex-col items-center w-full gap-3 md:w-[60%] md:max-w-[400px] ">
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
            <CustomInput
              isPassword
              placeholder="Votre Mot de passe"
              containerClassName="w-full"
              label="Mot de passe"
              value={formik.values.password}
              onChange={formik.handleChange}
              name="password"
              error={
                formik.touched.password && formik.errors.password ? true : false
              }
              success={
                formik.touched.password && !formik.errors.password
                  ? true
                  : false
              }
              errorMessage={
                formik.touched.password && formik.errors.password
                  ? formik.errors.password
                  : undefined
              }
            />
            <div className="flex flex-row justify-between items-center w-full mt-2 ">
              <Checkbox
                className="flex flex-row gap-2 self-start  text-sm "
                label={
                  <Typography
                    color="blue-gray"
                    className="flex font-medium text-[14px]"
                  >
                    Se souvenir de moi{" "}
                  </Typography>
                }
              />

              <Typography
                variant="paragraph"
                className="text-client-primary text-[14px] self-end  cursor-pointer"
                onClick={() => router.push("/clientVisitor/PasswordForget")}
              >
                Mot de passe oublié
              </Typography>
            </div>
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
    </PageLayout>
  );
};

export default ClientCreateAccountPhonePage;
