import constructionArchitect from "@/assets/const.svg";
import interieurArchitect from "@/assets/interieur.svg";
import { MainCard } from "@/components";
import { Typography } from "@/components/RemoteComponents";
import Image from "next/image";

function Step1(props) {
  const { handleNext, formik } = props;

  const handle_architect_type = (value) => {
    formik.setFieldValue("architect_type", value);
    formik.handleSubmit();
  };
  return (
    <>
      <div className="flex flex-col self-center mt-8 items-center justify-center max-w-[420px] z-10">
        <Typography
          variant="h1"
          className="text-architect-font_gris text-[20px] lg:text-[30px]"
        >
          Bienvenue sur archimatch !
        </Typography>
        <Typography
          variant="paragraph"
          className="text-architect-secondary_text_color text-[15px]"
        >
          Pour commencer, veuillez sélectionner votre spécialité
        </Typography>
      </div>
      <div className="flex flex-col  gap-4 mt-14 lg:flex-row max-w-screen-md self-center z-10">
        <MainCard
          onClick={() => handle_architect_type("architecte_construction")}
          className="flex flex-grow basis-0 cursor-pointer flex-col items-center"
        >
          <Image src={constructionArchitect} className="" alt="" />

          <Typography
            variant="h1"
            className="text-architect-font_gris text-[15px] md:text-[20px] lg:text-[25px] text-center"
          >
            Je suis un architecte de construction
          </Typography>
        </MainCard>
        <MainCard
          onClick={() => handle_architect_type("architecte_interieur")}
          className="flex flex-grow basis-0 cursor-pointer flex-col items-center"
        >
          <Image src={interieurArchitect} className="" alt="" />

          <Typography
            variant="h1"
            className="text-architect-font_gris text-[15px] md:text-[20px] lg:text-[25px] text-center"
          >
            Je suis un architecte d'interieur
          </Typography>
        </MainCard>
      </div>
    </>
  );
}

export default Step1;
