"use client";
import DevisRouge from "@/assets/DevisRouge.svg";

import Constructeurr from "@/assets/Constructeurr.svg";
import TokenImage from "@/assets/token.svg";
import { MainCard, PageLayout } from "@/components";
import { Button, Chip, Spinner, Typography } from "@material-tailwind/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { IoMdDownload } from "react-icons/io";

import { Avatar, Progress } from "@/components/RemoteComponents";
import {
  useCheckSelection,
  useFetchDevis,
  useFindArchi,
  useGetAnnouncementDetails,
  useLeaveProject,
} from "@/services/queries";
import {
  ArrowLeftIcon,
  BanknotesIcon,
  BuildingOfficeIcon,
  ChevronRightIcon,
  ExclamationCircleIcon,
  MapIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";
import Cookies from "js-cookie";
import { usePathname, useRouter } from "next/navigation";

const architectManagerPage = (props) => {
  const { children } = props;
  const router = useRouter();
  const pathname = usePathname();

  const handleChipColor = (status) => {
    switch (status) {
      case "Accepted":
        return "text-[#118D57] bg-[#22C55E]";
      case "Refused":
        return "text-[#B71D18]  bg-[#ff5732]";
      case "Pending":
        return "text-[#B76E00]  bg-[#FFAB00]";
    }
  };

  const id = pathname.split("/")[3];
  const cookiesdata = Cookies.get("id");
  const { data: devis, isloading, iserror } = useFetchDevis(cookiesdata, id);
  const { data: announcement, isLoading } = useGetAnnouncementDetails(id);
  const { data: selection, loading } = useCheckSelection(cookiesdata, id);
  const { data: architect, isLLoading, isError } = useFindArchi(cookiesdata);
  const leaveProjectMutation = useLeaveProject("", {});
  const handlepush = () => {
    router.push(`/architect/list_selections`);
  };
  const handledevis = (devis_id) => {
    router.push(`/architect/ManagerSelection/${id}/DevisOne/${devis_id}`);
  };
  function calculateDaysDifference(createdDate) {
    const today = new Date();
    const createdDateObj = new Date(createdDate);

    const diffInMs = createdDateObj - today;
    const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));

    // console.log("diffInDays:", diffInDays);
    if (diffInDays < 0) {
      return 0;
    } else if (diffInDays > 5) {
      return 0;
    } else {
      return diffInDays;
    }
  }

  function progressBarColor(daysDifference) {
    if (daysDifference > 4) {
      return "green";
    } else if (daysDifference === 4) {
      return "green";
    } else if (daysDifference === 3) {
      return "orange";
    } else if (daysDifference === 2) {
      return "orange";
    } else {
      return "red";
    }
  }
  function progressBarValue(daysDifference) {
    if (daysDifference > 4) {
      return 0;
    } else if (daysDifference === 4) {
      return 20;
    } else if (daysDifference === 3) {
      return 40;
    } else if (daysDifference === 2) {
      return 70;
    } else if (daysDifference === 1) {
      return 90;
    } else {
      return 100;
    }
  }
  const [progressValue, setProgressValue] = useState(null);
  const [progressColor, setProgressColor] = useState(null);

  useEffect(() => {
    if (
      selection &&
      selection.data &&
      selection.data.selection.expiration_date
    ) {
      const createdDate = selection.data.selection.expiration_date;
      const daysDifference = calculateDaysDifference(createdDate);
      const color = progressBarColor(daysDifference);
      const value = progressBarValue(daysDifference);
      setProgressColor(color);
      setProgressValue(value);
    }
  }, [selection]);

  const handleLeave = () => {
    leaveProjectMutation.mutate({
      ann_id: id,
      architect_id: cookiesdata,
    });
    router.push("/architect/list_selections");
  };

  return (
    <PageLayout className="p-10 ">
      <div className="flex flex-col   max-w-screen-2xl w-full m-auto gap-6 mt-4 ">
        <Typography
          onClick={handlepush}
          variant="paragraph"
          className="text-architect-font_gris text-[18px] font-semibold flex items-center gap-2 cursor-pointer"
        >
          <ArrowLeftIcon className="h-5 w-5" />
          retour
        </Typography>
        {isLoading ? (
          <Spinner />
        ) : (
          <MainCard className="relative p-7   ">
            <div className="flex flex-col">
              <div className="flex flex-row justify-between">
                <Typography className="text-architect-secondary_text_color text-[12px]">
                  Publié le{" "}
                  {new Date(announcement?.data?.created_at).toLocaleDateString(
                    "fr-FR",
                    {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    },
                  )}{" "}
                </Typography>
                <Chip
                  size="lg"
                  value="Pending"
                  color="green"
                  className="self-center w-[120px] text-center text-[#B76E00] font-extrabold bg-[#ffa800] bg-opacity-15 border-0"
                />
              </div>
              <div className="mt-5">
                <Typography className="text-architect-font_gris text-[24px] font-bold">
                  {" "}
                  {announcement?.data?.work_type}{" "}
                </Typography>
                <div className="flex  flex-row  mt-1  items-center gap-3 ">
                  <img
                    className=" cursor-pointer  w-[20px]  flex items-center text-client-primary fill-current "
                    src={Constructeurr.src}
                  />
                  <Typography className=" text-[17px] self-center text-client-primary  ">
                    {announcement?.data?.architect_type.display}{" "}
                  </Typography>
                </div>
                <div className="flex items-center mt-1 ">
                  <Typography
                    variant="h6"
                    className=" flex items-center text-[16px]  font-normal  gap-2"
                  >
                    <MapPinIcon className="h-5 w-5" />
                    {announcement?.data.town}
                  </Typography>
                </div>
              </div>
              <div className="flex flex-row basis-0 flex-grow gap-12 mt-4">
                <div className="flex flex-row items-center gap-1">
                  <BuildingOfficeIcon className="h-6 w-6 text-architect-secondary_text_color " />
                  <Typography className="text-architect-secondary_text_color text-[12px]">
                    {" "}
                    {announcement?.data.house_type}
                  </Typography>
                </div>

                <div className="flex flex-row items-center  gap-1">
                  <BanknotesIcon className="h-6 w-6 text-architect-secondary_text_color " />
                  <Typography className="text-architect-secondary_text_color text-[12px]">
                    {" "}
                    {announcement?.data.budget}{" "}
                  </Typography>
                </div>
                <div className="flex flex-row items-center gap-1 ">
                  <MapIcon className="h-6 w-6 text-architect-secondary_text_color " />
                  <Typography className="text-architect-secondary_text_color text-[12px]">
                    {" "}
                    {announcement.data.surface_terrain}{" "}
                  </Typography>
                </div>
                <div className="flex  items-center gap-1">
                  <Image src={TokenImage} className="" alt="" />
                  <Typography className="text-architect-font_gris">
                    {" "}
                    5 Jetons
                  </Typography>
                </div>
                <div className="flex flex-row items-center gap-1 ">
                  <a href={`/architect/DetailProjet/${id}`}>
                    <Typography className="underline text-[14px] font-bold">
                      {" "}
                      Plus de détails
                    </Typography>
                  </a>
                  <ChevronRightIcon className="h-4 w-4  " />
                </div>
              </div>

              <div className="flex flex-row gap-4 items-center  mt-7 ">
                <div className="flex items-center blur-sm">
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
                <Typography className="text-architect-success text-[12px]">
                  {" "}
                  {announcement?.data?.selection_count} Architectes intéressés
                  par le projet
                </Typography>
              </div>
              <div className=" items-center rounded-md flex flex-col gap-2 lg:flex-row mt-7 ">
                <Progress
                  value={progressValue}
                  size="md"
                  color={progressColor}
                  className="   w-[95%]"
                />
                <Typography className="hidden lg:flex font-semibold text-architect-font_gris text-[15px]  ">
                  {calculateDaysDifference(
                    selection?.data?.selection?.expiration_date,
                  ) <= 0
                    ? 0
                    : calculateDaysDifference(
                        selection?.data?.selection?.expiration_date,
                      )}{" "}
                  J
                </Typography>
              </div>
              {calculateDaysDifference(
                selection?.data?.selection?.expiration_date,
              ) > 2 ? null : (
                <div className="flex flex-row items-center gap-1  mt-2">
                  <ExclamationCircleIcon className="lg:h-7 w-7   text-[#FDB022] " />
                  <Typography className="text-[#FDB022] lg:text-[16px] text-[13px] font-semibold">
                    {" "}
                    On vous invite a contacter le client il vous reste un jour,
                    attention le projet va être clôturer
                  </Typography>
                </div>
              )}
              <div className="flex flex-row justify-end self-end gap-3  h-full ">
                <Button
                  // color="architect-font_gris"
                  variant="outlined"
                  className=" mt-16 font-semibold w-[170px] md:text-[16px] text-[14px]"
                  type="submit"
                  size="md"
                  onClick={handleLeave}
                >
                  Abandonner
                </Button>
                <Button
                  type="submit"
                  size="md"
                  className=" mt-16 font-semibold  md:text-[16px] text-[14px]"

                  //disabled={isLoading}
                >
                  Clôturer le projet
                </Button>
              </div>
            </div>
          </MainCard>
        )}

        <div className=" max-w-screen-2xl ">{children}</div>

        <Typography className="text-architect-font_gris text-[24px] font-bold mt-4  ">
          Historique des devis
        </Typography>

        <div className="flex flex-col space-y-4 mt-5  ">
          {isloading && devis?.data.devis ? (
            <Spinner />
          ) : devis && devis.data.devis ? (
            devis.data.devis
              .filter(
                (element) =>
                  element.architect === architect?.data?.architect.id,
              )
              .map((element, index) => (
                <MainCard
                  key={index}
                  className="flex md:flex-row flex-col gap-2 justify-between shadow-md border  border-gray-300 p-[27px] "
                >
                  <div className="flex flex-row justify-center items-center gap-4 ">
                    <img
                      className="w-[40px] cursor-pointer py-0.5 "
                      src={DevisRouge.src}
                    />
                    <Typography className=" text-extrabold text-[19px] self-center text-[#1B2534] md:w-[170px] ">
                      Devis-{index}
                    </Typography>
                  </div>
                  <Typography className="mt-3 md:self-start text-extrabold text-[19px] md:w-[210px] self-center text-architect-secondary_text_color">
                    {new Date(element.created_at).toLocaleDateString("fr-FR", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}{" "}
                  </Typography>
                  <Chip
                    size="lg"
                    value={element.status}
                    className={`self-center w-[100px] text-center font-extrabold ${handleChipColor(
                      element.status,
                    )} bg-opacity-15 border-0`}
                  />
                  <Button
                    size="sm"
                    onClick={() => handledevis(element.id)}
                    className="self-center text-blue-gray-50 font-extrabold py-3 px-5  bg-[#08d3bb] border-0"
                  >
                    Voir devis
                  </Button>
                  <div className="flex flex-row justify-center items-center  ">
                    <IoMdDownload className="h-6 w-6 self-center" />
                    <Typography className="text-[15px] font-semibold self-center ">
                      PDF
                    </Typography>
                  </div>
                </MainCard>
              ))
          ) : (
            <MainCard className="text-center items-center justify-center shadow-md border  border-gray-300 p-[27px] ">
              <Typography>Vous n'avez pas envoyé des devis</Typography>
            </MainCard>
          )}
        </div>
      </div>
    </PageLayout>
  );
};

export default architectManagerPage;
