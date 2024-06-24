"use client";
import Bain from "@/assets/Bain.svg";
import Bed from "@/assets/Bed.svg";
import Canape from "@/assets/Canape.svg";
import Constructeurr from "@/assets/Constructeurr.svg";
import Eatingroom from "@/assets/Eatingroom.svg";
import Garage from "@/assets/Garage.svg";
import Garden from "@/assets/Garden.svg";
import Hall from "@/assets/Hall.svg";
import Kidsroom from "@/assets/Kidsroom.svg";
import Moneyy from "@/assets/Moneyy.svg";
import Mur from "@/assets/Mur.svg";
import Office from "@/assets/Office.svg";
import PhotoFive from "@/assets/PhotoFive.svg";
import PhotoFour from "@/assets/PhotoFour.svg";
import PhotoOne from "@/assets/PhotoOne.svg";
import PhotoSix from "@/assets/PhotoSix.svg";
import PhotoThree from "@/assets/PhotoThree.svg";
import PhotoTwo from "@/assets/PhotoTwo.svg";
import Restaurant from "@/assets/Restaurant.svg";
import Suite from "@/assets/Suite.svg";
import Surface from "@/assets/Surface.svg";
import Terrase from "@/assets/Terrase.svg";
import Chantier from "@/assets/chantier.svg";
import { MainCard, PageLayout } from "@/components";
import {
  useCheckSelection,
  useGetAnnouncementDetails,
  useSelectAnnouncement,
} from "@/services/queries";
import { MapIcon, MapPinIcon } from "@heroicons/react/24/outline";
import { Spinner, Typography } from "@material-tailwind/react";
import Cookies from "js-cookie";
import { useParams } from "next/navigation";
import { useState } from "react";
const architectDetailProjetPage = () => {
  const [showPopup, setShowPopup] = useState(false);

  const { id } = useParams();
  const cookiesdata = Cookies.get("id");

  const { data: announcement, isLoading } = useGetAnnouncementDetails(id);
  const {
    data: selected,
    isloading,
    iserror,
  } = useCheckSelection(cookiesdata, id);
  // console.log(announcement);
  // console.log(id);

  const SelectAnouncementMutaion = useSelectAnnouncement("", {});
  const handleSelectannouncement = async () => {
    try {
      const response = await SelectAnouncementMutaion.mutateAsync({
        arch_id: cookiesdata,
        announcement_id: id,
      }); // Send the FormData to the API
      setShowPopup(false);
      console.log("Announcement selected successfully", response);
    } catch (error) {
      console.error("Error selecting announcement", error);
    }
  };

  if (isLoading) {
    return <Spinner />;
  } else {
    return (
      <PageLayout className="p-10">
        <div className="flex flex-row max-w-screen-xl  w-full m-auto gap-3 mt-4 ">
          <MainCard className="w-full px-5">
            <div className="flex flex-col">
              <Typography className="self-start font-semibold text-[18px] text-architect-secondary_text_color ">
                Publié le{" "}
                {new Date(announcement.data.created_at).toLocaleDateString(
                  "fr-FR",
                  {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  },
                )}{" "}
              </Typography>
              <Typography className="self-start font-semibold text-[24px] text-architect-dark_blue mt-6">
                {announcement.data.work_type}{" "}
              </Typography>
              <div className="flex  flex-row   items-center gap-3 ">
                <img
                  className=" cursor-pointer  w-[25px]  flex items-center text-client-primary fill-current- "
                  src={Constructeurr.src}
                />
                <Typography className=" text-[17px] self-center text-client-primary  ">
                  {announcement.data.architect_type.display}{" "}
                </Typography>
              </div>
              <Typography className="self-start  text-[16px]  mt-4">
                {announcement.data.details}
              </Typography>
              <div className="flex items-center  mt-3">
                <Typography
                  variant="h6"
                  className=" flex items-center text-[18px] mb-5 font-normal  gap-2"
                >
                  <MapPinIcon className="h-6 w-6" />
                  {announcement.data.town}
                </Typography>
              </div>
              <div className="border-dashed border-t-2   border-y-5  mt-2  ">
                <Typography className="font-semibold text-[20px]  text-architect-dark_blue mt-4 ">
                  Les services
                </Typography>
                <Typography className=" text-[15px] self-center text-architect-secondary_text_color  ">
                  Services requis pour le projet :
                </Typography>
                <div className="flex flex-col space-y-3 mt-4">
                  {announcement.data.need !=
                  "Plans permis et suivi chantier" ? null : (
                    <div className="flex  flex-row   items-center gap-3  ">
                      <img
                        className=" cursor-pointer  w-[45px]  flex items-center text-client-primary fill-current- "
                        src={Chantier.src}
                      />
                      <Typography className=" text-[17px] self-center ">
                        {announcement.data.need}{" "}
                      </Typography>
                    </div>
                  )}

                  {/* <div className="flex  flex-row   items-center gap-3  ">
                    <img
                      className=" cursor-pointer  w-[45px]  flex items-center text-client-primary fill-current- "
                      src={Peinture.src}
                    />
                    <Typography className=" text-[17px] self-center ">
                      Choisir les couleurs et les matériaux
                    </Typography>
                  </div>
                  <div className="flex  flex-row   items-center gap-3  ">
                    <img
                      className=" cursor-pointer  w-[45px]  flex items-center text-client-primary fill-current- "
                      src={MaisonArch.src}
                    />
                    <Typography className=" text-[17px] self-center ">
                      Créer un design moderne et fonctionnel
                    </Typography>
                  </div> */}
                </div>
                <Typography className="font-semibold text-[20px]  text-architect-dark_blue mt-7 ">
                  Détails d’exécution
                </Typography>
                <Typography className=" text-[15px] self-center text-architect-secondary_text_color  ">
                  les informations essentielles concernant la réalisation du
                  projet :
                </Typography>

                <div className="flex flex-row justify-between w-full mt-6 space-y-1 md:w-[45%]    ">
                  <div className="flex justify-between flex-col ">
                    <Typography className=" text-[16px] ">
                      Surface totale du terrain
                    </Typography>
                    <div className="flex items-center ">
                      <Typography
                        variant="h6"
                        className=" flex items-center text-[18px] font-normal  gap-2"
                      >
                        <MapIcon className="h-6 w-6" />
                        {announcement.data.surface_terrain}{" "}
                      </Typography>
                    </div>
                  </div>
                  <div className="flex justify-between flex-col ">
                    <Typography className="   text-[16px] ">
                      Nombre d’étage
                    </Typography>

                    <div className="flex items-center  gap-3">
                      <img
                        className=" cursor-pointer  w-[25px]  flex items-center text-client-primary fill-current- "
                        src={Mur.src}
                      />
                      <Typography
                        variant="h6"
                        className=" flex items-center text-[18px] font-normal "
                      >
                        2 étage
                      </Typography>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row justify-between w-full mt-4 space-y-1 md:w-[53%]    ">
                  <div className="flex justify-between flex-col ">
                    <Typography className=" text-[16px] ">
                      Surface des travaux
                    </Typography>
                    <div className="flex items-center gap-2">
                      <img
                        className=" cursor-pointer  w-[30px]  flex items-center text-client-primary fill-current- "
                        src={Surface.src}
                      />
                      <Typography
                        variant="h6"
                        className=" flex items-center text-[18px] font-normal  "
                      >
                        {announcement.data.surface_travaux}
                      </Typography>
                    </div>
                  </div>

                  <div className="flex justify-between flex-col ">
                    <Typography className="   text-[16px] ">
                      budget maximum
                    </Typography>

                    <div className="flex items-center  gap-3">
                      <img
                        className=" cursor-pointer  w-[25px]  flex items-center text-client-primary fill-current "
                        src={Moneyy.src}
                      />
                      <Typography
                        variant="h6"
                        className=" flex items-center text-[18px] font-normal "
                      >
                        {announcement.data.budget}{" "}
                      </Typography>
                    </div>
                  </div>
                </div>
                <Typography
                  variant="h6"
                  className="  text-[20px] font-semibold mt-6 "
                >
                  Photos
                </Typography>
                <Typography className=" text-[15px] self-center text-architect-secondary_text_color  ">
                  des photos pour le projet :
                </Typography>
                <div className="flex lg:flex-row flex-col lg:space-y-0 space-y-5 lg:space-x-2 lg:mt-2 mt-8 items-center justify-center">
                  <figure className="relative h-[250px] w-full ">
                    <img
                      className="h-full w-full rounded-xl object-cover  object-center"
                      src={PhotoOne.src}
                      alt=""
                    />
                  </figure>
                  <figure className="relative h-[250px] w-full ">
                    <img
                      className="h-full w-full rounded-xl object-cover object-center"
                      src={PhotoTwo.src}
                      alt=""
                    />
                  </figure>
                  <figure className="relative h-[250px] w-full ">
                    <img
                      className="h-full w-full rounded-xl object-cover object-center"
                      src={PhotoThree.src}
                      alt=""
                    />
                  </figure>
                </div>
                <div className="flex lg:flex-row flex-col lg:space-y-0 space-y-5 lg:space-x-2 lg:mt-2 mt-8 items-center justify-center">
                  <figure className="relative h-[250px] w-full ">
                    <img
                      className="h-full w-full rounded-xl object-cover object-center"
                      src={PhotoFour.src}
                      alt=""
                    />
                  </figure>
                  <figure className="relative h-[250px] w-full ">
                    <img
                      className="h-full w-full rounded-xl object-cover object-center"
                      src={PhotoFive.src}
                      alt=""
                    />
                  </figure>
                  <figure className="relative h-[250px] w-full ">
                    <img
                      className="h-full w-full rounded-xl object-cover object-center"
                      src={PhotoSix.src}
                      alt=""
                    />
                  </figure>
                </div>
              </div>
            </div>
          </MainCard>
          <div className="flex flex-col">
            <MainCard className="!px-0 hidden xl:flex self-start ">
              <div className="flex flex-col w-96 ">
                <div className="p-4 px-9">
                  <Typography className="self-start font-semibold text-[18px] text-architect-dark_blue ">
                    Catégorie
                  </Typography>
                  <Typography className=" text-[16px] self-center text-architect-secondary_text_color mt-1 ">
                    {announcement.data.categories}{" "}
                  </Typography>
                  <div className="border-dashed border-t-2   border-y-5  mt-4 w-[80%] ">
                    <Typography className="self-start font-semibold text-[18px] text-architect-dark_blue mt-4">
                      Type de bien
                    </Typography>
                    <Typography className=" text-[16px] self-center text-architect-secondary_text_color mt-1 ">
                      {announcement.data.house_type}
                    </Typography>
                  </div>
                  <div className="border-dashed border-t-2   border-y-5  mt-4 w-[80%] ">
                    <Typography className="self-start font-semibold text-[18px] text-architect-dark_blue mt-4">
                      Style
                    </Typography>
                    <Typography className=" text-[16px] self-center text-architect-secondary_text_color mt-1 ">
                      {announcement.data.work_style}
                    </Typography>
                  </div>
                  <div className="border-dashed border-t-2   border-y-5  mt-4 w-[80%] ">
                    <Typography className="self-start font-semibold text-[18px] text-architect-dark_blue mt-4">
                      Options de Projet
                    </Typography>
                    <div className="flex flex-col mt-2  ">
                      <div className="flex items-center p-0">
                        <Typography
                          variant="h6"
                          className="font-normal gap-2 text-[16px] self-center text-architect-secondary_text_color flex items-center"
                        >
                          <span className="text-architect-secondary_text_color text-2xl">
                            &#x2022;
                          </span>
                          {announcement.data.extra}
                        </Typography>
                      </div>
                      {/* <div className="flex items-center ">
                        <Typography
                          variant="h6"
                          className="font-normal  gap-2 text-[16px] self-center text-architect-secondary_text_color mt-1 flex items-center"
                        >
                          <span className="text-architect-secondary_text_color text-2xl">
                            &#x2022;
                          </span>
                          Escaliers
                        </Typography>
                      </div> */}
                      {/* <div className="flex items-center ">
                        <Typography
                          variant="h6"
                          className="font-normal  gap-2 text-[16px] self-center text-architect-secondary_text_color mt-1 flex items-center"
                        >
                          <span className="text-architect-secondary_text_color text-2xl">
                            &#x2022;
                          </span>
                          Cave à Cigares
                        </Typography>
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </MainCard>
            <MainCard className="!px-0 hidden xl:flex self-start mt-6">
              <div className="flex flex-col w-96 ">
                <div className="p-4 px-9">
                  <Typography className="self-start font-semibold text-[18px] text-architect-dark_blue ">
                    les pièces à rénover
                  </Typography>
                  <div className="border-0 shadow-md rounded-md p-2  self-center bg-[#fafbff] mt-5 w-[300px]">
                    <div className="flex flex-col space-y-6">
                      {announcement.data.need_pieces.nb_salle_bain ===
                      "0.00" ? null : (
                        <div className="flex flex-row justify-between ">
                          <div className="flex  flex-row   items-center gap-3  ">
                            <img
                              className=" cursor-pointer  w-[25px]  flex items-center text-client-primary fill-current- "
                              src={Bain.src}
                            />
                            <Typography className=" text-[16px] self-center">
                              Salle de bain
                            </Typography>
                          </div>
                          <Typography className=" text-[16px] ">
                            x
                            {parseInt(
                              announcement.data.need_pieces.nb_salle_bain,
                            )}
                          </Typography>
                        </div>
                      )}
                      {announcement.data.need_pieces.nb_salon ===
                      "0.00" ? null : (
                        <div className="flex flex-row justify-between ">
                          <div className="flex  flex-row   items-center gap-3  ">
                            <img
                              className=" cursor-pointer  w-[25px]  flex items-center text-client-primary fill-current- "
                              src={Canape.src}
                            />
                            <Typography className=" text-[16px] self-center">
                              Salon
                            </Typography>
                          </div>
                          <Typography className=" text-[16px] ">
                            x{parseInt(announcement.data.need_pieces.nb_salon)}
                          </Typography>
                        </div>
                      )}
                      {announcement.data.need_pieces.nb_suite_parental ===
                      "0.00" ? null : (
                        <div className="flex flex-row justify-between ">
                          <div className="flex  flex-row   items-center gap-3  ">
                            <img
                              className=" cursor-pointer  w-[25px]  flex items-center text-client-primary fill-current- "
                              src={Suite.src}
                            />
                            <Typography className=" text-[16px] self-center">
                              suite parentale
                            </Typography>
                          </div>
                          <Typography className=" text-[16px] ">
                            x{" "}
                            {parseInt(
                              announcement.data.need_pieces.nb_suite_parental,
                            )}
                          </Typography>
                        </div>
                      )}
                      {announcement.data.need_pieces.nb_chambre ===
                      "0.00" ? null : (
                        <div className="flex flex-row justify-between ">
                          <div className="flex  flex-row   items-center gap-3  ">
                            <img
                              className=" cursor-pointer  w-[25px]  flex items-center text-client-primary fill-current- "
                              src={Bed.src}
                            />
                            <Typography className=" text-[16px] self-center">
                              Chambre
                            </Typography>
                          </div>
                          <Typography className=" text-[16px] ">
                            x{" "}
                            {parseInt(announcement.data.need_pieces.nb_chambre)}
                          </Typography>
                        </div>
                      )}
                      {announcement.data.need_pieces.nb_cuisine ===
                      "0.00" ? null : (
                        <div className="flex flex-row justify-between ">
                          <div className="flex  flex-row   items-center gap-3  ">
                            <img
                              className=" cursor-pointer  w-[25px]  flex items-center text-client-primary fill-current- "
                              src={Restaurant.src}
                            />
                            <Typography className=" text-[16px] self-center">
                              Cuisine
                            </Typography>
                          </div>
                          <Typography className=" text-[16px] ">
                            {" "}
                            x{" "}
                            {parseInt(announcement.data.need_pieces.nb_cuisine)}
                          </Typography>
                        </div>
                      )}
                      {announcement.data.need_pieces.nb_Terasse ===
                      "0.00" ? null : (
                        <div className="flex flex-row justify-between ">
                          <div className="flex  flex-row   items-center gap-3  ">
                            <img
                              className=" cursor-pointer  w-[25px]  flex items-center text-client-primary fill-current- "
                              src={Terrase.src}
                            />
                            <Typography className=" text-[16px] self-center">
                              Terrase
                            </Typography>
                          </div>
                          <Typography className=" text-[16px] ">
                            {" "}
                            x{" "}
                            {parseInt(announcement.data.need_pieces.nb_Terasse)}
                          </Typography>
                        </div>
                      )}
                      {announcement.data.need_pieces.nb_bureau ===
                      "0.00" ? null : (
                        <div className="flex flex-row justify-between ">
                          <div className="flex  flex-row   items-center gap-3  ">
                            <img
                              className=" cursor-pointer  w-[25px]  flex items-center text-client-primary fill-current- "
                              src={Office.src}
                            />
                            <Typography className=" text-[16px] self-center">
                              Bureau
                            </Typography>
                          </div>
                          <Typography className=" text-[16px] ">
                            {" "}
                            x{" "}
                            {parseInt(announcement.data.need_pieces.nb_bureau)}
                          </Typography>
                        </div>
                      )}
                      {announcement.data.need_pieces.nb_chambre_enfant ===
                      "0.00" ? null : (
                        <div className="flex flex-row justify-between ">
                          <div className="flex  flex-row   items-center gap-3  ">
                            <img
                              className=" cursor-pointer  w-[25px]  flex items-center text-client-primary fill-current- "
                              src={Kidsroom.src}
                            />
                            <Typography className=" text-[16px] self-center">
                              Chambre Enfant
                            </Typography>
                          </div>
                          <Typography className=" text-[16px] ">
                            {" "}
                            x{" "}
                            {parseInt(
                              announcement.data.need_pieces.nb_chambre_enfant,
                            )}
                          </Typography>
                        </div>
                      )}
                      {announcement.data.need_pieces.nb_garage ===
                      "0.00" ? null : (
                        <div className="flex flex-row justify-between ">
                          <div className="flex  flex-row   items-center gap-3  ">
                            <img
                              className=" cursor-pointer  w-[25px]  flex items-center text-client-primary fill-current- "
                              src={Garage.src}
                            />
                            <Typography className=" text-[16px] self-center">
                              Garage{" "}
                            </Typography>
                          </div>
                          <Typography className=" text-[16px] ">
                            {" "}
                            x{" "}
                            {parseInt(announcement.data.need_pieces.nb_garage)}
                          </Typography>
                        </div>
                      )}
                      {announcement.data.need_pieces.nb_haul ===
                      "0.00" ? null : (
                        <div className="flex flex-row justify-between ">
                          <div className="flex  flex-row   items-center gap-3  ">
                            <img
                              className=" cursor-pointer  w-[25px]  flex items-center text-client-primary fill-current- "
                              src={Hall.src}
                            />
                            <Typography className=" text-[16px] self-center">
                              Haul
                            </Typography>
                          </div>
                          <Typography className=" text-[16px] ">
                            {" "}
                            x {parseInt(announcement.data.need_pieces.nb_haul)}
                          </Typography>
                        </div>
                      )}
                      {announcement.data.need_pieces.nb_jardin ===
                      "0.00" ? null : (
                        <div className="flex flex-row justify-between ">
                          <div className="flex  flex-row   items-center gap-3  ">
                            <img
                              className=" cursor-pointer  w-[25px]  flex items-center text-client-primary fill-current- "
                              src={Garden.src}
                            />
                            <Typography className=" text-[16px] self-center">
                              Jardin
                            </Typography>
                          </div>
                          <Typography className=" text-[16px] ">
                            {" "}
                            x{" "}
                            {parseInt(announcement.data.need_pieces.nb_jardin)}
                          </Typography>
                        </div>
                      )}
                      {announcement.data.need_pieces.nb_salle_a_manger ===
                      "0.00" ? null : (
                        <div className="flex flex-row justify-between ">
                          <div className="flex  flex-row   items-center gap-3  ">
                            <img
                              className=" cursor-pointer  w-[25px]  flex items-center text-client-primary fill-current- "
                              src={Eatingroom.src}
                            />
                            <Typography className=" text-[16px] self-center">
                              Salle a manger
                            </Typography>
                          </div>
                          <Typography className=" text-[16px] ">
                            {" "}
                            x{" "}
                            {parseInt(
                              announcement.data.need_pieces.nb_salle_a_manger,
                            )}
                          </Typography>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </MainCard>
          </div>
        </div>
      </PageLayout>
    );
  }
};

export default architectDetailProjetPage;
