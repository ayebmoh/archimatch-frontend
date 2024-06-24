"use client";
import Armure from "@/assets/Armure.svg";
import Banque from "@/assets/Banque.svg";
import Edinar from "@/assets/Edinar.svg";
import GestionAbonn from "@/assets/GestionAbonn.svg";
import JetonRouge from "@/assets/JetonRouge.svg";
import Konnectt from "@/assets/Konnectt.svg";
import Poste from "@/assets/Poste.svg";
import Visaa from "@/assets/Visaa.svg";
import { MainCard } from "@/components";
import { useFetchData, useShowSub } from "@/services/queries";
import { BoltIcon, CheckIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { Button, Spinner, Typography } from "@material-tailwind/react";
import Cookies from "js-cookie";

import Image from "next/image";
import { useRouter } from "next/navigation";
const architectGestionAbonnementPage = (props) => {
  const router = useRouter();
  const cookiesdata = Cookies.get("id");
  const { data: usersub, isloading } = useShowSub(cookiesdata);

  const { data: plan, isLoading } = useFetchData(
    "/archimatch_app/subscriptions/",
    "plans",
  );
  console.log(plan);
  return (
    <>
      {" "}
      <div className="">
        <Typography
          variant="paragraph"
          className="text-[#344054] text-[20px] font-semibold "
        >
          Votre abonnement actif
        </Typography>
        {isloading || !usersub ? (
          <Spinner />
        ) : (
          <MainCard className=" flex flex-col items-center lg:flex-row bg-gradient-to-r from-[#daf2ff] to-[#f3fdff] justify-between mt-6 ">
            <div className=" flex flex-col">
              <Typography
                variant="paragraph"
                className="text-architect-primary text-[15px] font-bold "
              >
                {usersub.data.subscription.sub_name}
              </Typography>
              <Typography
                variant="paragraph"
                className="text-[#344054] text-[30px] font-extrabold "
              >
                {usersub.data.subscription.price}/dt
              </Typography>

              <div className=" flex flex-col -w-[208px] gap-y-2">
                <div className="flex items-center  mt-4">
                  <Typography
                    variant="paragraph"
                    className="text-architect-font_gris text-[16px] font-medium flex items-center gap-1"
                  >
                    {usersub.data.subscription.prop_platform == true ? (
                      <CheckIcon className=" text-architect-primary h-5 w-5" />
                    ) : (
                      <XMarkIcon className=" text-architect-secondary_text_color h-5 w-5" />
                    )}
                    Projets clients proposés par la plateforme
                  </Typography>
                </div>
                <div className="flex items-center ">
                  <Typography
                    variant="paragraph"
                    className="text-architect-font_gris text-[16px] font-medium flex items-center gap-1"
                  >
                    {usersub.data.subscription.prop_profil == true ? (
                      <CheckIcon className=" text-architect-primary h-5 w-5" />
                    ) : (
                      <XMarkIcon className="text-architect-secondary_text_color h-5 w-5" />
                    )}{" "}
                    Projets clients proposés sur votre profil{" "}
                  </Typography>
                </div>
                <div className="flex items-center ">
                  <Typography
                    variant="paragraph"
                    className="text-architect-font_gris text-[16px] font-medium flex items-center gap-1"
                  >
                    {usersub.data.subscription.realization_expo == true ? (
                      <CheckIcon className=" text-architect-primary h-5 w-5" />
                    ) : (
                      <XMarkIcon className="text-architect-secondary_text_color h-5 w-5" />
                    )}{" "}
                    Exposition de vos réalisations sur ArchiMatch
                  </Typography>
                </div>

                <div className="flex items-center ">
                  <Typography
                    variant="paragraph"
                    className="text-architect-font_gris text-[16px] font-medium flex items-center gap-1"
                  >
                    {usersub.data.subscription.fournisseur == true ? (
                      <CheckIcon className=" text-architect-primary h-5 w-5" />
                    ) : (
                      <XMarkIcon className="text-architect-secondary_text_color h-5 w-5" />
                    )}{" "}
                    Accès privilégié aux fournisseurs partenaires{" "}
                  </Typography>
                </div>
                <div className="flex items-center ">
                  <Typography
                    variant="paragraph"
                    className="text-architect-font_gris text-[16px] font-medium flex items-center gap-1"
                  >
                    {usersub.data.subscription.archi_supp == true ? (
                      <CheckIcon className=" text-architect-primary h-5 w-5" />
                    ) : (
                      <XMarkIcon className="text-architect-secondary_text_color  h-5 w-5" />
                    )}{" "}
                    Accès au support ArchiMatch
                  </Typography>
                </div>
                <div className="flex items-center ">
                  <Typography
                    variant="paragraph"
                    className="text-architect-font_gris text-[16px] font-medium flex items-center gap-1"
                  >
                    {usersub.data.subscription.prop_selon_pref == true ? (
                      <CheckIcon className=" text-architect-primary h-5 w-5" />
                    ) : (
                      <XMarkIcon className="text-architect-secondary_text_color h-5 w-5" />
                    )}{" "}
                    Proposition des projets selon vos Préférences{" "}
                  </Typography>
                </div>
                <div className="flex items-center ">
                  <Typography
                    variant="paragraph"
                    className="text-architect-font_gris text-[16px] font-medium flex items-center gap-1"
                  >
                    {usersub.data.subscription.mev_profil == true ? (
                      <CheckIcon className=" text-architect-primary h-5 w-5" />
                    ) : (
                      <XMarkIcon className="text-architect-secondary_text_color h-5 w-5" />
                    )}{" "}
                    Mise en vedette de profil dans ArchiMatch
                  </Typography>
                </div>
                <div className="flex items-center ">
                  <Typography
                    variant="paragraph"
                    className="text-architect-font_gris text-[16px] font-medium flex items-center gap-1"
                  >
                    {usersub.data.subscription.devi_gen == true ? (
                      <CheckIcon className=" text-architect-primary h-5 w-5" />
                    ) : (
                      <XMarkIcon className="text-architect-secondary_text_color h-5 w-5" />
                    )}{" "}
                    Génération des devis{" "}
                  </Typography>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center basis-0 flex-grow ">
              <img
                className="w-[400px] cursor-pointer py-0.5 "
                src={GestionAbonn.src}
              />
            </div>
          </MainCard>
        )}
        <div className="flex flex-col lg:mx-auto mt-14  items-center">
          <Typography
            variant="h1"
            className="text-architect-font_gris text-[27px] lg:w-[620px] text-center lg:text-[25px] font-extrabold flex justify-center   "
          >
            Optimisez votre plan. Stimulez vos services !
          </Typography>
          <Typography
            variant="paragraph"
            className="text-architect-secondary_text_color  text-[15px] text-center lg:text-[20px] lg:w-[600px]   flex justify-center mt-2"
          >
            Rejoignez +6 000 architectes utilisant archimatch pour alimenter des
            projets modernes
          </Typography>
        </div>
        {/* suugggeesstioonnss */}
        <div className=" p-3 flex-col gap-4 justify-center lg:flex-row mt-6 flex items-center ">
          {isLoading && !plan ? (
            <Spinner />
          ) : (
            usersub &&
            plan.data
              .filter((planItem) => planItem.sub_name != "Gratuit")
              .map((plan, index) =>
                usersub.data.subscription.sub_name === "Gratuit" ? (
                  <MainCard
                    key={index}
                    className=" max-w-[300px] w-[100%] shadow-xl py-7 z-10 border-2"
                  >
                    <Typography
                      variant="h1"
                      className="text-architect-primary text-[13px] font-bold flex justify-start mb-2  "
                    >
                      {plan.sub_name}{" "}
                    </Typography>
                    <div className="flex flex-row  gap-1">
                      <Typography
                        variant="paragraph"
                        className="text-architect-font_gris text-[34px] font-extrabold flex justify-center  "
                      >
                        {plan.price}{" "}
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
                      <Image src={JetonRouge} className="w-[100px]" alt="" />

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
                          className="text-architect-font_gris text-[13px] font-medium flex items-center gap-1"
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
                          className="text-architect-font_gris text-[13px] font-medium flex items-center gap-1"
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
                          className="text-architect-font_gris text-[13px] font-medium flex items-center gap-1"
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
                          className="text-architect-font_gris text-[13px] font-medium flex items-center gap-1"
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
                          className="text-architect-font_gris text-[13px] font-medium flex items-center gap-1"
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
                          className="text-architect-font_gris text-[13px] font-medium flex items-center gap-1"
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
                          className="text-architect-font_gris text-[13px] font-medium flex items-center gap-1"
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
                          className="text-architect-font_gris text-[13px] font-medium flex items-center gap-1"
                        >
                          {plan.devi_gen == true ? (
                            <CheckIcon className=" text-architect-primary h-4 w-4" />
                          ) : (
                            <XMarkIcon className="text-architect-secondary_text_color h-4 w-4" />
                          )}{" "}
                          Génération des devis{" "}
                        </Typography>
                      </div>
                    </div>

                    <Button
                      onClick={() =>
                        router.push(`/architect/Paiement/${plan.id}`)
                      }
                      className="w-full mt-16 bg-[#0c1e5b]"
                    >
                      {" "}
                      S’abonner
                    </Button>
                  </MainCard>
                ) : plan.sub_name === "Premium Pro" ? (
                  <MainCard className="w-full flex flex-col items-center  bg-[#fafbff] justify-between mt-6 ">
                    <div className="w-full flex flex-col">
                      <div className="flex flex-row   justify-between">
                        <Typography
                          variant="paragraph"
                          className="text-architect-primary text-[16px] font-bold "
                        >
                          {plan.sub_name}{" "}
                        </Typography>
                        <div className="flex flex-row  gap-1">
                          <Typography
                            variant="paragraph"
                            className="text-architect-font_gris text-[30px] font-extrabold flex justify-center  "
                          >
                            {plan.price}{" "}
                          </Typography>
                          <div className=" flex-row flex items-center">
                            <Typography
                              variant="paragraph"
                              className="text-architect-font_gris font-extrabold text-[14px] mt-3   "
                            >
                              DT
                            </Typography>
                            <Typography
                              variant="paragraph"
                              className="text-architect-secondary_text_color text-[14px]   mt-3 "
                            >
                              /mois
                            </Typography>
                          </div>
                        </div>
                      </div>
                      <Typography
                        variant="paragraph"
                        className="text-[#344054] text-[30px] font-extrabold "
                      >
                        Accès illimité
                      </Typography>

                      <div className=" flex flex-col -w-[208px] gap-y-2">
                        <div className="flex items-center  mt-4">
                          <Typography
                            variant="paragraph"
                            className="text-architect-font_gris text-[16px] font-medium flex items-center gap-1"
                          >
                            {plan.prop_platform == true ? (
                              <CheckIcon className=" text-architect-primary h-5 w-5" />
                            ) : (
                              <XMarkIcon className=" text-architect-secondary_text_color h-5 w-5" />
                            )}
                            Projets clients proposés par la plateforme
                          </Typography>
                        </div>
                        <div className="flex items-center ">
                          <Typography
                            variant="paragraph"
                            className="text-architect-font_gris text-[16px] font-medium flex items-center gap-1"
                          >
                            {plan.prop_profil == true ? (
                              <CheckIcon className=" text-architect-primary h-5 w-5" />
                            ) : (
                              <XMarkIcon className="text-architect-secondary_text_color h-5 w-5" />
                            )}{" "}
                            Projets clients proposés sur votre profil{" "}
                          </Typography>
                        </div>
                        <div className="flex items-center ">
                          <Typography
                            variant="paragraph"
                            className="text-architect-font_gris text-[16px] font-medium flex items-center gap-1"
                          >
                            {plan.realization_expo == true ? (
                              <CheckIcon className=" text-architect-primary h-5 w-5" />
                            ) : (
                              <XMarkIcon className="text-architect-secondary_text_color h-5 w-5" />
                            )}{" "}
                            Exposition de vos réalisations sur ArchiMatch
                          </Typography>
                        </div>

                        <div className="flex items-center ">
                          <Typography
                            variant="paragraph"
                            className="text-architect-font_gris text-[16px] font-medium flex items-center gap-1"
                          >
                            {plan.fournisseur == true ? (
                              <CheckIcon className=" text-architect-primary h-5 w-5" />
                            ) : (
                              <XMarkIcon className="text-architect-secondary_text_color h-5 w-5" />
                            )}{" "}
                            Accès privilégié aux fournisseurs partenaires{" "}
                          </Typography>
                        </div>
                        <div className="flex items-center ">
                          <Typography
                            variant="paragraph"
                            className="text-architect-font_gris text-[16px] font-medium flex items-center gap-1"
                          >
                            {plan.archi_supp == true ? (
                              <CheckIcon className=" text-architect-primary h-5 w-5" />
                            ) : (
                              <XMarkIcon className="text-architect-secondary_text_color  h-5 w-5" />
                            )}{" "}
                            Accès au support ArchiMatch
                          </Typography>
                        </div>
                        <div className="flex items-center ">
                          <Typography
                            variant="paragraph"
                            className="text-architect-font_gris text-[16px] font-medium flex items-center gap-1"
                          >
                            {plan.prop_selon_pref == true ? (
                              <CheckIcon className=" text-architect-primary h-5 w-5" />
                            ) : (
                              <XMarkIcon className="text-architect-secondary_text_color h-5 w-5" />
                            )}{" "}
                            Proposition des projets selon vos Préférences{" "}
                          </Typography>
                        </div>
                        <div className="flex items-center ">
                          <Typography
                            variant="paragraph"
                            className="text-architect-font_gris text-[16px] font-medium flex items-center gap-1"
                          >
                            {plan.mev_profil == true ? (
                              <CheckIcon className=" text-architect-primary h-5 w-5" />
                            ) : (
                              <XMarkIcon className="text-architect-secondary_text_color h-5 w-5" />
                            )}{" "}
                            Mise en vedette de profil dans ArchiMatch
                          </Typography>
                        </div>
                        <div className="flex items-center ">
                          <Typography
                            variant="paragraph"
                            className="text-architect-font_gris text-[16px] font-medium flex items-center gap-1"
                          >
                            {plan.devi_gen == true ? (
                              <CheckIcon className=" text-architect-primary h-5 w-5" />
                            ) : (
                              <XMarkIcon className="text-architect-secondary_text_color h-5 w-5" />
                            )}{" "}
                            Génération des devis{" "}
                          </Typography>
                        </div>
                      </div>
                    </div>

                    <Button
                      type="submit"
                      size="md"
                      onClick={() =>
                        router.push(`/architect/Paiement/${plan.id}`)
                      }
                      className=" self-end flex items-center bg-[#344054] justify-center gap-2 cursor-pointer "
                    >
                      <BoltIcon className="h-7 w-7" />
                      Upgrade plan
                    </Button>
                  </MainCard>
                ) : null,
              )
          )}{" "}
        </div>

        <Typography
          variant="h1"
          className="text-architect-font_gris text-[27px] text-center lg:text-[25px] font-extrabold  self-center mt-7 "
        >
          Paiement facile et sécurisé
        </Typography>
        <div className="  flex-col gap-4 justify-center lg:flex-row mt-10 flex items-center ">
          <MainCard className="basis-0 flex-grow  px-5  border-2  flex flex-col space-y-2">
            <div className=" flex flex-col space-y-2 ">
              <div className="flex flex-row space-x-2 pt-[2px] ">
                <Image src={Visaa} className="border-2 rounded-md " alt="" />
                <Image src={Banque} className="border-2 rounded-md " alt="" />
                <Image src={Poste} className="border-2 rounded-md" alt="" />
                <div className="border-2 rounded-md p-1 flex items-center justify-center">
                  <Image src={Edinar} className="" alt="" />
                </div>
                <div className="border-2 rounded-md p-1 flex items-center justify-center">
                  <Image src={Konnectt} className="" alt="" />
                </div>
              </div>
              <Typography
                variant="h1"
                className="text-architect-font_gris text-[17px]  font-bold   "
              >
                Modes de paiement sécurisés{" "}
              </Typography>
              <Typography
                variant="h1"
                className="text-[14px]  text-[#636d7c] w-full  font-normal "
              >
                Paiement avec Visa, Mastercard, e-dinar, Application konnect ou
                virement bancaire
              </Typography>
            </div>
          </MainCard>
          <MainCard className="basis-0 flex-grow px-5 flex flex-col space-y-2  border-2">
            <Image src={Armure} className="" alt="" />

            <div className=" flex flex-col space-y-2 ">
              <Typography
                variant="h1"
                className="text-architect-font_gris text-[17px]  font-bold   "
              >
                Paiements sécurisés
              </Typography>
              <Typography
                variant="h1"
                className="text-[14px]  text-[#636d7c] w-full  font-normal  "
              >
                Réalisés dans un environnement compatible avec les PCI de niveau
                1
              </Typography>
            </div>
          </MainCard>
        </div>
      </div>
    </>
  );
};

export default architectGestionAbonnementPage;
