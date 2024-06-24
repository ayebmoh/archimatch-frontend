"use client";
import clientLogo from "@/assets/ClientLogo.svg";
import PasswordClient from "@/assets/PasswordClient.svg";
import { CustomInput, PageLayout } from "@/components";
import { Button, Typography } from "@/components/RemoteComponents";
import { useupdateClient } from "@/services/queries";
import { EyeIcon } from "@heroicons/react/24/outline";
import { Checkbox } from "@material-tailwind/react";
import { useFormik } from "formik";
import { usePathname, useRouter } from "next/navigation";
import * as Yup from "yup";
//import { openAlert } from "../../components/alert/OpenAlert";
//import { handleErrors } from "../../utils";

const ClientCreateNewPasswordPage = () => {
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      new_password: "",
      confirm_password: "",
    },

    validationSchema: Yup.object({
      new_password: Yup.string()
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
      confirm_password: Yup.string()
        .required("Veuillez confirmer le mot de passe")
        .oneOf(
          [Yup.ref("new_password"), null],
          "Les mots de passe doivent correspondre",
        ),
    }),

    onSubmit: (values) => {
      console.log("form submitted");
      console.log(values);
      handleupdate(values);
      handleGoClient();
    },
  });

  const pathname = usePathname();
  const userUpdate = useupdateClient("");
  const handleupdate = async (values) => {
    console.log(pathname.split("/")[3]);
    try {
      const response = await userUpdate.mutateAsync({
        id: pathname.split("/")[3],
        new_password: values.new_password,
        confirm_password: values.confirm_password,
      });

      console.log("Password updated successfully", response);

      handleGoClient();
    } catch (error) {
      console.error("Error updating password:", error);
    }
  };
  const handleGoClient = () => {
    router.push("/clientVisitor/loginClient");
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
              className="hidden lg:block w-40 mr-4 ml-2 cursor-pointer py-0.5 mb-[200px] "
              src={clientLogo.src}
            />
            <Typography variant="h4" className="text-[26px] font-bold">
              {" "}
              Créez un nouveau mot de passe
            </Typography>
            <Typography
              variant="paragraph"
              className="text-architect-secondary_text_color text-[15px]"
            >
              Veuillez saisir un nouveau mot de passe pour votre compte
            </Typography>
          </div>

          <div className="flex flex-col items-center w-full gap-3 md:w-[60%] md:max-w-[400px] ">
            <CustomInput
              placeholder="Saisir votre mot de passe"
              containerClassName="w-full"
              label="Choisir un nouveau mot de passe"
              value={formik.values.new_password}
              name="new_password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={
                formik.touched.new_password && formik.errors.new_password
                  ? true
                  : false
              }
              success={
                formik.touched.new_password && !formik.errors.new_password
                  ? true
                  : false
              }
              errorMessage={
                formik.touched.new_password && formik.errors.new_password
                  ? formik.errors.new_password
                  : undefined
              }
            />

            <CustomInput
              placeholder="Confirmer le mot de passee"
              containerClassName="w-full"
              label="Confirmer"
              value={formik.values.confirm_password}
              onChange={formik.handleChange}
              icon={<EyeIcon className="text-blue-gray-300" />}
              name="confirm_password"
              error={
                formik.touched.confirm_password &&
                formik.errors.confirm_password
                  ? true
                  : false
              }
              success={
                formik.touched.confirm_password &&
                !formik.errors.confirm_password
                  ? true
                  : false
              }
              errorMessage={
                formik.touched.confirm_password &&
                formik.errors.confirm_password
                  ? formik.errors.confirm_password
                  : undefined
              }
            />

            <div className=" self-start mt-2 ">
              <Checkbox
                className="flex flex-row gap-2 self-start  text-sm "
                label="Se souvenir de moi"
              />
            </div>

            <Button
              type="submit"
              size="md"
              className="w-full"
              onClick={formik.onSubmit}
              //disabled={isLoading}
            >
              Créer un mot de passe
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
        <div className=" bg-[#98bcc8] hidden w-[50%] lg:flex lg:flex-col lg:mt-0 lg:justify-start lg:min-h-screen ">
          <img
            className=" w-full  h-full cursor-pointer"
            src={PasswordClient.src}
          />
        </div>
      </div>
    </PageLayout>
  );
};

export default ClientCreateNewPasswordPage;
