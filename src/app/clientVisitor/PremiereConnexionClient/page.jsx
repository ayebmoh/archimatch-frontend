"use client";
import Hand from "@/assets/Hand.svg";
import NumberOneClient from "@/assets/NumberOneClient.svg";
import NumberThreeClient from "@/assets/NumberThreeClient.svg";
import NumberTwoClient from "@/assets/NumberTwoClient.svg";
import PremiereConnexion from "@/assets/PremiereConnexion.svg";
import { MainCard, PageLayout } from "@/components";
import { Button, Typography } from "@/components/RemoteComponents";
const ClientPremiereConnexionClientPage = () => {
  return (
    <PageLayout className="flex justify-center   ">
      <div className="xl:max-w-screen-xl    m-auto w-[90%] justify-between  mt-20  ">
        <MainCard className="mb-20 xl:py-[80px] xl:px-[80px] bg-[#edf8fe] shadow-inset ">
          <div className="flex flex-col w-full  xl:flex-row items-center gap-6 ">
            <div className=" xl:w-[40%] w-40 cursor-pointer  ">
              <img className=" " src={PremiereConnexion.src} />
            </div>

            <div className="flex flex-col  w-full xl:w-[60%]">
              <div className="flex  flex-row   items-center gap-2 mt-9 ">
                <Typography className=" font-bold text-[36px] self-center text-architect-main_blue   ">
                  Bienvenue sur archimatch !
                </Typography>
                <img
                  className=" cursor-pointer  w-[70px]  flex items-center  "
                  src={Hand.src}
                />
              </div>
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
                    src={NumberOneClient.src}
                  />
                  <div className="flex flex-col mt-2 ">
                    <Typography
                      variant="paragraph"
                      className=" text-[15px] font-bold "
                    >
                      Consultez vos annonces publiées
                    </Typography>

                    <Typography
                      variant="h1"
                      className="text-architect-secondary_text_color text-[12px] font-normal lg:text-[16px] "
                    >
                      Accédez à la liste complète de vos annonces de projet
                      publiées. Vous pouvez y consulter les détails de chaque
                      projet, les architectes intéressés et les devis soumis.
                    </Typography>
                  </div>
                </div>
              </div>
              <div className="flex items-center mt-4 ">
                <div className="flex flex-row items-center gap-1">
                  <img
                    className=" cursor-pointer self-start  "
                    src={NumberTwoClient.src}
                  />
                  <div className="flex flex-col mt-2 ">
                    <Typography
                      variant="paragraph"
                      className=" text-[15px] font-bold "
                    >
                      Explorez les profils des architectes
                    </Typography>

                    <Typography
                      variant="h1"
                      className="text-architect-secondary_text_color text-[12px] font-normal lg:text-[16px] "
                    >
                      Lorsqu'un architecte manifeste son intérêt pour votre
                      projet, vous pouvez consulter son profil complet pour
                      découvrir ses réalisations passées, les avis de ses
                      clients et en apprendre davantage sur son expertise.
                    </Typography>
                  </div>
                </div>
              </div>
              <div className="flex items-center mt-4 ">
                <div className="flex flex-row items-center gap-1">
                  <img
                    className=" cursor-pointer self-start  "
                    src={NumberThreeClient.src}
                  />
                  <div className="flex flex-col mt-2 ">
                    <Typography
                      variant="paragraph"
                      className=" text-[15px] font-bold "
                    >
                      Évaluez les devis reçus
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

export default ClientPremiereConnexionClientPage;