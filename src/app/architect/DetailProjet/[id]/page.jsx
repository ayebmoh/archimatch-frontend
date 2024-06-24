"use client";
import AvatarArchi from "@/assets/AvatarArchi.svg";
import Bain from "@/assets/Bain.svg";
import Bed from "@/assets/Bed.svg";
import Canape from "@/assets/Canape.svg";
import Constructeurr from "@/assets/Constructeurr.svg";
import Eatingroom from "@/assets/Eatingroom.svg";
import Exclamation from "@/assets/Exclamation.svg";
import Garage from "@/assets/Garage.svg";
import Garden from "@/assets/Garden.svg";
import Gold from "@/assets/Gold.svg";
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
import { MainCard, PageLayout, Popup } from "@/components";
import {
  useCheckSelection,
  useGetAnnouncementDetails,
  useSelectAnnouncement,
} from "@/services/queries";
import {
  EnvelopeIcon,
  MapIcon,
  MapPinIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import { Avatar, Button, Spinner, Typography } from "@material-tailwind/react";
import Cookies from "js-cookie";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
const architectDetailProjetPage = () => {
  const [showPopup, setShowPopup] = useState(false);
  const router = useRouter();
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
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam,
                perspiciatis unde omnis iste natus erro. At vero eos et
                accusamus et iusto odio dignissimos laudantium, totam rem
                aperiam.
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
          <div className="flex flex-col     ">
            {isloading ? (
              <Spinner />
            ) : (
              <MainCard className="!px-0 hidden xl:flex relative self-start border-2 border-dotted border-gray-400">
                {/* <div className="w-full h-full ">
              {" "}
              <Typography variant="h6" className="font-bold  text-[20px] mb-2 ">
                Olivia Rhye
              </Typography>
            </div> */}

                <div className="flex flex-col w-full py-5 relative">
                  {selected && selected.data ? null : (
                    <div className="absolute inset-0 z-10 flex justify-center items-center ">
                      <div className="flex flex-col px-4 gap-2 justify-center items-center">
                        <img
                          src={Exclamation.src}
                          alt="Premium icon"
                          className="mt-2 h-8 w-8 self-center "
                        ></img>
                        <Typography
                          variant="small"
                          className="self-center text-center  justify-center font-thin text-architect-text_hover "
                        >
                          Ajoutez le projet à votre sélection, les détails du
                          client s'affichent.
                        </Typography>
                        <Typography
                          variant="small"
                          className="self-center text-center  justify-center font-thin text-architect-text_hover "
                        >
                          Votre compte sera débité de 5 Jetons
                        </Typography>
                        <Button
                          className="   flex items-center justify-center py-3 gap-2 w-[90%] mt-2"
                          // type="submit"
                          size="sm"
                          onClick={() => setShowPopup(true)}
                          //disabled={isLoading}
                        >
                          Sélectionner le projet{" "}
                        </Button>
                        {showPopup && (
                          <Popup
                            open={showPopup}
                            handleOpen={() => setShowPopup(!open)}
                            size="sm"
                            className=""
                            bodyClassName="flex flex-col items-center"
                            headerClassName="flex flex-row items-start"
                            header={
                              <div className=" flex items-start self-start">
                                <Typography
                                  variant="paragraph"
                                  className="text-architect-font_gris text-[18px] font-semibold flex items-center gap-1 cursor-pointer"
                                  onClick={() => setShowPopup(false)}
                                >
                                  <ChevronLeftIcon className="h-5 w-5" />
                                  Retour
                                </Typography>
                              </div>
                            }
                          >
                            <div className="flex flex-col ">
                              <img
                                className=" cursor-pointer justify-center flex self-center w-[150px] "
                                src={Gold.src}
                              />
                              <div className="flex flex-col items-center">
                                <Typography
                                  variant="paragraph"
                                  className="text-[30px] font-bold text-[#344155] text-center justify-center flex self-center mt-6 "
                                >
                                  Confirmation d'Ajout de Projet
                                </Typography>
                                <Typography
                                  variant="paragraph"
                                  className="text-[16px] text-center text-architect-font_grisjustify-center flex self-center  w-[400px] mt-2 "
                                >
                                  En affichant les détails du contact client et
                                  en ajoutant le projet à votre sélection, votre
                                  compte
                                </Typography>
                                <div className="flex flex-row gap-2 mt-6 items-center">
                                  <Typography
                                    variant="paragraph"
                                    className="text-[14px]  text-center justify-center flex self-center  "
                                  >
                                    sera débité de
                                  </Typography>
                                  <div className="flex  flex-row  gap-2 items-center  ">
                                    <img
                                      className=" cursor-pointer  w-[20px]  flex items-center  "
                                      src={Gold.src}
                                    />
                                    <Typography className=" font-semibold text-[15px] self-center text-architect-main_blue   ">
                                      5 jetons
                                    </Typography>
                                  </div>
                                </div>
                              </div>
                              <div className="flex flex-row justify-end self-end gap-3  h-full ">
                                <Button
                                  color="gray"
                                  variant="outlined"
                                  className=" mt-16 font-bold shadow-none border-none hover:bg-gray-400  self-end md:text-[14px] text-[12px] h-[48px]"
                                  type="submit"
                                  size="md"
                                  onClick={() => setShowPopup(false)}
                                >
                                  Ignorer
                                </Button>
                                <Button
                                  type="submit"
                                  size="md"
                                  className=" mt-16 self-end font-bold  md:text-[14px] text-[12px] "
                                  onClick={() => handleSelectannouncement()}
                                  //disabled={isLoading}
                                >
                                  Confirmer
                                </Button>
                              </div>
                            </div>
                          </Popup>
                        )}{" "}
                        <Button
                          color="gray"
                          variant="outlined"
                          className="   flex items-center justify-center py-3 w-[90%] gap-2  mt-2"
                          type="submit"
                          size="sm"

                          //disabled={isLoading}
                        >
                          rejeter le projet{" "}
                        </Button>
                      </div>
                    </div>
                  )}
                  <div
                    className={`relative ${
                      selected && selected.data
                        ? ""
                        : "bg-cover bg-center w-full h-full blur-md pointer-events-none"
                    }`}
                  >
                    {" "}
                    <div className="p-4 px-9">
                      <div className=" gap-6 self-center md:max-w-[400px]  ">
                        <div className="flex justify-start  gap-4">
                          <Avatar
                            variant="rounded"
                            className="h-[50px] w-[50px] "
                            src={AvatarArchi.src}
                            alt="avatar"
                          />
                          <div className="self-end">
                            <Typography
                              variant="h6"
                              className="font-bold  text-[20px] mb-2 "
                            >
                              {announcement.data.client.user.first_name}{" "}
                              {announcement.data.client.user.last_name}{" "}
                            </Typography>
                          </div>
                        </div>
                      </div>
                      <div className="border-dashed border-t-2   border-y-5  mt-4  ">
                        <div className="flex flex-col justify-start mt-4 ">
                          <div className=" items-start  rounded-md flex  justify-between  flex-row  ">
                            <div className="flex flex-row items-center p-[8px] gap-3 w-[85%]">
                              <EnvelopeIcon className="h-6 w-6 text-architect-secondary_text_color " />
                              <Typography className=" text-[15px]">
                                {" "}
                                {announcement.data.client.user.email}{" "}
                              </Typography>
                            </div>
                            <Button
                              type="submit"
                              size="sm"
                              className="   flex items-center justify-center gap-2 "
                              onClick={() =>
                                router.push(
                                  `/architect/ManagerSelection/${announcement?.data?.id}`,
                                )
                              }
                              //disabled={isLoading}
                            >
                              contacter
                            </Button>
                          </div>
                        </div>
                        <div className="flex flex-row items-center p-[8px] gap-3 w-[85%]  ">
                          <PhoneIcon className="h-6 w-6 text-architect-secondary_text_color " />
                          <Typography className=" text-[15px]">
                            {" "}
                            {announcement.data.client.user.phone_number}{" "}
                          </Typography>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </MainCard>
            )}
            <MainCard className="!px-0 hidden xl:flex self-start mt-6">
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
                  <Button
                    className="   flex items-center justify-center gap-2 w-full mt-4"
                    type="submit"
                    size="sm"

                    //disabled={isLoading}
                  >
                    Abandonner le projet
                  </Button>
                  <Button
                    color="gray"
                    variant="outlined"
                    className="   flex items-center justify-center gap-2 w-full mt-2"
                    type="submit"
                    size="sm"

                    //disabled={isLoading}
                  >
                    Signaler le projet
                  </Button>
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
