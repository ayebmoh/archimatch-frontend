"use client";
import { Popup } from "@/components";
import MainCard from "@/components/MainCard";
import {
  Avatar,
  Button,
  Chip,
  Typography,
} from "@/components/RemoteComponents";
import {
  BanknotesIcon,
  BuildingOfficeIcon,
  MapIcon,
} from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa6";
import { IoIosArrowBack } from "react-icons/io";
import { TbMessage } from "react-icons/tb";

import {
  useDeleteAnnoucement,
  useFetchData,
  useGetAnnouncementDetails,
} from "@/services/queries";
import { Spinner } from "@material-tailwind/react";
import { useParams, useRouter } from "next/navigation";
const page = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // 1-second timeout

    return () => clearTimeout(timer); // Cleanup the timeout on component unmount
  }, []);
  const { id } = useParams();
  const { data: announcement, isLoading } = useGetAnnouncementDetails(id);

  const { data: selection, selLoading } = useFetchData(
    `/archimatch_app/Selection/get_selections_by_announcement/${id}/`,
    "",
  );
  const router = useRouter();
  const backend = "http://localhost:8000";

  const handlItemClick = (route) => {
    router.push(route);
  };
  const handleItemClick = (route) => {
    router.push(route);
  };
  const handleItemclick = (route) => {
    router.push(route);
  };
  const handleClickBack = () => {
    router.push("/client/projects");
  };

  const [open, setOpen] = useState(false);

  const handleMainCardClick = () => {
    // Si la popup est ouverte, la fermer
    if (open) {
      setOpen(false);
    }
  };

  const parseDate = (timestampStr) => {
    // Parse the timestamp string to a Date object
    const dateObj = new Date(timestampStr);

    // Extract the month (0-based index, so we add 1), month name, and year
    const monthNumber = (dateObj.getUTCMonth() + 1).toString().padStart(2, "0"); // Zero-padded month number
    const monthName = new Intl.DateTimeFormat("en-US", {
      month: "long",
    }).format(dateObj); // Full month name
    const year = dateObj.getUTCFullYear(); // Year

    // Format the date as "mm month year"
    const formattedDate = `${monthNumber} ${monthName} ${year}`;
    return formattedDate;
  };
  const CreateAnnoucementMutation = useDeleteAnnoucement("", {}, router);

  const handleDelete = (id) => {
    CreateAnnoucementMutation.mutate({ id: id });
  };
  useEffect(() => {
    console.log(selection);
  }, selection);
  if (isLoading || selLoading) {
    return <Spinner />;
  } else
    return (
      <div className=" w-full flex flex-col   bg-[#FAFBFF]  ">
        <div className="w-full mt-5 lg:w-[800px] mx-auto items-center">
          <div className="flex flex-col items-start w-full ">
            <div
              className="flex flex-row items-center absolute  gap-2 mt-4 cursor-pointer"
              onClick={handleClickBack}
            >
              <div className=" ">
                <IoIosArrowBack className="size-5 text-[#344054]" />
              </div>
              <Typography className="text-[#344054] text-[14px]  font-semibold">
                Retour
              </Typography>
            </div>

            <div className="w-full mt-5 ">
              <MainCard
                className="relative mt-9  self-center p-6"
                onClick={handleMainCardClick}
              >
                <div className="flex flex-col">
                  <div className="flex  items-center justify-between ">
                    <Typography className="text-architect-secondary_text_color text-[12px]">
                      {" "}
                      {parseDate(announcement.data.created_at)}
                    </Typography>
                    <div className="flex  items-center gap-2 self-end">
                      <Chip
                        size="lg"
                        value="pending"
                        color="green"
                        className="self-center text-[#B76E00] font-extrabold bg-[#FFAB00] bg-opacity-15 border-0 ml-5"
                      />
                    </div>
                  </div>
                  <div className="mt-1">
                    <Typography className="text-architect-font_gris text-[16px] font-bold">
                      {" "}
                      {announcement.data.work_type}
                    </Typography>
                    <Typography className="text-client-primary text-[14px]">
                      {" "}
                      {announcement.data.architect_type.display}
                    </Typography>
                  </div>

                  <div className="flex flex-row basis-0 flex-grow gap-4 mt-3 ">
                    <div className="flex flex-row items-center  gap-1">
                      <BuildingOfficeIcon className="h-6 w-6 text-architect-secondary_text_color cursor-pointer " />
                      <Typography className="text-architect-secondary_text_color text-[12px] ">
                        {" "}
                        {announcement.data.house_type}
                      </Typography>
                    </div>
                    <div className="flex flex-row items-center p-[8px] gap-1 ">
                      <MapIcon className="h-6 w-6 text-architect-secondary_text_color  " />
                      <Typography className="text-architect-secondary_text_color text-[12px]">
                        {" "}
                        {announcement.data.surface_terrain}
                      </Typography>
                    </div>

                    <div className="flex flex-row items-center p-[8px] gap-1  ">
                      <BanknotesIcon className="h-6 w-6 text-architect-secondary_text_color " />
                      <Typography className="text-architect-secondary_text_color text-[12px]">
                        {" "}
                        {announcement.data.budget}
                      </Typography>
                    </div>
                  </div>

                  <div className="flex flex-row gap-4 items-center  mt-4 mb-2">
                    <div className="flex items-center -space-x-4 ">
                      <Avatar
                        variant="circular"
                        size="sm"
                        alt="user 1"
                        className="border-2 border-white hover:z-10 focus:z-10 flex  lg:justify-center"
                        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                      />
                      <Avatar
                        variant="circular"
                        alt="user 2"
                        size="sm"
                        className="border-2 border-white hover:z-10 focus:z-10"
                        src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1061&q=80"
                      />
                      <Avatar
                        variant="circular"
                        alt="user 3"
                        size="sm"
                        className="border-2 border-white hover:z-10 focus:z-10"
                        src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1288&q=80"
                      />
                    </div>

                    <Typography className="text-[#16B364]  text-[13px]">
                      {" "}
                      {
                        selection?.data.Selections?.interested_architects
                          ?.length
                      }{" "}
                      Architectes intéressés par le projet
                    </Typography>
                  </div>
                  <div className="flex flex-row gap-2 w-full md:justify-end  justify-center">
                    <Button
                      onClick={() => setOpen(true)}
                      className="self-end bg-white text-client-primary text-[12px] border-solid border border-client-primary "
                      size="sm"
                    >
                      Annuler le projet
                    </Button>
                    <Button
                      onClick={() =>
                        handleItemClick(
                          `/client/DetailProjet/${announcement.data.id}`,
                        )
                      }
                      size="sm"
                      className=" self-end text-[12px] "
                    >
                      Détails du projet
                    </Button>
                  </div>
                </div>
                <Popup
                  open={open}
                  handler={() => setOpen(!open)}
                  size="sm"
                  bodyClassName="flex flex-col items-center "
                >
                  <div
                    className=" flex flex-col gap-3 px-3  "
                    onClick={(e) => e.stopPropagation()}
                  >
                    <div className=" flex flex-col items-start  ">
                      <div className="flex flex-row items-center absolute top-2 gap-2">
                        <div
                          onClick={() => setOpen(false)}
                          className="cursor-pointer "
                        >
                          <IoIosArrowBack className="size-4 text-[#344054]" />
                        </div>
                        <Typography className="text-[#344054] text-[12px] ">
                          Retour
                        </Typography>
                      </div>
                      <div className="mt-5">
                        <h1 className="text-[25px] text-[#344054] font-bold  ">
                          Annulation projet
                        </h1>
                        <Typography className="text-architect-secondary_text_color text-[16px] mt-4  ">
                          Pour confirmer l’annulation du projet Veuillez
                          Sélectionner le Statut du Projet
                        </Typography>
                      </div>
                    </div>
                    <div className=" flex flex-col gap-1">
                      <div class="inline-flex items-center">
                        <label
                          class="relative flex items-center p-2 rounded-full cursor-pointer"
                          htmlFor="black"
                        >
                          <input
                            name="color"
                            type="radio"
                            class="before:content[''] peer relative h-3.5 w-3.5 cursor-pointer appearance-none rounded-full border border-blue-gray-200 text-client-primary  transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-10 before:w-10 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-client-primary checked:before:bg-client-primary hover:before:opacity-10"
                            id="black"
                          />
                          <span class="absolute text-client-primary transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              class=" h-1.5  w-1.5"
                              viewBox="0 0 16 16"
                              fill="currentColor"
                            >
                              <circle
                                data-name="ellipse"
                                cx="8"
                                cy="8"
                                r="8"
                              ></circle>
                            </svg>
                          </span>
                        </label>
                        <label className="text-architect-font_gris text-[13px] font-semibold">
                          {" "}
                          L’ Architecte ne me correspond pas
                        </label>
                      </div>
                      <div class="inline-flex items-center">
                        <label
                          class="relative flex items-center p-2 rounded-full cursor-pointer"
                          htmlFor="black"
                        >
                          <input
                            name="color"
                            type="radio"
                            class="before:content[''] peer relative h-3.5 w-3.5 cursor-pointer appearance-none rounded-full border border-blue-gray-200 text-client-primary  transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-10 before:w-10 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-client-primary checked:before:bg-client-primary hover:before:opacity-10"
                            id="black"
                          />
                          <span class="absolute text-client-primary transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              class=" h-1.5  w-1.5"
                              viewBox="0 0 16 16"
                              fill="currentColor"
                            >
                              <circle
                                data-name="ellipse"
                                cx="8"
                                cy="8"
                                r="8"
                              ></circle>
                            </svg>
                          </span>
                        </label>
                        <label className="text-architect-font_gris text-[13px] font-semibold">
                          J’ai trouvé un architecte
                        </label>
                      </div>

                      <div class="inline-flex items-center">
                        <label
                          class="relative flex items-center p-2 rounded-full cursor-pointer"
                          htmlFor="black"
                        >
                          <input
                            name="color"
                            type="radio"
                            class="before:content[''] peer relative h-3.5 w-3.5 cursor-pointer appearance-none rounded-full border border-blue-gray-200 text-client-primary  transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-10 before:w-10 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-client-primary checked:before:bg-client-primary hover:before:opacity-10"
                            id="black"
                          />
                          <span class="absolute text-client-primary transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              class=" h-1.5  w-1.5"
                              viewBox="0 0 16 16"
                              fill="currentColor"
                            >
                              <circle
                                data-name="ellipse"
                                cx="8"
                                cy="8"
                                r="8"
                              ></circle>
                            </svg>
                          </span>
                        </label>
                        <label className="text-architect-font_gris text-[13px] font-semibold">
                          {" "}
                          Aucun architecte m’a contacté
                        </label>
                      </div>
                      <div class="inline-flex items-center">
                        <label
                          class="relative flex items-center p-2 rounded-full cursor-pointer"
                          htmlFor="black"
                        >
                          <input
                            name="color"
                            type="radio"
                            class="before:content[''] peer relative h-3.5 w-3.5 cursor-pointer appearance-none rounded-full border border-blue-gray-200 text-client-primary  transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-10 before:w-10 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-client-primary checked:before:bg-client-primary hover:before:opacity-10"
                            id="black"
                          />
                          <span class="absolute text-client-primary transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              class=" h-1.5  w-1.5"
                              viewBox="0 0 16 16"
                              fill="currentColor"
                            >
                              <circle
                                data-name="ellipse"
                                cx="8"
                                cy="8"
                                r="8"
                              ></circle>
                            </svg>
                          </span>
                        </label>
                        <label className="text-architect-font_gris text-[13px] font-semibold">
                          {" "}
                          L’ Architecte ne me correspond pas
                        </label>
                      </div>
                      <div class="inline-flex items-center">
                        <label
                          class="relative flex items-center p-2 rounded-full cursor-pointer"
                          htmlFor="black"
                        >
                          <input
                            name="color"
                            type="radio"
                            class="before:content[''] peer relative h-3.5 w-3.5 cursor-pointer appearance-none rounded-full border border-blue-gray-200 text-client-primary  transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-10 before:w-10 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-client-primary checked:before:bg-client-primary hover:before:opacity-10"
                            id="black"
                          />
                          <span class="absolute text-client-primary transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              class=" h-1.5  w-1.5"
                              viewBox="0 0 16 16"
                              fill="currentColor"
                            >
                              <circle
                                data-name="ellipse"
                                cx="8"
                                cy="8"
                                r="8"
                              ></circle>
                            </svg>
                          </span>
                        </label>
                        <label className="text-architect-font_gris text-[13px] font-semibold">
                          {" "}
                          J’ai annulé le projet
                        </label>
                      </div>
                    </div>
                    <div className="flex flex-row gap-2  justify-end mt-4   ">
                      <Button
                        onClick={() => setOpen(false)}
                        className="bg-white text-architect-font_gris  border-none "
                        size="sm"
                      >
                        Ignorer
                      </Button>
                      <Button
                        onClick={() => {
                          setOpen(false);
                          handleDelete(announcement.data.id);
                          router.back();
                        }}
                        className="bg-[#11ABEC] text-white border-solid border border-[#11ABEC]"
                        size="sm"
                      >
                        Confirmer
                      </Button>
                    </div>
                  </div>
                </Popup>
              </MainCard>
            </div>
          </div>
          {loading ? (
            <Spinner />
          ) : (
            <>
              {selLoading ? (
                <Spinner />
              ) : selection?.data?.Selections?.interested_architects?.length >
                0 ? (
                <>
                  {" "}
                  <Typography className="self-start font-semibold text-[16px] text-[#344054] mt-10 ">
                    Architectes intéressés par votre projet :
                  </Typography>
                  <div className="flex flex-col space-y-4  mt-4 ">
                    {selection?.data?.Selections.interested_architects?.map(
                      (element, index) => (
                        <MainCard className="flex md:flex-row flex-col gap-2 justify-between shadow-md border  border-gray-300 p-[18px]  ">
                          <Avatar
                            variant="circular"
                            size="sm"
                            alt="user 1"
                            className="border-2 border-white self-center"
                            src={
                              element.company_logo
                                ? element.company_logo.includes("http")
                                  ? element.company_logo
                                  : `${backend}${element.company_logo}`
                                : "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                            }
                          />
                          <div className="flex flex-col ">
                            <Typography className="md:self-start text-extrabold text-[15px] md:w-[210px] self-center text-architect-text_hover ">
                              {`${element.user.first_name} ${element.user.last_name}`}
                            </Typography>
                            <Typography className="md:self-start text-extrabold text-[13px] self-center text-[#888FA7] ">
                              {element.arch_type.display}
                            </Typography>
                          </div>
                          <div className="flex flex-row self-center items-center mr-5  ">
                            <FaStar className=" text-[#FAAF00]" />
                            <FaStar className=" text-[#FAAF00]" />
                            <FaStar className=" text-[#FAAF00]" />
                            <FaStar className=" text-[#FAAF00]" />
                            <FaStar className=" text-[#FAAF00]" />
                          </div>
                          {element.id ===
                          selection.data.Selections.architect ? (
                            <Chip
                              size="lg"
                              value="Selected"
                              color="green"
                              className=" self-center text-architect-success font-extrabold bg-[#22C55E] bg-opacity-15 border-0 ml-5 justify-center  "
                            />
                          ) : (
                            <Chip
                              size="lg"
                              value="Pending"
                              color=""
                              className=" self-center text-[#B76E00] font-extrabold bg-[#FFAB00] bg-opacity-15 border-0 ml-5 justify-center "
                            />
                          )}

                          <div className="flex flex-row gap-2 ml-10 justify-center">
                            <Button
                              onClick={() =>
                                handleItemclick(
                                  `/client/ProfilArchitecte/${element.id}`,
                                )
                              }
                              className="bg-white text-[#08D3BB] text-[14px] border-solid border border-[#08D3BB] "
                              size="sm"
                            >
                              Voir Profil
                            </Button>

                            <Button
                              onClick={() =>
                                handlItemClick(
                                  `/client/ManagerSelection/${announcement.data.id}/${element.id}`,
                                )
                              }
                              className="bg-[#08D3BB] text-white border-solid border text-[14px] border-[#08D3BB]"
                              size="sm"
                            >
                              <span className="flex felx-row items-center gap-1 ">
                                <TbMessage className="size-5" />
                                Contacter
                              </span>
                            </Button>
                          </div>
                        </MainCard>
                      ),
                    )}

                    {/* <MainCard className="flex md:flex-row flex-col gap-2 justify-between shadow-md border  border-gray-300 p-[18px]  ">
              <Avatar
                variant="circular"
                size="sm"
                alt="user 1"
                className="border-2 border-white self-center"
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
              />
              <div className="flex flex-col ">
                <Typography className="md:self-start text-extrabold text-[15px] md:w-[210px] self-center text-architect-text_hover ">
                  Natalie Dormer
                </Typography>
                <Typography className="md:self-start text-extrabold text-[13px] self-center text-[#888FA7] ">
                  Architecte de construction
                </Typography>
              </div>
              <div className="flex flex-row self-center items-center">
                <FaStar className=" text-[#FAAF00]" />
                <FaStar className=" text-[#FAAF00]" />
                <FaStar className=" text-[#FAAF00]" />
                <FaStar className=" text-[#FAAF00]" />
                <FaStar className=" text-[#FAAF00]" />
              </div>
              <Chip
                size="lg"
                value="pending"
                color=""
                className="self-center text-[#B76E00] font-extrabold bg-[#FFAB00] bg-opacity-15 border-0 ml-5 justify-center"
              />
              <div className="flex flex-row gap-2 ml-10 justify-center">
                <Button
                  onClick={() => handleItemclick("/architect/Profile")}
                  className="bg-white text-[#08D3BB] text-[14px] border-solid border border-[#08D3BB] "
                  size="sm"
                >
                  Voir Profil
                </Button>
                <Button
                  onClick={() => handlItemClick("/client/ViewDevis")}
                  className="bg-[#08D3BB] text-white border-solid border text-[14px] border-[#08D3BB]"
                  size="sm"
                >
                  <span className="flex felx-row items-center gap-1 ">
                    <TbMessage className="size-5" />
                    Contacter
                  </span>
                </Button>
              </div>
            </MainCard>

            <MainCard className="flex md:flex-row flex-col gap-2 justify-between shadow-md border  border-gray-300 p-[18px]  ">
              <Avatar
                variant="circular"
                alt="user 3"
                size="sm"
                className="border-2 border-white self-center"
                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1288&q=80"
              />
              <div className="flex flex-col ">
                <Typography className="md:self-start text-extrabold text-[15px] md:w-[210px] self-center text-architect-text_hover ">
                  Natalie Dormer
                </Typography>
                <Typography className="md:self-start text-extrabold text-[13px] self-center text-[#888FA7] ">
                  Architecte de construction
                </Typography>
              </div>
              <div className="flex flex-row self-center items-center">
                <FaStar className=" text-[#FAAF00]" />
                <FaStar className=" text-[#FAAF00]" />
                <FaStar className=" text-[#FAAF00]" />
                <FaStar className=" text-[#FAAF00]" />
                <FaStar className=" text-[#FAAF00]" />
              </div>
              <Chip
                size="lg"
                value="overdue"
                color=""
                className="self-center text-[#B71D18] font-extrabold bg-[#FF5630] bg-opacity-15 border-0 ml-5 justify-center"
              />
              <div className="flex flex-row gap-2 ml-10 justify-center">
                <Button
                  className="bg-white text-[#08D3BB] text-[14px] border-solid border border-[#08D3BB] "
                  size="sm"
                >
                  Voir Profil
                </Button>
                <Button
                  onClick={() => handlItemClick("/client/ViewDevis")}
                  className="bg-[#08D3BB] text-white border-solid border text-[14px] border-[#08D3BB]"
                  size="sm"
                >
                  <span className="flex felx-row items-center gap-1 ">
                    <TbMessage className="size-5" />
                    Contacter
                  </span>
                </Button>
              </div>
            </MainCard>
            <MainCard className="flex md:flex-row flex-col gap-2 justify-between shadow-md border  border-gray-300 p-[18px]  ">
              <Avatar
                variant="circular"
                alt="user 3"
                size="sm"
                className="border-2 border-white self-center"
                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1288&q=80"
              />
              <div className="flex flex-col ">
                <Typography className="md:self-start text-extrabold text-[15px] md:w-[210px] self-center text-architect-text_hover ">
                  Natalie Dormer
                </Typography>
                <Typography className="md:self-start text-extrabold text-[13px] self-center text-[#888FA7] ">
                  Architecte de construction
                </Typography>
              </div>
              <div className="flex flex-row self-center items-center">
                <FaStar className=" text-[#FAAF00]" />
                <FaStar className=" text-[#FAAF00]" />
                <FaStar className=" text-[#FAAF00]" />
                <FaStar className=" text-[#FAAF00]" />
                <FaStar className=" text-[#FAAF00]" />
              </div>
              <Chip
                size="lg"
                value="rejected"
                color=""
                className=" self-center text-[#637381] font-extrabold bg-[#919EAB] bg-opacity-15 border-0 ml-5 justify-center"
              />
              <div className="flex flex-row gap-2 ml-10 justify-center">
                <Button
                  onClick={() => handleItemclick("/architect/Profile")}
                  className="bg-white text-[#08D3BB]  border-solid text-[14px] border border-[#08D3BB] "
                  size="sm"
                >
                  Voir Profil
                </Button>
                <Button
                  onClick={() => handlItemClick("/clientVisitor/ViewDevis")}
                  className="bg-[#08D3BB] text-white text-[14px] border-solid border border-[#08D3BB]"
                  size="sm"
                >
                  <span className="flex felx-row items-center gap-1 ">
                    <TbMessage className="size-5" />
                    Contacter
                  </span>
                </Button>
              </div>
            </MainCard> */}
                  </div>
                </>
              ) : (
                <>no architects</>
              )}
            </>
          )}
          <></>
        </div>
      </div>
    );
};

export default page;
