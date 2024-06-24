"use client";
import Archi from "@/assets/Archi.svg";
import AvatarArchi from "@/assets/AvatarArchi.svg";
import Chaise from "@/assets/Chaise.svg";
import LogoProfileArchi from "@/assets/LogoProfileArchi.svg";
import Person from "@/assets/Person.svg";
import Virgule from "@/assets/Virgule.svg";
import { MainCard, PageLayout } from "@/components";
import { useAddCommentMutation, useFetchData } from "@/services/queries";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  ChevronRightIcon,
  EnvelopeIcon,
  HandThumbDownIcon,
  HandThumbUpIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import {
  Avatar,
  Button,
  Carousel,
  IconButton,
  Spinner,
  Typography,
} from "@material-tailwind/react";
import Cookies from "js-cookie";

import { usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";
const ClientProfilArchitectePage = () => {
  // const formik = useFormik({
  //   initialValues: {
  //     message: "",
  //   },

  //   validationSchema: Yup.object({
  //     message: Yup.string().required("Le message est requis"),
  //   }),

  //   onSubmit: (values) => {
  //     console.log("form submitted");
  //     console.log(values);
  //     setShowPopup2(!showPopup2);
  //     addComment();
  //   },
  // });
  const cookiesdata = Cookies.get("id");
  const backend = "http://localhost:8000";
  const pathname = usePathname();
  const router = useRouter();
  const {
    data: architect,
    isLoading,
    isFetching,
    isPending,
    isSuccess,
  } = useFetchData(
    `/archimatch_app/architect/${pathname.split("/")[3]}`,
    "architect",
  );
  const [showPopup, setShowPopup] = useState(false);
  const togglePopup = () => {
    setShowPopup(!showPopup);
  };
  const [showPopup2, setShowPopup2] = useState(false);
  const togglePopup2 = () => {
    setShowPopup2(!showPopup2);
  };

  const addCommentMutation = useAddCommentMutation("", {});

  // const addComment = () => {
  //   addCommentMutation.mutate({
  //     architect_id: architect.data.id,
  //     client_id: cookiesdata,
  //     message: formik.values.message,
  //   });
  //   formik.setValues("message", "");
  // };
  const [active, setActive] = React.useState(1);

  const getItemProps = (index) => ({
    variant: active === index ? "filled" : "text",
    color: "blue",
    onClick: () => setActive(index),
  });

  const next = () => {
    if (active === 4) return;

    setActive(active + 1);
  };

  const prev = () => {
    if (active === 1) return;

    setActive(active - 1);
  };

  if (isLoading) {
    return <Spinner></Spinner>;
  } else
    return (
      <>
        <div className="w-full h-52 flex items-end justify-end  rounded-t-md bg-[#d0efff] opacity-65 ">
          <img className=" cursor-pointer  w-[600px]  " src={Archi.src} />
        </div>

        <PageLayout className="p-10 ">
          <div className=" max-w-screen-2xl     w-full m-auto">
            <div className="flex flex-row max-w-screen-2xl justify-between    w-full m-auto">
              <div className="flex flex-row ">
                <div className="mt-[-200px]  z-50 w-[350px]   rounded-full">
                  <img
                    className="cursor-pointer rounded-full object-cover object-center h-full self-start"
                    src={
                      architect?.data?.company_logo
                        ? architect.data.company_logo.includes("http")
                          ? architect.data.company_logo
                          : `${backend}${architect.data.company_logo}`
                        : LogoProfileArchi.src
                    }
                  />
                </div>
                <div className="flex flex-col  justify-start self-start  ">
                  <Typography className="font-extrabold text-[28px] text-architect-font_gris ">
                    Architecte
                  </Typography>
                  <Typography className="  text-[22px] text-client-primary mt-2 ">
                    {architect.data.arch_type.display}
                  </Typography>
                </div>
              </div>
              {/* <div className="flex flex-col ">
                <Button
                  type="submit"
                  size="sm"
                  className=" w-[300px] text-[16px] font-bold self-center flex items-center justify-center   "
                  onClick={togglePopup2}
                >
                  Laisser un avis
                </Button>
                <Button
                  type="submit"
                  size="sm"
                  className=" w-full self-center text-[15px] font-bold flex items-center justify-center    mt-2 "
                  variant="outlined"
                  onClick={togglePopup}
                >
                  Signaler
                </Button>
              </div> */}
            </div>
            <div className="flex flex-row max-w-screen-2xl justify-between w-full m-auto gap-28 mt-16">
              <div className="flex flex-col w-full ">
                <Typography className="font-semibold text-[19px]">
                  Biographie
                </Typography>

                <Typography className=" text-[19px] mt-5">
                  {architect.data.bio}
                </Typography>

                <Typography className="font-semibold text-[19px] mt-5">
                  Présentation vidéo
                </Typography>

                <video
                  className="h-full w-full  p-2 rounded-md overflow-hidden cursor-pointer"
                  controls
                >
                  <source
                    src={
                      architect?.data?.video_presentation
                        ? architect.data.video_presentation?.includes("http")
                          ? architect.data.video_presentation
                          : `${backend}${architect.data.video_presentation}`
                        : ""
                    }
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="flex flex-col   gap-4  ">
                <MainCard className="!px-0 hidden xl:flex  self-start mt-6 border-2">
                  <div className="p-4 px-20 w-96 flex-row flex justify-between">
                    <div className="flex-col flex">
                      <Typography className="font-extrabold text-center  text-[24px]  ">
                        {architect.data.realisations.length}
                      </Typography>
                      <Typography className="text-architect-secondary_text_color text-[15px] text-center">
                        projets
                      </Typography>
                    </div>
                    <div className="border-dashed border-r-2   border-x-2  ml-11 "></div>
                    <div className="flex-col flex  ml-6">
                      <Typography className="font-extrabold text-center text-[24px]  ">
                        50
                      </Typography>
                      <Typography className="text-architect-secondary_text_color text-[15px] text-center">
                        clients satisfaits
                      </Typography>
                    </div>
                  </div>
                </MainCard>
                <MainCard className="!px-0 hidden xl:flex relative self-start border-2 border-dotted border-gray-400">
                  <div className="flex flex-col w-96 ">
                    <div className="p-4 px-9">
                      <div className=" gap-6 self-center md:max-w-[400px]  ">
                        <div className="flex justify-start  gap-4">
                          <Avatar
                            variant="circular"
                            className="h-[50px] w-[50px] "
                            src={
                              architect?.data?.architect_avatar
                                ? architect.data.architect_avatar.includes(
                                    "http",
                                  )
                                  ? architect.data.architect_avatar
                                  : `${backend}${architect.data.architect_avatar}`
                                : AvatarArchi.src
                            }
                            alt="avatar"
                          />
                          <div className="self-end">
                            <Typography
                              variant="h6"
                              className="font-bold  text-[20px] mb-2 "
                            >
                              {`${architect.data.user.first_name} ${architect.data.user.last_name}`}
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
                                {architect.data.user.email}
                              </Typography>
                            </div>
                            <Button
                              type="submit"
                              size="sm"
                              className="   flex items-center justify-center gap-2 "

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
                            {architect.data.user.phone_number}
                          </Typography>
                        </div>
                      </div>
                    </div>
                  </div>
                </MainCard>
                <MainCard className="!px-0 hidden xl:flex flex-col self-start border-2 ">
                  <div className="p-4 px-9 w-96">
                    <div className="flex flex-col">
                      <Typography className="font-bold text-[19px]  text-architect-dark_blue mt-4 ">
                        Les services
                      </Typography>
                      <Typography className=" text-[15px]  text-architect-secondary_text_color  ">
                        Services requis pour le projet :
                      </Typography>
                    </div>
                    <div className="flex flex-col space-y-3 mt-6">
                      {architect.data.services.map((element, index) => (
                        <div className="flex  flex-row   items-center gap-3  ">
                          <img
                            className=" cursor-pointer  w-[45px]  flex items-center text-client-primary fill-current- "
                            src={Chaise.src}
                          />
                          <Typography className=" text-[14px] self-center ">
                            {element.display}
                          </Typography>
                        </div>
                      ))}
                      {/* <div className="flex  flex-row   items-center gap-3  ">
                        <img
                          className=" cursor-pointer  w-[45px]  flex items-center text-client-primary fill-current- "
                          src={Peinture.src}
                        />
                        <Typography className=" text-[14px] self-center ">
                          Choisir les couleurs et les matériaux
                        </Typography>
                      </div>
                      <div className="flex  flex-row   items-center gap-3  ">
                        <img
                          className=" cursor-pointer  w-[45px]  flex items-center text-client-primary fill-current- "
                          src={MaisonArch.src}
                        />
                        <Typography className=" text-[14px] self-center ">
                          Créer un design moderne et fonctionnel
                        </Typography>
                      </div> */}
                    </div>
                  </div>
                </MainCard>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="lg:grid lg:grid-cols-2 flex flex-col  gap-6  mt-8">
                {architect.data.realisations.map((element, index) => (
                  <MainCard className="flex flex-col md:w-[650px] w-full p-4">
                    <div className=" gap-6  md:max-w-[400px]  ">
                      <div className="flex justify-start  gap-4">
                        <Avatar
                          variant="circular"
                          className="h-[50px] w-[50px] "
                          src={
                            architect?.data?.architect_avatar
                              ? architect.data.architect_avatar.includes("http")
                                ? architect.data.architect_avatar
                                : `${backend}${architect.data.architect_avatar}`
                              : AvatarArchi.src
                          }
                          alt="avatar"
                        />
                        <div className="self-end">
                          <Typography
                            variant="h6"
                            className="font-bold  text-[18px] mb-2 "
                          >
                            {`${architect.data.user.first_name} ${architect.data.user.last_name}`}
                          </Typography>
                        </div>
                      </div>
                    </div>

                    <Carousel
                      transition={{ duration: 1 }}
                      className="rounded-xl mt-2  "
                    >
                      {element.images.map((item, index) => (
                        <img
                          src={`${backend}${item.image}`}
                          alt="image 1"
                          className="relative h-[350px] w-full  rounded-xl object-cover object-center"
                        />
                      ))}
                    </Carousel>
                    <Typography
                      variant="paragraph"
                      className="text-architect-dark_blue text-[18px] font-bold mt-2  "
                    >
                      {element.project_title}
                    </Typography>
                    <div className="flex flex-row  justify-between  items-center mt-1">
                      <div className="flex items-center ">
                        <Typography
                          variant="h6"
                          className="text-client-primary flex items-center text-[15px]  font-bold  gap-1 cursor-pointer"
                          onClick={() =>
                            router.push(
                              `/clientVisitor/RealisationArchitecte/${element.id}`,
                            )
                          }
                        >
                          Consulter projet
                          <ChevronRightIcon className="h-5 w-5" />
                        </Typography>
                      </div>
                    </div>
                  </MainCard>
                ))}

                {/* <MainCard className="flex flex-col md:w-[650px] w-full">
                  <div className=" gap-6  md:max-w-[400px]  ">
                    <div className="flex justify-start  gap-4">
                      <Avatar
                        className="h-[50px] w-[50px] "
                        src={AvatarArchi.src}
                        alt="avatar"
                      />
                      <div className="self-end">
                        <Typography
                          variant="h6"
                          className="font-bold  text-[18px] mb-2 "
                        >
                          Alex Jones
                        </Typography>
                      </div>
                    </div>
                  </div>
                  <Carousel className="rounded-xl mt-2 ">
                    <img
                      src={ImageProfileTwo.src}
                      alt="image 1"
                      className="relative h-[350px] w-full  rounded-xl object-cover object-center"
                    />
                  </Carousel>
                  <Typography
                    variant="paragraph"
                    className="text-architect-dark_blue text-[18px] font-bold mt-2  "
                  >
                    Standard house
                  </Typography>
                  <div className="flex flex-row  justify-between  items-center mt-1">
                    <div className="flex items-center ">
                      <Typography
                        variant="h6"
                        className="text-client-primary flex items-center text-[15px]  font-bold  gap-1 cursor-pointer"
                      >
                        Consulter projet
                        <ChevronRightIcon className="h-5 w-5" />
                      </Typography>
                    </div>
                  </div>
                </MainCard>
              </div>
              <div className="flex lg:flex-row flex-col items-center justify-between flex-wrap   lg:space-y-0 space-y-5 lg:space-x-5 mt-5">
                <MainCard className="flex flex-col md:w-[650px] w-full">
                  <div className=" gap-6  md:max-w-[400px]  ">
                    <div className="flex justify-start  gap-4">
                      <Avatar
                        className="h-[50px] w-[50px] "
                        src={AvatarArchi.src}
                        alt="avatar"
                      />
                      <div className="self-end">
                        <Typography
                          variant="h6"
                          className="font-bold  text-[18px] mb-2 "
                        >
                          Alex Jones
                        </Typography>
                      </div>
                    </div>
                  </div>
                  <Carousel className="rounded-xl mt-2 ">
                    <img
                      src={ImageProfileThree.src}
                      alt="image 1"
                      className="relative h-[350px] w-full  rounded-xl object-cover object-center"
                    />
                  </Carousel>
                  <Typography
                    variant="paragraph"
                    className="text-architect-dark_blue text-[18px] font-bold mt-2  "
                  >
                    Standard house
                  </Typography>
                  <div className="flex flex-row  justify-between  items-center mt-1">
                    <div className="flex items-center ">
                      <Typography
                        variant="h6"
                        className="text-client-primary flex items-center text-[15px]  font-bold  gap-1 cursor-pointer"
                      >
                        Consulter projet
                        <ChevronRightIcon className="h-5 w-5" />
                      </Typography>
                    </div>
                  </div>
                </MainCard>

                <MainCard className="flex flex-col md:w-[650px] w-full">
                  <div className=" gap-6  md:max-w-[400px]  ">
                    <div className="flex justify-start  gap-4">
                      <Avatar
                        className="h-[50px] w-[50px] "
                        src={AvatarArchi.src}
                        alt="avatar"
                      />
                      <div className="self-end">
                        <Typography
                          variant="h6"
                          className="font-bold  text-[18px] mb-2 "
                        >
                          Alex Jones
                        </Typography>
                      </div>
                    </div>
                  </div>
                  <Carousel className="rounded-xl mt-2 ">
                    <img
                      src={ImageProfileFourth.src}
                      alt="image 1"
                      className="relative h-[350px] w-full  rounded-xl object-cover object-center"
                    />
                  </Carousel>
                  <Typography
                    variant="paragraph"
                    className="text-architect-dark_blue text-[18px] font-bold mt-2  "
                  >
                    Standard house
                  </Typography>
                  <div className="flex flex-row  justify-between  items-center mt-1">
                    <div className="flex items-center ">
                      <Typography
                        variant="h6"
                        className="text-client-primary flex items-center text-[15px]  font-bold  gap-1 cursor-pointer"
                      >
                        Consulter projet
                        <ChevronRightIcon className="h-5 w-5" />
                      </Typography>
                    </div>
                  </div>
                </MainCard> */}
              </div>
            </div>
            <div className="flex items-center self-center gap-4  justify-center mt-11">
              <Typography
                className="flex items-center gap-2"
                onClick={prev}
                disabled={active === 1}
              >
                <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" />
              </Typography>
              <div className="flex items-center gap-2">
                <IconButton className="rounded-full " {...getItemProps(1)}>
                  1
                </IconButton>
                <IconButton className="rounded-full " {...getItemProps(2)}>
                  2
                </IconButton>
                <IconButton className="rounded-full " {...getItemProps(3)}>
                  3
                </IconButton>
                <IconButton className="rounded-full " {...getItemProps(4)}>
                  4
                </IconButton>
              </div>
              <Typography
                className="flex items-center gap-2"
                onClick={next}
                disabled={active === 4}
              >
                <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
              </Typography>
            </div>
          </div>
        </PageLayout>
        <div className="flex flex-col  mt-9 space-y-5  ">
          {architect &&
            architect.data.comments.length > 0 &&
            architect.data.comments.map((element, index) => (
              <div className="  max-w-screen-2xl flex  self-center  border-gray-300 p-[16px]  relative w-full  ">
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
                          {new Date(element?.created_at).toLocaleDateString()}
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
              </div>
            ))}
        </div>
      </>
    );
};

export default ClientProfilArchitectePage;
