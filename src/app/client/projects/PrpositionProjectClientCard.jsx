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
  useChangeAnnouncement,
  useDeleteAnnoucement,
} from "@/services/queries";
import {
  BanknotesIcon,
  BuildingOfficeIcon,
  MapIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";
import { Switch } from "@material-tailwind/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { GrFormNext } from "react-icons/gr";
import { IoIosArrowBack } from "react-icons/io";

const PrpositionProjectClientCard = ({ children, data }) => {
  const router = useRouter();
  const CreateAnnoucementMutation = useDeleteAnnoucement("", {}, router);
  const mutation = useChangeAnnouncement("", {});
  const handleChange = () => {
    mutation.mutate({ id: data.id });
  };
  const handleDelete = (id) => {
    CreateAnnoucementMutation.mutate({ id: id });
  };
  const handleItemClick = (route) => {
    router.push(route);
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

  return (
    <div className="w-full">
      <MainCard
        className="relative mt-10 w-full sm:w-[470px] self-center"
        onClick={handleMainCardClick}
      >
        <div className="flex flex-col ">
          <div className="flex  items-center justify-between ml-6 ">
            <Typography className="text-architect-secondary_text_color text-[12px]">
              {" "}
              {parseDate(data.created_at)}
            </Typography>
            <div className="flex  items-center gap-2 self-end mr-6">
              <Chip
                size="lg"
                value="pending"
                color="green"
                className="self-center text-[#B76E00] font-extrabold bg-[#FFAB00] bg-opacity-15 border-0 ml-5"
              />
            </div>
          </div>
          <div className="mt-1 ml-6">
            <Typography className="text-architect-font_gris text-[16px] font-bold">
              {" "}
              {data.work_type}
            </Typography>
            <Typography className="text-client-primary text-[14px]">
              {" "}
              {data.architect_type.display}
            </Typography>
            <div className="flex flex-row items-center p-[8px] gap-1 ">
              <MapPinIcon className="h-6 w-6 text-architect-font_gris " />
              <Typography className="text-architect-font_gris text-[14px]">
                {" "}
                {data.town}
              </Typography>
            </div>
          </div>

          <div className="flex flex-row  mt-4 mb-5 ml-6  ">
            <div className="flex flex-col basis-0 flex-grow">
              <div className="flex flex-row items-center p-[8px] gap-1">
                <BuildingOfficeIcon className="h-6 w-6 text-architect-secondary_text_color cursor-pointer " />
                <Typography className="text-architect-secondary_text_color text-[12px] ">
                  {" "}
                  {data.house_type}
                </Typography>
              </div>
              <div className="flex flex-row items-center p-[8px] gap-1 ">
                <MapIcon className="h-6 w-6 text-architect-secondary_text_color  " />
                <Typography className="text-architect-secondary_text_color text-[12px]">
                  {" "}
                  {data.surface_terrain}
                </Typography>
              </div>
            </div>
            <div className="flex flex-col basis-0 flex-grow">
              <div className="flex flex-row items-center p-[8px] gap-1  ">
                <BanknotesIcon className="h-6 w-6 text-architect-secondary_text_color " />
                <Typography className="text-architect-secondary_text_color text-[12px]">
                  {" "}
                  {data.budget}
                </Typography>
              </div>
              <div className="flex flex-row items-center p-[8px] ">
                <Typography
                  onClick={() =>
                    handleItemClick(`/client/DetailProjet/${data.id}`)
                  }
                  className=" text-client-primary font-semibold underline underline-offset-1 text-[12px] cursor-pointer "
                >
                  {" "}
                  Consulter projet
                </Typography>
                <GrFormNext className="text-client-primary size-5" />
              </div>
            </div>
          </div>

          <div className="flex flex-row gap-4 items-center  mt-4 pb-4  mb-2 ml-6">
            <div className="flex items-center -space-x-4 ">
              <Avatar
                variant="circular"
                size="sm"
                alt="user 1"
                className="border-2 border-white hover:z-10 focus:z-10"
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
            <Typography className="text-[#16B364] text-[13px]">
              {" "}
              {data.selection_count} Architectes intéressés par le projet
            </Typography>
          </div>
          <div className="mt-1 flex flex-col border-b-[1px] border-dashed  pb-5">
            <div className="flex flex-col gap-2  bg-[#E5EBFF] px-6 py-4">
              <Typography className="text-architect-font_gris text-[16px] font-semibold">
                {" "}
                Statuts de recherche
              </Typography>
              <div className="flex flex-row  justify-between">
                <Typography className="text-architect-font_gris text-[14px] ">
                  {" "}
                  Veuillez signaler si vous avez trouvé un architecte
                </Typography>
                {data.architect_found ? (
                  <Switch
                    color="blue"
                    className="bg-white"
                    onClick={() => handleChange()}
                    defaultChecked
                  />
                ) : (
                  <Switch
                    color="blue"
                    className="bg-white"
                    onClick={() => handleChange()}
                  />
                )}
              </div>
            </div>
          </div>

          <div className="flex flex-row gap-3  w-full justify-center px-4 mt-5">
            <Button
              onClick={() => setOpen(true)}
              className="bg-white text-black  border-solid border border-architect-font_gris flex-grow "
              size="sm"
            >
              Annuler projet
            </Button>
            <Button
              onClick={() =>
                handleItemClick(`/client/ArchiViewProjects/${data.id}`)
              }
              size="sm"
              className="flex-grow "
            >
              Voir les architectes
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
                <div onClick={() => setOpen(false)} className="cursor-pointer ">
                  <IoIosArrowBack className="size-5 text-[#344054]" />
                </div>
                <Typography className="text-[#344054] text-[13px] ">
                  Retour
                </Typography>
              </div>
              <div className="mt-6">
                <h1 className="text-[25px] text-[#344054] font-bold  ">
                  Annulation projet
                </h1>
                <Typography className="text-architect-secondary_text_color text-[16px] mt-4  ">
                  Pour confirmer l’annulation du projet Veuillez Sélectionner le
                  Statut du Projet
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
                      <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
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
                      <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
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
                      <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
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
                      <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
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
                      <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
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
                  handleDelete(data.id);
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
  );
};

export default PrpositionProjectClientCard;
