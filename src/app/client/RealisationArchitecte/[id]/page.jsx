"use client";
import Archimatch from "@/assets/Archimatch.svg";
import Facebookk from "@/assets/Facebookk.svg";

import Linkdin from "@/assets/Linkdin.svg";
import Person from "@/assets/Person.svg";
import PhotoNav from "@/assets/PhotoNav.svg";
import RealisationImage from "@/assets/RealisationImage.svg";
import Tweeter from "@/assets/Tweeter.svg";
import Twitch from "@/assets/Twitch.svg";
import Virgule from "@/assets/Virgule.svg";
import { MainCard, PageLayout } from "@/components";
import {
  Tab,
  TabPanel,
  Tabs,
  TabsBody,
  TabsHeader,
} from "@/components/RemoteComponents";
import { useFetchData } from "@/services/queries";
import {
  HandThumbDownIcon,
  HandThumbUpIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";
import {
  Avatar,
  Button,
  Carousel,
  IconButton,
  Spinner,
  Typography,
} from "@material-tailwind/react";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import DetailsExecution from "./DetailsExecution";
import Galerie from "./Galerie";

const ClientRealisationArchitectePage = () => {
  const backend = "http://localhost:8000";
  const router = useRouter();
  const pathname = usePathname();
  const {
    data: realisation,
    isLoading,
    isFetching,
    isPending,
    isSuccess,
  } = useFetchData(
    `/archimatch_app/Realization/${
      pathname.split("/")[3]
    }/view_realization_by_id/`,
    "realisation",
  );

  const { data: realisations, isLoading: reaLoading } = useFetchData(
    `/archimatch_app/Realization/`,
    "realisations",
  );

  const { data: architect, isLoading: archiLoading } = useFetchData(
    `/archimatch_app/architect/${realisation.data.realization.architect}`,
    "architects",
  );
  const [activeTab, setActiveTab] = React.useState("Galerie");
  const data = [
    {
      label: "Galerie",
      value: "Galerie",
      desc: <Galerie realisation={realisation} />,
    },
    {
      label: "Details d'éxecution",
      value: "Details d'éxecution",
      desc: <DetailsExecution realisation={realisation} />,
    },
  ];
  if (isLoading && reaLoading) {
    return <Spinner />;
  } else
    return (
      <>
        <div className="    ">
          <figure className=" relative h-[600px] w-full cursor-pointer ">
            <img
              className="h-full w-full  object-cover object-center"
              src={PhotoNav.src}
              alt=""
            />
            <figcaption className="absolute bottom-60 left-72  w-[80%]  flex flex-row justify-between">
              <div className=" flex flex-col ">
                <Typography
                  variant="h5"
                  color="white"
                  className="text-center text-[43px] font-bold"
                >
                  {realisation?.data.realization.project_title}
                </Typography>
                <div className="flex flex-row gap-2">
                  <Typography
                    variant="h6"
                    className="flex items-center text-[#CBCBD0] text-[15px]     cursor-pointer"
                  >
                    {realisation?.data.realization.style}
                  </Typography>

                  <div className="flex items-center flex-row   ">
                    <Typography
                      variant="h6"
                      className="flex items-center text-[#CBCBD0] text-[15px]   gap-2 cursor-pointer"
                    >
                      <MapPinIcon className="h-5 w-5" />
                      {realisation?.data.realization.city}
                    </Typography>
                  </div>
                </div>
              </div>
              <div className="flex flex-col ">
                <Button
                  type="submit"
                  size="md"
                  className=" w-[300px] text-[16px] font-bold self-center flex items-center justify-center   "
                  onClick={() => router.push(`/client/create_project/`)}
                >
                  Postuler votre projet
                </Button>
                <Button
                  type="submit"
                  size="md"
                  className=" w-full self-center text-[15px] font-bold flex items-center justify-center    mt-2 "
                  variant="outlined"
                  onClick={() => router.back()}
                >
                  Consulter profil Architect
                </Button>
              </div>
            </figcaption>
          </figure>
        </div>
        <PageLayout className="p-10 ">
          <div className="flex flex-col">
            <Typography className="font-extrabold text-[40px] text-center text-architect-font_gris ">
              {realisation?.data.realization.project_title}
            </Typography>
            <Tabs
              value={activeTab}
              className="max-w-screen-2xl   m-auto w-full  mt-8"
            >
              <TabsHeader
                className="rounded-none  bg-transparent   lg:w-[40%]"
                indicatorProps={{
                  className:
                    "font-normal  mt-1 bg-transparent border-b-2 border-client-primary shadow-none rounded-none",
                }}
              >
                {data.map(({ label, value }) => (
                  <Tab
                    key={value}
                    value={value}
                    onClick={() => setActiveTab(value)}
                    className={
                      activeTab === value
                        ? "text-client-primary"
                        : "text-architect-secondary_text_color"
                    }
                  >
                    {label}
                  </Tab>
                ))}
              </TabsHeader>
              <TabsBody>
                {data.map(({ value, desc }) => (
                  <TabPanel key={value} value={value}>
                    {desc}
                  </TabPanel>
                ))}
              </TabsBody>
            </Tabs>
            <Typography className="font-extrabold text-[40px] text-center text-architect-font_gris mt-20 ">
              Some thoughts from our clients
            </Typography>
            <Typography className=" text-[20px] text-center text-architect-secondary_text_color mt-1 ">
              Des services adaptés et flexibles selon votre projet et votre
              besoin
            </Typography>
            {archiLoading ? (
              <Spinner className="m-auto" />
            ) : (
              <div className="flex flex-row  justify-center   self-center  mt-12 space-x-5 flex-wrap w-[80%] gap-2   ">
                {architect &&
                  architect?.data?.comments.length > 0 &&
                  architect?.data?.comments?.map((element, index) => (
                    <MainCard className="max-w-screen-sm rounded-2xl p-[16px]  flex   items-center self-center w-[30%] min-w-[300px]  border-gray-300   relative ">
                      <img
                        className=" cursor-pointer absolute top-7 right-10 rotate-180 w-[150px] opacity-45 "
                        src={Virgule.src}
                      />
                      <div className="flex flex-row gap-4">
                        <Avatar
                          src={Person.src}
                          alt="avatar"
                          className="w-[65px] h-[65px]"
                        />

                        <div className="flex items-center gap-4 ">
                          <div className="flex flex-col">
                            <div className="flex flex-col ">
                              <Typography className="font-bold text-[17px] text-[#344155] ">
                                {`${element.Client.user.first_name} ${element.Client.user.last_name} `}
                              </Typography>
                              <Typography className=" text-architect-secondary_text_color text-[15px]   ">
                                {new Date(
                                  element?.created_at,
                                ).toLocaleDateString()}
                              </Typography>
                            </div>

                            <Typography className="text-architect-secondary_text_color text-[14px] mt-4 ">
                              {element.message}
                            </Typography>
                            <div className="flex flex-row gap-4">
                              <div className="flex items-center flex-row    mt-4">
                                <Typography
                                  variant="h6"
                                  className="flex items-center text-client-primary  text-[14px]    gap-2 cursor-pointer"
                                >
                                  <HandThumbUpIcon className="h-5 w-5" />
                                  Oui
                                </Typography>
                              </div>
                              <div className="flex items-center flex-row    mt-4">
                                <Typography
                                  variant="h6"
                                  className="flex items-center text-client-primary text-[14px]    gap-2 cursor-pointer"
                                >
                                  <HandThumbDownIcon className="h-5 w-5" />
                                  Non
                                </Typography>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </MainCard>
                  ))}
              </div>
            )}
          </div>
        </PageLayout>

        <div
          className="bg-cover bg-gradient-to-t relative from-[#2E3848] to-[#2e384880] bg-center mt-7 h-[800px] "
          style={{
            backgroundImage: `url(${RealisationImage.src})`,
          }}
        >
          <div className="absolute inset-0  bg-gradient-to-t from-[#2E3848] to-[#2e384880]">
            <div className="flex-col flex justify-center self-center items-center">
              <Typography className="font-bold   text-center text-[42px] text-white  py-20">
                Projets similaires
              </Typography>
              <Carousel
                className="rounded-xl w-[60%]"
                prevArrow={({ handlePrev }) => (
                  <IconButton
                    variant="text"
                    color="blue"
                    size="lg"
                    onClick={handlePrev}
                    className="!absolute top-2/4 left-4 -translate-y-2/4"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="h-6 w-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                      />
                    </svg>
                  </IconButton>
                )}
                nextArrow={({ handleNext }) => (
                  <IconButton
                    variant="text"
                    color="blue"
                    size="lg"
                    onClick={handleNext}
                    className="!absolute top-2/4 !right-4 -translate-y-2/4"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="h-6 w-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                      />
                    </svg>
                  </IconButton>
                )}
                navigation={({ setActiveIndex, activeIndex, length }) => (
                  <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                    {new Array(length).fill("").map((_, i) => (
                      <span
                        key={i}
                        className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                          activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                        }`}
                        onClick={() => setActiveIndex(i)}
                      />
                    ))}
                  </div>
                )}
              >
                {realisations?.data?.map((element, index) => (
                  <MainCard className="p-0 h-[500px]  rounded-xl flex flex-row">
                    <div className="flex flex-row">
                      <img
                        className=" w-[60%] object-cover  h-auto rounded-xl rounded-br-none rounded-tr-none "
                        src={`${backend}${element.images[0].image}`}
                        alt=""
                      />
                      <div className="flex flex-col  p-7">
                        <Typography className="font-bold   text-start text-[14px] text-client-primary ">
                          {element.style}
                        </Typography>
                        <Typography className="font-semibold   text-start text-[25px] mt-2 ">
                          {element.project_title}
                        </Typography>
                        <Typography className="font-bold    text-[14px] text-architect-secondary_text_color mt-10 w-[300px] ">
                          {element.description}
                        </Typography>
                      </div>
                    </div>
                  </MainCard>
                ))}

                {/* <MainCard className="p-0 h-[500px]  rounded-xl flex flex-row">
                  <div className="flex flex-row">
                    <img
                      className=" object-cover  h-auto rounded-xl rounded-br-none rounded-tr-none "
                      src={PhotoChambre.src}
                      alt=""
                    />
                    <div className="flex flex-col  p-7">
                      <Typography className="font-bold   text-start text-[14px] text-client-primary ">
                        Architecture intérieur
                      </Typography>
                      <Typography className="font-semibold   text-start text-[25px] mt-2 ">
                        Zen Urbain
                      </Typography>
                      <Typography className="font-bold    text-[14px] text-architect-secondary_text_color mt-10 w-[300px] ">
                        Et non omnis qui. Qui sunt deserunt dolorem aut velit
                        cumque adipisci aut enim. Nihil quis quisquam nesciunt
                        dicta nobis ab aperiam…
                      </Typography>
                    </div>
                  </div>
                </MainCard> */}
              </Carousel>
            </div>
          </div>
        </div>
        <MainCard className="w-full   p-32 pb-5">
          <div className="flex flex-row space-x-40  justify-center">
            <div className="flex flex-col">
              <img className=" w-[170px] " src={Archimatch.src} alt="" />
              <Typography className=" text-start text-[16px] mt-9 w-[280px]  text-[#667085]">
                Design amazing digital experiences that create more happy in the
                world.
              </Typography>
            </div>
            <div className="flex flex-col space-y-3">
              <Typography className=" text-start  font-semibold text-[17px] text-client-primary">
                Je suis Client
              </Typography>
              <Typography className=" text-start text-[16px] font-semibold  text-architect-secondary_text_color">
                Trouver un architect
              </Typography>
              <Typography className=" text-start text-[16px] font-semibold  text-architect-secondary_text_color">
                Gere mes projets
              </Typography>
              <Typography className=" text-start text-[16px] font-semibold  text-architect-secondary_text_color">
                Article de blog
              </Typography>
              <Typography className=" text-start text-[16px] font-semibold  text-architect-secondary_text_color">
                Guide client
              </Typography>
              <Typography className=" text-start text-[16px] font-semibold  text-architect-secondary_text_color">
                Contact & FAQ
              </Typography>
            </div>
            <div className="flex flex-col space-y-3">
              <Typography className=" text-start  font-semibold text-[17px] text-client-primary">
                Je suis Architect
              </Typography>
              <Typography className=" text-start text-[16px] font-semibold  text-architect-secondary_text_color">
                Rejoindre Archimatch{" "}
              </Typography>
              <Typography className=" text-start text-[16px] font-semibold  text-architect-secondary_text_color">
                Espace architect
              </Typography>
              <Typography className=" text-start text-[16px] font-semibold  text-architect-secondary_text_color">
                Mon compte
              </Typography>
              <Typography className=" text-start text-[16px] font-semibold  text-architect-secondary_text_color">
                Abonnement
              </Typography>
              <Typography className=" text-start text-[16px] font-semibold  text-architect-secondary_text_color">
                Guide architect
              </Typography>
              <Typography className=" text-start text-[16px] font-semibold  text-architect-secondary_text_color">
                Contact & FAQ
              </Typography>
            </div>
            <div className="flex flex-col space-y-3">
              <Typography className=" text-start  font-semibold text-[17px] text-client-primary">
                Rejoinnez nous
              </Typography>
              <Typography className=" text-start text-[16px] font-semibold  text-architect-secondary_text_color">
                Twitter{" "}
              </Typography>
              <Typography className=" text-start text-[16px] font-semibold  text-architect-secondary_text_color">
                LinkedIn
              </Typography>
              <Typography className=" text-start text-[16px] font-semibold  text-architect-secondary_text_color">
                Facebook
              </Typography>
              <Typography className=" text-start text-[16px] font-semibold  text-architect-secondary_text_color">
                Instagram
              </Typography>
            </div>
            <div className="flex flex-col space-y-3">
              <Typography className=" text-start  font-semibold text-[17px] text-client-primary">
                ArchiMatch{" "}
              </Typography>
              <Typography className=" text-start text-[16px] font-semibold  text-architect-secondary_text_color">
                A propos de nous{" "}
              </Typography>
              <Typography className=" text-start text-[16px] font-semibold  text-architect-secondary_text_color">
                CGU & CGV{" "}
              </Typography>
              <Typography className=" text-start text-[16px] font-semibold  text-architect-secondary_text_color">
                Protection des données
              </Typography>
            </div>
          </div>
          <div className="border-dashed border-t-2 w-full  mt-14 border-y-5 ">
            <div className="flex flex-row justify-between items-center self-end h-full ">
              <Typography className=" items-center text-start text-[17px] font-semibold  text-[#98A2B3] mt-4">
                © 2023 ArchiMatch. All rights reserved.
              </Typography>
              <div className="flex flex-row gap-3">
                <img className=" mt-4 w-[24px] " src={Tweeter.src} alt="" />
                <img className=" w-[24px]  mt-4 " src={Linkdin.src} alt="" />
                <img className=" w-[24px]  mt-4" src={Facebookk.src} alt="" />
                <img className=" w-[24px]  mt-4" src={Twitch.src} alt="" />
              </div>
            </div>
          </div>
        </MainCard>
      </>
    );
};

export default ClientRealisationArchitectePage;
