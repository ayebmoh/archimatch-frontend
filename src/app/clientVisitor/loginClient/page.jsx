"use client";
import ClientLogo from "@/assets/ClientLogo.svg";
import LoginClient from "@/assets/LoginClient.svg";
import Message from "@/assets/Message.svg";
import Phone from "@/assets/Phone.svg";
import { MainCard, PageLayout } from "@/components";
import { Typography } from "@/components/RemoteComponents";
import { useloginArchitect } from "@/services/queries";
import { handleFirebaseAuth } from "@/utils";
import { useFormik } from "formik";
import Image from "next/image";
import { useRouter } from "next/navigation";
import * as Yup from "yup";
//import { openAlert } from "../../components/alert/OpenAlert";
//import { handleErrors } from "../../utils";

const ClientloginClientPage = () => {
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
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
    }),

    onSubmit: (values) => {
      console.log("form submitted");
      console.log(values);
      handleLogin(values);
    },
  });
  const loginMutation = useloginArchitect("", {
    username: formik.values.email,
    password: formik.password,
  });

  const handleLogin = (values) => {
    const userData = loginMutation.mutate({
      username: values.email,
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
              Bienvenue sur archimatch !
            </Typography>
            <Typography
              variant="paragraph"
              className="text-architect-secondary_text_color text-[15px]"
            >
              Se connecter à votre espace pour recevoir vos devis et connecter
              les architectes
            </Typography>
          </div>
          <Typography
            variant="paragraph"
            className="text-architect-secondary_text_color text-[15px] mt-8"
          >
            Choisissez comment vous souhaitez vous connecter.
          </Typography>
          <div className="flex flex-row  w-[70%] lg:w-[50%]  gap-4 mt-14 max-w-screen-md self-center z-10 ">
            <MainCard
              className="flex flex-grow basis-0 cursor-pointer flex-col items-center  gap-3 "
              onClick={() => router.push("/clientVisitor/ParEmail")}
            >
              <Image src={Message} className="" alt="" />

              <Typography
                variant="h1"
                className="text-client-primary text-[11px]  text-center"
              >
                <a href="/clientVisitor/ParEmail">Par e-mail</a>
              </Typography>
            </MainCard>
            <MainCard
              className="flex flex-grow basis-0 cursor-pointer flex-col items-center  gap-3  lg:[45%]"
              onClick={() => router.push("/clientVisitor/ParPhone")}
            >
              <Image src={Phone} className="" alt="" />

              <Typography
                variant="h1"
                className="text-client-primary text-[11px] text-center "
              >
                <a href="/clientVisitor/ParPhone">Par Téléphone</a>
              </Typography>
            </MainCard>
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

export default ClientloginClientPage;
