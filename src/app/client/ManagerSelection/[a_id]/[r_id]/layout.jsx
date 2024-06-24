"use client";
import DevisRouge from "@/assets/DevisRouge.svg";

import Constructeurr from "@/assets/Constructeurr.svg";
import { MainCard, PageLayout } from "@/components";
import { Avatar } from "@/components/RemoteComponents";
import {
  useCheckSelection,
  useFetchData,
  useFetchDevis,
  useGetAnnouncementDetails,
} from "@/services/queries";
import {
  ArrowLeftIcon,
  BanknotesIcon,
  BuildingOfficeIcon,
  ChevronRightIcon,
  MapIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";
import { Button, Chip, Spinner, Typography } from "@material-tailwind/react";
import Cookies from "js-cookie";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa6";
import { IoMdDownload } from "react-icons/io";

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
  const ar_id = pathname.split("/")[4];

  const cookiesdata = Cookies.get("id");

  const { data: architect, isLoadingArchitect } = useFetchData(
    `/archimatch_app/architect/${ar_id}/`,
    "architect",
  );

  const {
    data: devis,
    isloading,
    iserror,
  } = useFetchDevis(architect?.data?.user?.id, id);
  const { data: announcement, isLoading } = useGetAnnouncementDetails(id);
  const { data: selection, loading } = useCheckSelection(
    architect?.data?.user?.id,
    id,
  );
  const handlepush = () => {
    router.push(`/client/ArchiViewProjects/${id}`);
  };
  const handledevis = (devis_id) => {
    console.log(devis_id);
    router.push(`/client/ManagerSelection/${id}/${ar_id}/DevisOne/${devis_id}`);
  };

  function calculateDaysDifference(createdDate) {
    const today = new Date();
    const createdDateObj = new Date(createdDate);
    const diffInMs = Math.abs(today - createdDateObj);
    const diffInDays = Math.ceil(diffInMs / (1000 * 60 * 60 * 24)); // Convert to days
    return diffInDays;
  }

  function progressBarColor(daysDifference) {
    if (daysDifference <= 1) {
      return "green";
    } else if (daysDifference === 2) {
      return "green"; // Progress on the 3rd day
    } else if (daysDifference === 3) {
      return "orange"; // Progress on the 3rd day
    } else if (daysDifference === 4) {
      return "orange"; // Progress on the 3rd day
    } else {
      return "red";
    }
  }
  const [progressColor, setProgressColor] = useState(null);
  function progressBarValue(daysDifference) {
    if ((daysDifference = 0)) {
      return 0;
    } else if ((daysDifference = 1)) {
      return 20;
    } else if (daysDifference === 2) {
      return 40;
    } else if (daysDifference === 3) {
      return 60;
    } else if (daysDifference === 4) {
      return 80;
    } else {
      return 100;
    }
  }
  const [progressValue, setProgressValue] = useState(null);
  const backend = "http://localhost:8000";
  useEffect(() => {
    if (selection && selection.data && selection.data.selection.created_at) {
      const createdDate = selection.data.selection.created_at;
      const daysDifference = calculateDaysDifference(createdDate);
      const color = progressBarColor(daysDifference);
      const value = progressBarValue(daysDifference);
      setProgressColor(color);
      setProgressValue(value);
    }
  }, [selection]);

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
          <div className="flex flex-col  md:flex-row mt-4 gap-5  justify-between ">
            <MainCard className="relative p-7 w-full   ">
              <div className="flex flex-col">
                <div className="flex flex-row justify-between">
                  <Typography className="text-architect-secondary_text_color text-[12px]">
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
                    {announcement.data.work_type}{" "}
                  </Typography>
                  <div className="flex  flex-row  mt-1  items-center gap-3 ">
                    <img
                      className=" cursor-pointer  w-[20px]  flex items-center text-client-primary fill-current "
                      src={Constructeurr.src}
                    />
                    <Typography className=" text-[17px] self-center text-client-primary  ">
                      {announcement.data.architect_type.display}{" "}
                    </Typography>
                  </div>
                  <div className="flex items-center mt-1 ">
                    <Typography
                      variant="h6"
                      className=" flex items-center text-[16px]  font-normal  gap-2"
                    >
                      <MapPinIcon className="h-5 w-5" />
                      {announcement.data.town}
                    </Typography>
                  </div>
                </div>
                <div className="flex flex-row basis-0 flex-grow gap-12 mt-4">
                  <div className="flex flex-row items-center gap-1">
                    <BuildingOfficeIcon className="h-6 w-6 text-architect-secondary_text_color " />
                    <Typography className="text-architect-secondary_text_color text-[12px]">
                      {" "}
                      {announcement.data.house_type}
                    </Typography>
                  </div>

                  <div className="flex flex-row items-center  gap-1">
                    <BanknotesIcon className="h-6 w-6 text-architect-secondary_text_color " />
                    <Typography className="text-architect-secondary_text_color text-[12px]">
                      {" "}
                      {announcement.data.budget}{" "}
                    </Typography>
                  </div>
                  <div className="flex flex-row items-center gap-1 ">
                    <MapIcon className="h-6 w-6 text-architect-secondary_text_color " />
                    <Typography className="text-architect-secondary_text_color text-[12px]">
                      {" "}
                      {announcement.data.surface_terrain}{" "}
                    </Typography>
                  </div>

                  <div className="flex flex-row items-center gap-1 ">
                    <a href={`/client/DetailProjet/${id}`}>
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
                    {
                      selection?.data?.selection?.interested_architects.length
                    }{" "}
                    Architectes intéressés par le projet
                  </Typography>
                </div>
              </div>
            </MainCard>
            <div className="w-full lg:w-[50%]  ">
              <div className="flex flex-col items-start w-full ">
                <div className="w-full ">
                  {isLoadingArchitect ? (
                    <Spinner />
                  ) : (
                    <MainCard className="relative   self-center p-6">
                      <div className="flex flex-col ">
                        <div className="flex flex-col items-center w-full pt-2 ">
                          <Avatar
                            variant="circular"
                            size="lg"
                            alt="user 1"
                            className="border-2 border-white hover:z-10 focus:z-10"
                            src={
                              architect?.data.company_logo
                                ? architect?.data.company_logo.includes("http")
                                  ? architect?.data.company_logo
                                  : `${backend}${architect?.data.company_logo}`
                                : "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                            }
                          />

                          <Typography className=" text-extrabold text-[15px] font-semibold  self-center text-architect-font_gris mt-2 ">
                            {`${architect?.data?.user?.first_name} ${architect?.data?.user?.last_name}`}
                          </Typography>
                          <Typography className=" text-extrabold text-[13px] self-center text-[#11ABEC] ">
                            {`${architect?.data?.arch_type?.display}`}
                          </Typography>
                          <div className="flex flex-row self-center items-center pt-1 ">
                            <FaStar className=" text-[#FAAF00]" />
                            <FaStar className=" text-[#FAAF00]" />
                            <FaStar className=" text-[#FAAF00]" />
                            <FaStar className=" text-[#FAAF00]" />
                            <FaStar className=" text-[#FAAF00]" />
                          </div>
                          <div className="flex flex-row self-center items-start pt-1 text-[#344054] text-[12px] ">
                            <div className="flex flex-row gap-2 ">
                              <Typography className=" font-semibold">
                                {architect?.data?.realisations?.length}
                              </Typography>
                              <Typography>projets</Typography>
                            </div>

                            <Typography className="px-2 text-[#667085] ">
                              |
                            </Typography>
                            <div className="flex flex-row gap-2 ">
                              <Typography className=" font-semibold">
                                50
                              </Typography>
                              <Typography>clients satisfaits</Typography>
                            </div>
                          </div>
                          <Button
                            onClick={() =>
                              router.push(
                                `/client/ProfilArchitecte/${architect?.data?.id}`,
                              )
                            }
                            size="sm"
                            className=" w-full mt-4 "
                          >
                            Voir Profil
                          </Button>
                        </div>
                      </div>
                    </MainCard>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        <div className=" max-w-screen-2xl ">{children}</div>

        <Typography className="text-architect-font_gris text-[24px] font-bold mt-4  ">
          Historique des devis
        </Typography>

        <div className="flex flex-col space-y-4 mt-5  ">
          {isloading && devis.data.devis ? (
            <Spinner />
          ) : devis && devis.data.devis ? (
            devis.data.devis
              .filter((element) => element.architect === architect?.data.id)
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
