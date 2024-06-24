"use client";
import ClientLogo from "@/assets/ClientLogo.svg";
import LoginClient from "@/assets/LoginClient.svg";
import { CustomInput, PageLayout } from "@/components";
import { Button, Typography } from "@/components/RemoteComponents";

import { useGetClient } from "@/services/queries";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import * as Yup from "yup";

//import { openAlert } from "../../components/alert/OpenAlert";
//import { handleErrors } from "../../utils";

const ClientParEmailPage = () => {
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
      console.log("form submitted");
      console.log(values);
      handleGetClient(values);
    },
  });
  const getClientMutation = useGetClient("", {}, router, false);

  const handleGetClient = (values) => {
    const userData = getClientMutation.mutate({
      email: values.email,
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
            <CustomInput
              placeholder="E-mail"
              containerClassName="w-full"
              label="E-mail"
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
              className="w-full mt-10 flex flex-row justify-center items-center"
              onClick={formik.onSubmit}
              //disabled={isLoading}
              loading={getClientMutation.isPending}
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
                onClick={() => router.push("/clientVisitor/CreateAccountEmail")}
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

export default ClientParEmailPage;
