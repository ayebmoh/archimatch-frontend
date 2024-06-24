"use client";
import { Image, MainCard, PageLayout } from "@/components";
import { Button, Progress, Typography } from "@/components/RemoteComponents";
import React from "react";

const ArchitectConnexionPage = () => {
  const [openPopover, setOpenPopover] = React.useState(false);

  const triggers = {
    onMouseEnter: () => setOpenPopover(true),
    onMouseLeave: () => setOpenPopover(false),
  };
  return (
    <PageLayout className="flex justify-center   ">
      <div className="flex flex-col max-w-screen-xl  w-full">
        <Typography
          variant="h1"
          className="text-architect-font_gris self-center w-[90%] md:w-[60%] text-[30px] font-bold lg:text-[38px] flex justify-center  mt-16"
        >
          Bienvenue sur archimatch !
        </Typography>
        <Typography
          variant="h1"
          className="text-architect-secondary_text_color  text-center text-[12px] font-normal  w-[80%] md:w-[60%] lg:text-[16px]  self-center mt-2"
        >
          Nous sommes enchantés de vous avoir parmi nous. Pour tirer le meilleur
          parti de votre expérience sur notre plateforme, nous vous invitons à
          compléter votre profil.
        </Typography>

        <Progress
          color={"red"}
          className="  md:w-[50%] w-[80%] self-center mt-4 mb-4 lg:mt-10 lg:mb-16"
          value={25}
          size="sm"
        />

        <MainCard className="flex flex-col w-[75%]  self-center lg:flex-row items-center  lg:justify-between">
          <div className="flex items-center w-full lg:w-[60%]  self-start mt-6">
            <div className="flex flex-row items-center gap-1">
              <Image
                src="/assets/Check.svg"
                alt="Check"
                className=" w-20 h-10  cursor-pointer self-start"
              />

              <div className="flex flex-col mt-[6px] ">
                <Typography
                  variant="paragraph"
                  className=" text-[15px] font-bold mb-8 "
                >
                  Rejoindre la réunion de présentation
                </Typography>

                <Typography
                  variant="h1"
                  className="text-architect-secondary_text_color text-[12px] font-normal lg:text-[16px] text-justify "
                >
                  Nous vous remercions d'avoir assisté à la réunion de
                  démonstration et d'avoir finalisé les détails avec nous. Nous
                  sommes impatients de commencer à travailler ensemble sur la
                  plateforme ArchiMatch.
                </Typography>
              </div>
            </div>
          </div>

          <div className=" cursor-pointer   w-[325px] self-center ">
            <Image
              src="/assets/cartee.svg"
              alt="Check"
              className=" w-80 h-80 "
            />
          </div>
        </MainCard>
        <MainCard className="flex flex-col w-[75%]  self-center lg:flex-row items-center  lg:justify-between mt-4 mb-8 ">
          <div className="flex items-center w-full   self-start ">
            <div className="flex flex-row items-center gap-1">
              <div className="flex flex-col mt-[6px] ">
                <div className="flex justify-between flex-row mb-4">
                  <div className="flex flex-row items-center justify-center gap-2">
                    <Image
                      src="/assets/NumberTwo.svg"
                      alt="Check"
                      className=" w-7 h-10  "
                    />

                    <Typography
                      variant="paragraph"
                      className=" text-[15px] font-bold "
                    >
                      Compléter votre profil
                    </Typography>
                  </div>
                  <Button
                    type="submit"
                    size="sm"
                    className="  mb-2 text-[15px]"

                    //disabled={isLoading}
                  >
                    Compléter
                  </Button>
                </div>
                <Typography
                  variant="h1"
                  className="text-architect-secondary_text_color text-[12px] font-normal lg:text-[16px] text-justify  "
                >
                  Votre compte a été créé avec succès ! Vous avez désormais
                  accès à toutes les fonctionnalités d'ArchiMatch. Vous pouvez
                  commencer par compléter votre profil en ajoutant vos
                  réalisations passées, en décrivant vos compétences et en
                  mettant en valeur votre expérience.
                </Typography>

                <div className=" w-full   self-start mt-6">
                  <div className="flex flex-row items-center  gap-2">
                    <Image
                      src="/assets/NumberThree.svg"
                      alt="Check"
                      className=" w-7 h-10  "
                    />

                    <Typography
                      variant="paragraph"
                      className=" text-[15px] font-bold "
                    >
                      Lancez-vous et trouvez votre premier client !
                    </Typography>
                  </div>
                  <Typography
                    variant="h1"
                    className="text-architect-secondary_text_color text-[12px] font-normal lg:text-[16px] text-justify  "
                  >
                    Une fois votre profil prêt, explorez les projets disponibles
                    et proposez vos services. La première étape est souvent la
                    plus importante, alors n'hésitez pas à vous lancer avec
                    confiance et détermination.
                  </Typography>
                  <div className="mt-4">
                    <Typography
                      variant="paragraph"
                      className=" text-[15px] text-architect-primary font-bold "
                    >
                      Bonne chance !
                    </Typography>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </MainCard>
      </div>
    </PageLayout>
  );
};

export default ArchitectConnexionPage;
