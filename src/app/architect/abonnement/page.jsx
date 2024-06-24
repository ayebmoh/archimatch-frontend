"use client";
import Abonnement from "@/assets/Abonnement.svg";
import architectLogo from "@/assets/ArchitectLogo.svg";
import Jeton from "@/assets/Jeton.svg";
import { MainCard, PageLayout } from "@/components";
import { Button, Typography } from "@/components/RemoteComponents";
import { useFetchData } from "@/services/queries";
import { CheckIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { Spinner } from "@material-tailwind/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
const abonnement_page = (props) => {
  const {} = props;

  const router = useRouter();
  const { data: plan, isLoading } = useFetchData(
    "/archimatch_app/subscriptions/",
    "plans",
  );

  console.log();

  const handleChangePage = (id) => {
    router.push(`/architect/Paiement/${id}`);
  };
  if (isLoading) {
    return <Spinner />;
  } else {
    return (
      <PageLayout className="pt-10">
        <div className="max-w-[1024px] h-full flex flex-col  m-auto px-2 z-10">
          <img
            className="hidden lg:block w-40 mr-4  cursor-pointer self-center"
            src={architectLogo.src}
          />
        </div>
        <div className="flex flex-col lg:border-r-2">
          <Typography
            variant="h1"
            className="text-architect-font_gris text-[25px] text-center lg:text-[36px]  flex justify-center mt-6  "
          >
            Commencez dès aujourd'hui. Stimulez vos services !
          </Typography>
          <Typography
            variant="paragraph"
            className="text-architect-secondary_text_color  text-[15px] text-center lg:text-[20px]  flex justify-center"
          >
            Rejoignez +6 000 architectes utilisant archimatch pour alimenter des
            projets modernes
          </Typography>
        </div>
        <div className=" p-3 flex-col gap-4 justify-center lg:flex-row mt-6 flex items-center ">
          {/* <MainCard className=" max-w-[280px] w-[100%] shadow-inner  py-7 z-10 ">
          <Typography
            variant="h1"
            className="text-architect-primary text-[11px] font-bold flex justify-start mb-2  "
          >
            BASIQUE
          </Typography>

          <Typography
            variant="paragraph"
            className="text-architect-font_gris text-[34px] font-extrabold justify-start  "
          >
            Gratuit
          </Typography>
          <div className=" flex-row flex items-center justify-start  py-[-20px] gap-2 mb-7 mt-2">
            <Image src={JetonBlue} className="" alt="" />
            <div className=" flex-row flex items-center mt-4 gap-2">
              <Typography
                variant="h2"
                className="text-architect-font_gris text-[15px]"
              >
                5 jetons
              </Typography>
              <Typography
                variant="paragraph"
                className="text-architect-secondary_text_color text-[15px]   "
              >
                /mois
              </Typography>
            </div>
          </div>
          <div className=" flex flex-col -w-[208px] gap-y-2">
            <div className="flex items-center ">
              <Typography
                variant="paragraph"
                className="text-architect-font_gris text-[10px] font-medium flex items-center gap-1"
              >
                <CheckIcon className="h-4 w-4 text-architect-primary " />
                Projets clients proposés par la plateforme
              </Typography>
            </div>
            <div className="flex items-center ">
              <Typography
                variant="paragraph"
                className="text-architect-secondary_text_color text-[10px] font-medium flex items-center gap-1"
              >
                <XMarkIcon className="h-4 w-4 text-architect-secondary_text_color " />
                Projets clients proposés sur votre profil
              </Typography>
            </div>
            <div className="flex items-center  ">
              <Typography
                variant="paragraph"
                className="text-architect-secondary_text_color text-[10px] font-medium flex items-center gap-1"
              >
                <XMarkIcon className="h-4 w-4 text-architect-secondary_text_color " />
                Exposition de vos réalisations dans la vitrine ArchiMatch
              </Typography>
            </div>
            <div className="flex items-center ">
              <Typography
                variant="paragraph"
                className="text-architect-secondary_text_color text-[10px] font-medium flex items-center gap-1"
              >
                <XMarkIcon className="h-4 w-4 text-architect-secondary_text_color " />
                Proposition des projetsselon vos Préférences
              </Typography>
            </div>
            <div className="flex items-center ">
              <Typography
                variant="paragraph"
                className="text-architect-secondary_text_color text-[10px] font-medium flex items-center gap-1"
              >
                <XMarkIcon className="h-4 w-4 text-architect-secondary_text_color " />
                Mise en vedette de profil dans la vitrine
              </Typography>
            </div>
            <div className="flex items-center ">
              <Typography
                variant="paragraph"
                className="text-architect-secondary_text_color text-[10px] font-medium flex items-center gap-1"
              >
                <XMarkIcon className="h-4 w-4 text-architect-secondary_text_color " />
                Accès à la préférence
              </Typography>
            </div>
            <div className="flex items-center ">
              <Typography
                variant="paragraph"
                className="text-architect-secondary_text_color text-[10px] font-medium flex items-center gap-1"
              >
                <XMarkIcon className="h-4 w-4 text-architect-secondary_text_color " />
                Mise en avant spéciale
              </Typography>
            </div>
          </div>

          <Button className="w-full mt-16" onClick={handleChangePage}>
            {" "}
            Choose{" "}
          </Button>
        </MainCard> */}
          {plan &&
            plan.data.map((plan, index) =>
              plan.active ? (
                <MainCard
                  key={index}
                  className=" max-w-[280px] w-[100%] drop-shadow-2xl py-10 z-10 px-4"
                >
                  <Typography
                    variant="h1"
                    className="text-architect-primary text-[11px] font-bold flex justify-start mb-2  "
                  >
                    {plan.sub_name}
                  </Typography>
                  <div className="flex flex-row  gap-1">
                    <Typography
                      variant="paragraph"
                      className="text-architect-font_gris text-[34px] font-extrabold flex justify-center  "
                    >
                      {plan.price}
                    </Typography>
                    <div className=" flex-row flex items-center">
                      <Typography
                        variant="paragraph"
                        className="text-architect-font_gris font-extrabold text-[16px] mt-3   "
                      >
                        DT
                      </Typography>
                      <Typography
                        variant="paragraph"
                        className="text-architect-secondary_text_color text-[16px]   mt-3 "
                      >
                        /mois
                      </Typography>
                    </div>
                  </div>
                  <div className=" flex-row flex items-center justify-start  py-[-20px]">
                    <Image src={Jeton} className="" alt="" />

                    <div className=" flex-row flex items-center mt-4 gap-2">
                      <Typography
                        variant="h2"
                        className="text-architect-font_gris text-[15px]"
                      >
                        {plan.token_num} jetons
                      </Typography>
                      <Typography
                        variant="paragraph"
                        className="text-architect-secondary_text_color text-[15px]   "
                      >
                        /mois
                      </Typography>
                    </div>
                  </div>
                  <div className=" flex flex-col -w-[208px] gap-y-2">
                    <div className="flex items-center ">
                      <Typography
                        variant="paragraph"
                        className="text-architect-font_gris text-[10px] font-medium flex items-center gap-1"
                      >
                        {plan.prop_platform == true ? (
                          <CheckIcon className=" text-architect-primary h-4 w-4" />
                        ) : (
                          <XMarkIcon className=" text-architect-secondary_text_color h-4 w-4" />
                        )}
                        Projets clients proposés par la plateforme
                      </Typography>
                    </div>
                    <div className="flex items-center ">
                      <Typography
                        variant="paragraph"
                        className="text-architect-font_gris text-[10px] font-medium flex items-center gap-1"
                      >
                        {plan.prop_profil == true ? (
                          <CheckIcon className=" text-architect-primary h-4 w-4" />
                        ) : (
                          <XMarkIcon className="text-architect-secondary_text_color h-4 w-4" />
                        )}{" "}
                        Projets clients proposés sur votre profil{" "}
                      </Typography>
                    </div>
                    <div className="flex items-center ">
                      <Typography
                        variant="paragraph"
                        className="text-architect-font_gris text-[10px] font-medium flex items-center gap-1"
                      >
                        {plan.realization_expo == true ? (
                          <CheckIcon className=" text-architect-primary h-4 w-4" />
                        ) : (
                          <XMarkIcon className="text-architect-secondary_text_color h-4 w-4" />
                        )}{" "}
                        Exposition de vos réalisations sur ArchiMatch
                      </Typography>
                    </div>

                    <div className="flex items-center ">
                      <Typography
                        variant="paragraph"
                        className="text-architect-font_gris text-[10px] font-medium flex items-center gap-1"
                      >
                        {plan.fournisseur == true ? (
                          <CheckIcon className=" text-architect-primary h-4 w-4" />
                        ) : (
                          <XMarkIcon className="text-architect-secondary_text_color h-4 w-4" />
                        )}{" "}
                        Accès privilégié aux fournisseurs partenaires{" "}
                      </Typography>
                    </div>
                    <div className="flex items-center ">
                      <Typography
                        variant="paragraph"
                        className="text-architect-font_gris text-[10px] font-medium flex items-center gap-1"
                      >
                        {plan.archi_supp == true ? (
                          <CheckIcon className=" text-architect-primary h-4 w-4" />
                        ) : (
                          <XMarkIcon className="text-architect-secondary_text_color  h-4 w-4" />
                        )}{" "}
                        Accès au support ArchiMatch
                      </Typography>
                    </div>
                    <div className="flex items-center ">
                      <Typography
                        variant="paragraph"
                        className="text-architect-font_gris text-[10px] font-medium flex items-center gap-1"
                      >
                        {plan.prop_selon_pref == true ? (
                          <CheckIcon className=" text-architect-primary h-4 w-4" />
                        ) : (
                          <XMarkIcon className="text-architect-secondary_text_color h-4 w-4" />
                        )}{" "}
                        Proposition des projets selon vos Préférences{" "}
                      </Typography>
                    </div>
                    <div className="flex items-center ">
                      <Typography
                        variant="paragraph"
                        className="text-architect-font_gris text-[10px] font-medium flex items-center gap-1"
                      >
                        {plan.mev_profil == true ? (
                          <CheckIcon className=" text-architect-primary h-4 w-4" />
                        ) : (
                          <XMarkIcon className="text-architect-secondary_text_color h-4 w-4" />
                        )}{" "}
                        Mise en vedette de profil dans ArchiMatch
                      </Typography>
                    </div>
                    <div className="flex items-center ">
                      <Typography
                        variant="paragraph"
                        className="text-architect-font_gris text-[10px] font-medium flex items-center gap-1"
                      >
                        {plan.devi_gen == true ? (
                          <CheckIcon className=" text-architect-primary h-4 w-4" />
                        ) : (
                          <XMarkIcon className="text-architect-secondary_text_color h-4 w-4" />
                        )}{" "}
                        Génération des devis{" "}
                      </Typography>
                    </div>

                    {/* <div className="flex items-center ">
                  <Typography
                    variant="paragraph"
                    className="text-architect-secondary_text_color text-[10px] font-medium flex items-center gap-1"
                  >
                    {plan.archi_supp == true ? (
                      <CheckIcon className=" text-architect-primary h-4 w-4" />
                    ) : (
                      <XMarkIcon className="text-architect-secondary_text_color  h-4 w-4" />
                    )}{" "}
                    Mise en avant spéciale
                  </Typography>
                </div> */}
                  </div>

                  <Button
                    className="w-full mt-16"
                    onClick={() => handleChangePage(plan.id)}
                  >
                    {" "}
                    Choose{" "}
                  </Button>
                </MainCard>
              ) : null,
            )}
          {/* <MainCard className=" max-w-[280px] w-[100%] shadow-xl py-7 z-10">
          <Typography
            variant="h1"
            className="text-architect-primary text-[11px] font-bold flex justify-start mb-2  "
          >
            PREIUM PRO
          </Typography>
          <div className="flex flex-row  gap-1">
            <Typography
              variant="paragraph"
              className="text-architect-font_gris text-[34px] font-extrabold flex justify-center  "
            >
              54.99
            </Typography>
            <div className=" flex-row flex items-center">
              <Typography
                variant="paragraph"
                className="text-architect-font_gris font-extrabold text-[16px] mt-3   "
              >
                DT
              </Typography>
              <Typography
                variant="paragraph"
                className="text-architect-secondary_text_color text-[16px]   mt-3 "
              >
                /mois
              </Typography>
            </div>
          </div>
          <div className=" flex-row flex items-center justify-start  py-[-20px]">
            <Image src={Jeton} className="" alt="" />

            <div className=" flex-row flex items-center mt-4 gap-2">
              <Typography
                variant="h2"
                className="text-architect-font_gris text-[15px]"
              >
                15 jetons
              </Typography>
              <Typography
                variant="paragraph"
                className="text-architect-secondary_text_color text-[15px]   "
              >
                /mois
              </Typography>
            </div>
          </div>
          <div className=" flex flex-col -w-[208px] gap-y-2">
            <div className="flex items-center ">
              <Typography
                variant="paragraph"
                className="text-architect-font_gris text-[10px] font-medium flex items-center gap-1"
              >
                <CheckIcon className="h-4 w-4 text-architect-primary " />
                Accès aux Projets de la Plateforme
              </Typography>
            </div>
            <div className="flex items-center ">
              <Typography
                variant="paragraph"
                className="text-architect-font_gris text-[10px] font-medium flex items-center gap-1"
              >
                <CheckIcon className="h-4 w-4 text-architect-primary " />
                Accès aux Projets des Clients Directs
              </Typography>
            </div>
            <div className="flex items-center ">
              <Typography
                variant="paragraph"
                className="text-architect-font_gris text-[10px] font-medium flex items-center gap-1"
              >
                <CheckIcon className="h-4 w-4 text-architect-primary " />
                Exposition de travaux
              </Typography>
            </div>
            <div className="flex items-center ">
              <Typography
                variant="paragraph"
                className="text-architect-font_gris text-[10px] font-medium flex items-center gap-1"
              >
                <CheckIcon className="h-4 w-4 text-architect-primary " />5
                Projets mensuels
              </Typography>
            </div>
            <div className="flex items-center ">
              <Typography
                variant="paragraph"
                className="text-architect-font_gris text-[10px] font-medium flex items-center gap-1"
              >
                <CheckIcon className="h-4 w-4 text-architect-primary " />
                Accès au support
              </Typography>
            </div>
            <div className="flex items-center ">
              <Typography
                variant="paragraph"
                className="text-architect-font_gris text-[10px] font-medium flex items-center gap-1"
              >
                <CheckIcon className="h-4 w-4 text-architect-primary " />
                Accès à la préférence
              </Typography>
            </div>
            <div className="flex items-center ">
              <Typography
                variant="paragraph"
                className="text-architect-font_gris text-[10px] font-medium flex items-center gap-1"
              >
                <CheckIcon className="h-4 w-4 text-architect-primary " />
                Mise en avant spéciale
              </Typography>
            </div>
          </div>

          <Button
            className="w-full mt-16 bg-architect-dark_blue"
            onClick={handleChangePage}
          >
            {" "}
            Choose{" "}
          </Button>
        </MainCard> */}
        </div>

        <Image
          src={Abonnement}
          className="hidden lg:block absolute  bottom-0 right-0 w-[400px] !z-0 hover:shadow-2xl"
          alt=""
        />
      </PageLayout>
    );
  }
};
export default abonnement_page;
