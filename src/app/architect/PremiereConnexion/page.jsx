"use client";
import NumberOne from "@/assets/NumberOne.svg";
import NumberThree from "@/assets/NumberThree.svg";
import NumberTwo from "@/assets/NumberTwo.svg";
import { Image, MainCard, PageLayout } from "@/components";
import { Button, Typography } from "@/components/RemoteComponents";
import { useRouter } from "next/navigation";

const ArchitectPremiereConnexionPage = () => {
  const router = useRouter();

  return (
    <PageLayout className="flex justify-center   ">
      <div className="xl:max-w-screen-xl  m-auto w-[90%] justify-between  mt-20  ">
        <MainCard className="mb-20 xl:py-[80px] xl:px-[80px]  shadow-inset ">
          <div className="flex flex-col w-full  xl:flex-row items-center gap-6 ">
            <div className=" xl:w-[40%] w-40 cursor-pointer  ">
              <Image
                src="/assets/PremiereConnexion.svg"
                alt="PremiereConnexion"
                className="h-96"
              />
            </div>

            <div className="flex flex-col  w-full xl:w-[60%]">
              <Typography
                variant="h1"
                className="text-architect-font_gris text-[20px] font-bold lg:text-[28px]"
              >
                Bienvenue sur archimatch !
              </Typography>
              <Typography
                variant="h1"
                className="text-architect-secondary_text_color text-[12px] font-normal lg:text-[16px] mt-6"
              >
                Félicitations pour avoir publié votre annonce de projet sur
                ArchiMatch ! Vous êtes sur le point de trouver l'architecte
                idéal pour transformer votre vision en réalité.
              </Typography>
              <Typography
                variant="h1"
                className="text-architect-secondary_text_color text-[12px] font-normal lg:text-[16px] mt-3"
              >
                Voici les prochaines étapes à suivre pour trouver le partenaire
                idéal :
              </Typography>

              <div className="flex items-center mt-4 ">
                <div className="flex flex-row items-center gap-1">
                  <img
                    className=" cursor-pointer self-start  "
                    src={NumberOne.src}
                  />
                  <div className="flex flex-col mt-2 ">
                    <Typography
                      variant="paragraph"
                      className=" text-[15px] font-bold "
                    >
                      Rejoindre la réunion de présentation
                    </Typography>

                    <Typography
                      variant="h1"
                      className="text-architect-secondary_text_color text-[12px] font-normal lg:text-[16px] "
                    >
                      Nous allons vous présenter les fonctionnalités et les
                      offres disponible sur la plateforme ArchiMatch
                    </Typography>
                    <Typography
                      variant="h1"
                      className="text-architect-secondary_text_color text-[12px] font-normal lg:text-[16px] mt-3"
                    >
                      Votre réunion de démo est le [date de la réunion]
                    </Typography>
                  </div>
                </div>
              </div>
              <div className="flex items-center mt-4 ">
                <div className="flex flex-row items-center gap-1">
                  <img
                    className=" cursor-pointer self-start  "
                    src={NumberTwo.src}
                  />
                  <div className="flex flex-col mt-2 ">
                    <Typography
                      variant="paragraph"
                      className=" text-[15px] font-bold "
                    >
                      Votre compte crée sur ArchiMatch
                    </Typography>

                    <Typography
                      variant="h1"
                      className="text-architect-secondary_text_color text-[12px] font-normal lg:text-[16px] "
                    >
                      Lorsqu'un architecte manifeste son intérêt pour votre
                      projet, vous pouvez consulter son profil complet pour
                      découvrir ses réalisations passées, les avis de ses
                      clients et en apprendre davantage sur son expertise
                    </Typography>
                  </div>
                </div>
              </div>
              <div className="flex items-center mt-4 ">
                <div className="flex flex-row items-center gap-1">
                  <img
                    className=" cursor-pointer self-start  "
                    src={NumberThree.src}
                  />
                  <div className="flex flex-col mt-2 ">
                    <Typography
                      variant="paragraph"
                      className=" text-[15px] font-bold "
                    >
                      Lancez vous et trouvez votre première clients
                    </Typography>

                    <Typography
                      variant="h1"
                      className="text-architect-secondary_text_color text-[12px] font-normal lg:text-[16px] "
                    >
                      Consultez les devis soumis par les architectes et prenez
                      le temps de les évaluer attentivement. Vous pouvez les
                      accepter s'ils correspondent à vos attentes ou les refuser
                      si vous préférez explorer d'autres options
                    </Typography>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex  justify-center">
            <Button
              type="submit"
              size="md"
              className="w-[40%] mt-16 p-3 flex  justify-center text-[15px]"
              onClick={() =>
                router.push("/architect/PremiereConnexion/LastStep")
              }
              //disabled={isLoading}
            >
              Suivre l'évolution de mon projet
            </Button>
          </div>
        </MainCard>
      </div>
    </PageLayout>
  );
};

export default ArchitectPremiereConnexionPage;
