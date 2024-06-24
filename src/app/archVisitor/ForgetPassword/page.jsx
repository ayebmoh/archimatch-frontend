"use client";
import architectLogo from "@/assets/ArchitectLogo.svg";
import ForgetPassword from "@/assets/ForgetPassword.svg";
import PopupOne from "@/assets/PopupOne.svg";
import { CustomInput, PageLayout, Popup } from "@/components";
import { Button, Typography } from "@/components/RemoteComponents";
import { useresetArchitect } from "@/services/queries";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import { useState } from "react";
import * as Yup from "yup";

//import { openAlert } from "../../components/alert/OpenAlert";
//import { handleErrors } from "../../utils";

const ArchitectForgetPasswordPage = () => {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      email: "",
    },

    validationSchema: Yup.object({
      email: Yup.string()
        .email("Email invalide")
        .required("Email est obligatoire"),
    }),

    onSubmit: (values) => {
      handleReset(values.email);
      setOpen(true);
      setTimeout(() => {
        router.push("/archVisitor/login");
      }, 5000);
    },
  });

  const resetMutation = useresetArchitect();

  const handleReset = async (email) => {
    try {
      await resetMutation.mutateAsync({ email });
    } catch (error) {}
  };

  const handleOpen = () => {
    setOpen(!open);
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
              src={architectLogo.src}
            />
            <Typography variant="h4" className="text-[30px] font-bold">
              {" "}
              Mot de passe oublié ?
            </Typography>
          </div>
          <div className="flex flex-col items-center w-full gap-3 md:w-[60%] md:max-w-[400px] ">
            <CustomInput
              placeholder="Votre Email"
              containerClassName="w-full"
              label="Email"
              value={formik.values.email}
              name="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.email && formik.errors.email ? true : false}
              success={
                formik.touched.email && !formik.errors.email ? true : false
              }
              errorMessage={
                formik.touched.email && formik.errors.email
                  ? formik.errors.email
                  : undefined
              }
            />

            <Button
              type="submit"
              size="md"
              className="w-full mt-3"
              onClick={formik.onSubmit}
              //disabled={isLoading}
            >
              {" "}
              Envoyer moi le lien{" "}
            </Button>
            <div className="flex flex-row justify-center items-center w-full mt-2 ">
              <Typography
                variant="paragraph"
                className="text-architect-primary font-bold text-[10px] self-center cursor-pointer mt-12 underline"
                onClick={() => router.back()}
              >
                ou se connecter
              </Typography>
            </div>
            <div className="flex flex-row justify-center w-full gap-1">
              <Typography
                variant="paragraph"
                className="text-architect-secondary_text_color text-[10px] mt-3"
              >
                {" "}
                Vous n’avez pas de compte?{" "}
              </Typography>
              <Typography
                variant="paragraph"
                className="text-architect-primary text-[10px] self-end mt-3 underline cursor-pointer font-bold"
                onClick={() => router.push("create_account")}
              >
                {" "}
                S’inscrire
              </Typography>
            </div>
          </div>
        </form>
        <div className=" bg-[#d5d4e5] hidden w-[50%] lg:flex lg:flex-col lg:mt-0 lg:justify-start lg:min-h-screen">
          <img
            className="w-full  h-full cursor-pointer"
            src={ForgetPassword.src}
          />
        </div>
      </div>
      <Popup
        header="Lien de récupération envoyé !"
        headerClassName="text-center self-center lg:w-[55%] md:w-[60%] text-center"
        open={open}
        handleOpen={handleOpen}
        size="sm"
        bodyClassName="flex flex-col items-center"
      >
        <img
          className=" w-[40%] mr-4 ml-2 cursor-pointer  "
          src={PopupOne.src}
        />
        <Typography
          variant="paragraph"
          className="text-architect-font_gris text-[18px] lg:text-[28px]  flex items-center  text-center mt-10 lg:w-[55%] min-w-70"
        >
          Maintenant, consultez vos e-mail
        </Typography>
        <div className="flex flex-row justify-center w-full gap-1">
          <Typography
            variant="paragraph"
            className="text-architect-font_gris text-[14px] mt-3"
          >
            ou
          </Typography>
          <Typography
            variant="paragraph"
            className="text-architect-primary text-[14px] self-end mt-3 underline cursor-pointer font-bold"
            onClick={() => router.back()}
          >
            se connecter
          </Typography>
        </div>
      </Popup>
    </PageLayout>
  );
};

export default ArchitectForgetPasswordPage;
