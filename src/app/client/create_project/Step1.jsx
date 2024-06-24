"use client";
import constructionArchitect from "@/assets/const.svg";
import interieurArchitect from "@/assets/interieur.svg";
import { MainCard } from "@/components";
import { Typography } from "@/components/RemoteComponents";
import { cn } from "@/utils";
import Image from "next/image";
import { useEffect, useState } from "react";
const Step1 = (props) => {
  const { formik } = props;
  const [active, setActive] = useState("");
  const handle_architect_type = (value) => {
    formik.setFieldValue("architect_type", value);
    setActive(value);
  };
  useEffect(() => {
    console.log(active);
  }, [active]);
  return (
    <div className="w-full  lg:w-[90%] ">
      <Typography className="text-[25px] lg:text-[35px] text-architect-font_gris font-bold  ">
        Pour votre projet vous chercher
      </Typography>
      <Typography className="text-[18px]  text-architect-secondary_text_color   mb-10 ">
        Pour commencer, veuillez sélectionner votre spécialité
      </Typography>
      <div className="flex flex-col gap-4 mt-14 lg:flex-row  m-auto w-[60%] lg:m-0 lg:w-[90%]  self-center border-2 ">
        <MainCard
          onClick={() => handle_architect_type("architecte_construction")}
          className={cn(
            "flex flex-grow basis-0 cursor-pointer flex-col items-center p-2",
            active === "architecte_construction" &&
              "border-2 border-client-primary ",
          )}
        >
          <Image src={constructionArchitect} className="" alt="" />

          <Typography
            variant="h1"
            className="text-architect-font_gris  text-[15px] md:text-[20px] lg:text-[25px] text-center"
          >
            Je cherche un architecte de construction
          </Typography>
        </MainCard>
        <MainCard
          onClick={() => handle_architect_type("architecte_interieur")}
          className={cn(
            "flex flex-grow basis-0  cursor-pointer flex-col items-center p-1",
            active === "architecte_interieur" &&
              "border-2 border-client-primary",
          )}
        >
          <Image src={interieurArchitect} className="" alt="" />

          <Typography
            variant="h1"
            className="text-architect-font_gris text-[15px] md:text-[20px] lg:text-[25px] text-center"
          >
            Je cherche un architecte d'interieur
          </Typography>
        </MainCard>
      </div>
    </div>
  );
};

export default Step1;
