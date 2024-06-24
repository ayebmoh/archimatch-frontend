"use client";
import ArchContr from "@/assets/ArchContr.svg";
import Facebook from "@/assets/Facebook.svg";
import Inn from "@/assets/Inn.svg";
import Insta from "@/assets/Insta.svg";
import Link from "@/assets/Link.svg";
import Medaille from "@/assets/Medaille.svg";
import Qr from "@/assets/Qr.svg";
import Upgade from "@/assets/Upgade.svg";
import Video from "@/assets/Video.svg";
import AvatarPhoto from "@/assets/avatar.svg";
import Background from "@/assets/background.svg";
import Bronze from "@/assets/bronze.svg";
import Silver from "@/assets/silver.svg";
import { MainCard, PageLayout, Popup } from "@/components";
import { Chip } from "@/components/RemoteComponents";
import { CardSkeleton, TypographySkeleton } from "@/components/cards";
import { useFetchData, useViewavatar } from "@/services/queries";

import {
  EnvelopeIcon,
  EyeIcon,
  MapPinIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import { BoltIcon } from "@heroicons/react/24/solid";
import { Avatar, Button, Progress, Typography } from "@material-tailwind/react";
import Cookies from "js-cookie";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
const architectProfilePage = (props) => {
  const backend = "http://localhost:8000";
  const medals = {
    silver: Silver,
    bronze: Bronze,
    gold: Medaille,
  };
  const [activeMedal, setActiveMedal] = useState();
  const router = useRouter();
  const cookiesdata = Cookies.get("id");
  const [badge, setBadge] = useState();
  const [metrics, setMetrics] = useState();
  const { data: avatar, isloading } = useViewavatar(cookiesdata);

  const [steps, setSteps] = useState();
  const { data: architect, isLoading } = useFetchData(
    `/archimatch_app/architect/find_architect_by_user/${cookiesdata}/`,
    "architect",
  );
  console.log(architect);
  const [showPopup, setShowPopup] = useState(false);
  const [checkboxState, setCheckboxState] = useState({
    DecoInterr: false,
    Chantierr: false,
    Construiree: false,
    DocTechh: false,
    Peinturee: false,
    Autree: false,
  });

  const handleChangeBadge = () => {
    let number = 0;
    Object.entries(metrics).forEach(([key, value]) => {
      if (value) {
        number = number + 1;
      }
    });
    setBadge({
      level: handleLevel((number / 5) * 100 + 20),
      progress: (number / 5) * 100 + 20,
    });
    setSteps(number + 1);
  };

  const handleLevel = (number) => {
    if (number === 20) {
      return "vide";
    }
    if (number === 40) {
      return "Debutant";
    }
    if (number === 60) {
      setActiveMedal(medals.bronze);
      return "Intermidiaire";
    }
    if (number === 80) {
      setActiveMedal(medals.silver);
      return "Avencé";
    }
    if (number === 100) {
      setActiveMedal(medals.gold);
      return "Complet";
    }
  };

  useEffect(() => {
    if (architect) {
      setMetrics({
        bio: architect.data.architect.bio,
        logo: architect.data.architect.architect_avatar,
        video: architect.data.architect.video_presentation,
        services: architect.data.architect.services.length,
      });
    }
  }, [architect]);

  useEffect(() => {
    if (metrics) {
      handleChangeBadge();
      console.log(metrics);
    }
  }, [metrics]);
  useEffect(() => {
    if (metrics) {
      console.log(badge);
    }
  }, [badge]);

  const toggleCheckbox = (checkboxName) => {
    setCheckboxState({
      ...checkboxState,
      [checkboxName]: !checkboxState[checkboxName],
    });
  };
  const togglePopup = () => {
    setShowPopup(!showPopup);
  };
  const { children } = props;
  return (
    <PageLayout className="">
      <Image
        alt="hero image"
        className=" w-full"
        src={Background}
        priority={true}
      />

      <div className="flex flex-row max-w-screen-2xl m-auto gap-3 mt-[-50px] items-start ">
        <div className="flex flex-col gap-6  ">
          <MainCard className=" hidden xl:flex items-start justify-center px-8 ">
            {isLoading ? (
              <CardSkeleton className="w-full" />
            ) : (
              <div className="flex flex-col w-full">
                <div className="p-4">
                  {/* <Chip
                    className="  w-[55px] rounded-2xl  border-0  flex items-center justify-start text-[#ffffff] bg-[#f3ac50] "
                    value=" 5.0"
                    icon={<StarIcon className=" h-4 w-4   " />}
                    //disabled={isLoading}
                  ></Chip> */}
                  <div className="flex flex-col justify-center items-center">
                    <img
                      className=" cursor-pointer flex items-center"
                      src={
                        architect?.data?.architect?.company_logo
                          ? architect.data.architect?.company_logo.includes(
                              "http",
                            )
                            ? architect.data.architect?.company_logo
                            : `${backend}${architect.data.architect?.company_logo}`
                          : ArchContr.src
                      }
                    />
                    <Typography className=" text-[16px] text-center text-architect-dark_blue font-bold mt-2">
                      {`${architect.data.architect?.company_name}`}
                    </Typography>
                    <Typography className=" text-[14px] text-blue-500  text-center font-normal mt-1">
                      {`${architect?.data?.architect?.arch_type.display}`}
                    </Typography>

                    <div className="flex items-center justify-center mt-1">
                      <Typography
                        variant="h6"
                        className=" flex items-center text-[14px] mb-5 font-normal  gap-1"
                      >
                        <MapPinIcon className="h-5 w-5" />
                        {`${architect.data.architect.adress}`}
                      </Typography>
                    </div>
                  </div>
                  <Button
                    type="submit"
                    size="sm"
                    className=" w-full  self-center flex items-center justify-center   "
                    onClick={() => router.push("/architect/Parametre")}
                  >
                    Modifier votre profil
                  </Button>
                  <Button
                    type="submit"
                    size="sm"
                    className=" w-full self-center flex items-center justify-center    mt-2 "
                    variant="outlined"
                    onClick={togglePopup}
                  >
                    Partager votre profil
                  </Button>

                  <div className="border-2  border-gray-100 rounded-xl border-solid mt-6 ">
                    <div className="flex flex-col justify-center items-center">
                      <div className="flex justify-center  self-center mt-4 ">
                        {isloading || isLoading ? (
                          <Spinner />
                        ) : (
                          <Avatar
                            className="h-[50px] w-[50px]"
                            src={
                              architect?.data?.architect?.architect_avatar
                                ? architect.data.architect?.architect_avatar.includes(
                                    "http",
                                  )
                                  ? architect.data.architect?.architect_avatar
                                  : `${backend}${architect.data.architect?.architect_avatar}`
                                : AvatarPhoto.src
                            }
                            alt="avatar"
                          />
                        )}
                      </div>
                      <Typography className=" text-[14px] text-center font-semibold mt-2">
                        {`${architect.data.architect.user.first_name} ${architect.data.architect.user.last_name}`}
                      </Typography>
                      <div className=" flex flex-row items-center p-[8px] gap-2 w-[85%] mt-2">
                        <EnvelopeIcon className="h-6 w-6 text-architect-secondary_text_color " />
                        <Typography className=" text-[15px]">
                          {" "}
                          {`${architect.data.architect.user.email.substring(
                            0,
                            3,
                          )}***${architect.data.architect.user.email.substring(
                            architect.data.architect.user.email.indexOf("@"),
                          )}`}
                        </Typography>
                      </div>{" "}
                      <div className="flex flex-row items-center p-[8px] gap-3 w-[85%]  ">
                        <PhoneIcon className="h-6 w-6 text-architect-secondary_text_color " />
                        <Typography className=" text-[15px]">
                          {" "}
                          {`${architect.data.architect.user.phone_number}`}
                        </Typography>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between flex-row mt-4 ">
                    <Typography className="  text-[13px] ">
                      Nombre des projets
                    </Typography>
                    <Typography className=" text-architect-main_blue  font-extrabold  text-[15px] ">
                      {`${architect.data.architect.realisations.length}`}
                    </Typography>
                  </div>
                  <div className="flex justify-between flex-row mt-2 ">
                    <Typography className="  text-[13px] ">
                      nombre de clients satisfaits
                    </Typography>
                    <Typography className="text-architect-main_blue font-extrabold   text-[15px] ">
                      50
                    </Typography>
                  </div>
                </div>
                <Popup
                  open={showPopup}
                  handleOpen={setShowPopup}
                  size="sm"
                  className=""
                  bodyClassName="flex flex-col items-center"
                >
                  <div className="flex flex-col">
                    <div className="flex flex-col shadow-lg items-center justify-center rounded-lg">
                      <img
                        className=" cursor-pointer flex items-center  w-[200px]   "
                        src={Qr.src}
                      />
                      <Typography className="font-bold text-architect-dark_blue flex justify-center text-[17px] ">
                        @ Alexjones
                      </Typography>
                    </div>
                    <div className="flex flex-row items-center space-x-3 justify-center mt-3">
                      <MainCard className=" flex flex-col space-y-2 h-[55px] items-center justify-center shadow-lg rounded-lg">
                        <img
                          className=" cursor-pointer flex items-center"
                          src={Link.src}
                        />
                        <Typography className="font-semibold text-architect-dark_blue flex justify-center  text-[12px] ">
                          Copier le lien
                        </Typography>
                      </MainCard>
                      <MainCard className="   items-center shadow-lg justify-center rounded-lg">
                        <img
                          className=" cursor-pointer flex items-center"
                          src={Insta.src}
                        />
                      </MainCard>
                      <MainCard className="items-center shadow-lg justify-center rounded-lg">
                        <img
                          className=" cursor-pointer flex items-center  "
                          src={Facebook.src}
                        />
                      </MainCard>
                      <MainCard className=" basis-0 flex-grow items-center shadow-lg justify-center rounded-lg">
                        <img
                          className=" cursor-pointer flex items-center"
                          src={Inn.src}
                        />
                      </MainCard>
                    </div>
                  </div>
                </Popup>
              </div>
            )}
          </MainCard>
          {!architect?.data?.architect?.subscription ? null : (
            <>
              <div className=" lg:w-[80%]  w-full mb-[-180px] z-50 flex items-center justify-center self-center ">
                <img
                  className=" hidden xl:flex cursor-pointer  py-0.5  "
                  src={Upgade.src}
                />
              </div>
              <MainCard className=" pt-44 hidden xl:flex items-start flex-col  justify-center px-8 bg-[#e7f0ff]">
                <Button
                  type="submit"
                  size="sm"
                  className=" self-center flex items-center bg-[#344054] justify-center gap-2 cursor-pointer "
                  onClick={() =>
                    router.push("/architect/Parametre/GestionAbonnement")
                  }
                >
                  <BoltIcon className="h-6 w-6" />
                  Upgrade plan
                </Button>
                <Typography className="w-[260px] text-center  text-[15px] mt-3 ">
                  upgrade plan pour une expérience améliorée dès maintenant !
                </Typography>
              </MainCard>{" "}
            </>
          )}
        </div>
        <div className="flex flex-col gap-6 w-full px-6 ">
          <MainCard className="w-full self-start px-6">
            {isLoading ? (
              <div className="flex flex-row ">
                <TypographySkeleton />
                <TypographySkeleton />
                <TypographySkeleton />
              </div>
            ) : (
              <>
                {" "}
                <div className=" items-start  rounded-md flex  justify-between  flex-row  ">
                  <div className="flex flex-col">
                    <Typography className="font-semibold  text-[22px] ">
                      Suggestions personnalisées
                    </Typography>
                    <div className="flex items-center ">
                      <Typography
                        variant="h6"
                        className="text-architect-secondary_text_color flex items-center text-[15px]  font-normal  gap-1"
                      >
                        <EyeIcon className="h-5 w-5" />
                        Privé pour vous
                      </Typography>
                    </div>
                  </div>
                </div>
                <div className="flex  flex-row  items-center gap-2   mt-3">
                  <Typography
                    className=" font-semibold text-[17px] 
                  "
                  >
                    {badge?.level}
                  </Typography>
                  {badge?.progress > 40 && (
                    <img
                      className=" cursor-pointer flex items-center  w-[35px]   "
                      src={activeMedal.src}
                    />
                  )}
                </div>
                <div className=" items-center rounded-md flex flex-col gap-2 lg:flex-row mt-1 ">
                  <Progress
                    value={badge?.progress}
                    size="md"
                    color={"red"}
                    className="   w-full"
                  />
                  <Typography className="hidden lg:flex font-semibold text-architect-secondary_text_color text-[15px]  ">
                    {steps && `${steps}/5`}
                  </Typography>
                </div>
                <div className="flex  flex-row gap-1 mt-1">
                  <Typography className="  text-[15px] ">
                    Compléter votre profil pour atteindre le niveau
                  </Typography>
                  <Typography className="text-client-primary font-extrabold  text-[15px] ">
                    {badge?.level}
                  </Typography>
                </div>
                <div className="flex flex-row flex-wrap gap-2 mt-3  items-center">
                  {!metrics?.bio && (
                    <div className="min-w-[280px]  border-2 border-solid border-slate-400 rounded-lg p-4  bg-[#FAFBFF] ">
                      <div className=" items-start   flex flex-col justify-between  lg:flex-row  ">
                        <Typography className="font-semibold  text-[12px] ">
                          Présentez brièvement
                        </Typography>
                        <Chip
                          className="   md:text-[10px] text-[10px] h-[27px] lg:w-[90px] w-[90px] border-0  flex items-center justify-center text-[#637381] bg-architect-secondary_text_color bg-opacity-15"
                          value=" à compléter"

                          //disabled={isLoading}
                        ></Chip>
                      </div>
                      <Typography className=" text-architect-secondary_text_color text-[12px] mt-2 w-[225px] ">
                        Les profils comportant un résumé attirent jusqu'à 3,9
                        fois plus de vues.
                      </Typography>
                      <Button
                        type="submit"
                        size="sm"
                        className="     flex items-center justify-center mt-3  "
                        variant="outlined"
                        color="architect-font_gris"
                        onClick={() => router.push("/architect/Parametre")}
                      >
                        Ajouter un résumé
                      </Button>
                    </div>
                  )}
                  {!metrics?.services && (
                    <div className="min-w-[280px]  border-2 border-solid border-slate-400 rounded-lg p-4  bg-[#FAFBFF] ">
                      <div className=" items-start   flex flex-col justify-between  lg:flex-row  ">
                        <Typography className="font-semibold  text-[12px] ">
                          Quels sont vos services
                        </Typography>
                        <Chip
                          className="   md:text-[10px] text-[10px] h-[27px] lg:w-[90px] w-[90px] border-0  flex items-center justify-center text-[#637381] bg-architect-secondary_text_color bg-opacity-15"
                          value=" à compléter"

                          //disabled={isLoading}
                        ></Chip>
                      </div>
                      <Typography className=" text-architect-secondary_text_color text-[12px] mt-2 w-[225px] ">
                        Les profils détaillant ces services suscitent jusqu'à
                        3,9 fois plus d'intérêt
                      </Typography>
                      <Button
                        type="submit"
                        size="sm"
                        className="     flex items-center justify-center mt-3  "
                        variant="outlined"
                        color="architect-font_gris"
                        onClick={() => router.push("/architect/Parametre")}
                      >
                        Ajouter les services
                      </Button>
                    </div>
                  )}
                  {!metrics?.logo && (
                    <div className="min-w-[280px]  border-2 border-solid border-slate-400 rounded-lg p-4  bg-[#FAFBFF] ">
                      <div className=" items-start   flex flex-col justify-between  lg:flex-row  ">
                        <Typography className="font-semibold mt-2 text-[12px] ">
                          Ajoutez une photo de profil
                        </Typography>
                        <Chip
                          className=" ml-2 md:text-[10px] text-[10px] h-[27px] lg:w-[90px] w-[90px] border-0  flex items-center justify-center text-[#637381] bg-architect-secondary_text_color bg-opacity-15"
                          value=" à compléter"

                          //disabled={isLoading}
                        ></Chip>
                      </div>
                      <Typography className=" text-architect-secondary_text_color text-[12px] mt-2 w-[225px] ">
                        Ajoutez une photo de profil pour être plus facilement
                        reconnu.
                      </Typography>
                      <Button
                        type="submit"
                        size="sm"
                        className="     flex items-center justify-center mt-3  "
                        variant="outlined"
                        color="architect-font_gris"
                        onClick={() => router.push("/architect/Parametre")}
                      >
                        Ajouter une photo
                      </Button>
                    </div>
                  )}
                </div>
              </>
            )}
          </MainCard>
          <MainCard className="w-full ">{children}</MainCard>
          <MainCard className="w-full mb-20 ">
            <div className="flex flex-col lg:flex-row basis-0 flex-grow p-2">
              <img
                className="w-[300px] cursor-pointer py-0.5  "
                src={Video.src}
              />
              <div className="flex flex-col ">
                <Typography className=" text-architect-dark_blue text-[30px] font-semibold ">
                  Notre Expertise en Marque à Votre Service
                </Typography>
                <Typography className=" text-architect-secondary_text_color text-[17px] mt-4 ">
                  Découvrez notre savoir-faire dédié aux architectes : Une
                  vision unique de votre identité professionnelle mise en
                  lumière. Laissez nos experts capturer l'essence de votre
                  marque architecturale
                </Typography>
                <div className="flex flex-col mt-8 px-10 ">
                  <div className="flex items-center ">
                    <Typography
                      variant="h6"
                      className="text-architect-secondary_text_color flex items-center text-[15px]  font-normal  gap-3"
                    >
                      <span className="text-architect-primary text-2xl">
                        &#x2022;
                      </span>
                      Rectifier l’identité visuelle de l’architecte
                    </Typography>
                  </div>
                  <div className="flex items-center ">
                    <Typography
                      variant="h6"
                      className="text-architect-secondary_text_color flex items-center text-[15px]  font-normal  gap-3"
                    >
                      <span className="text-architect-primary text-2xl">
                        &#x2022;
                      </span>
                      accompagnement pour alimenter votre profil
                    </Typography>
                  </div>
                  <div className="flex items-center ">
                    <Typography
                      variant="h6"
                      className="text-architect-secondary_text_color flex items-center text-[15px]  font-normal  gap-3"
                    >
                      <span className="text-architect-primary text-2xl">
                        &#x2022;
                      </span>
                      montage des vidéos et des photo pour 5 réalisations
                    </Typography>
                  </div>
                  <div className="flex items-center ">
                    <Typography
                      variant="h6"
                      className="text-architect-secondary_text_color flex items-center text-[15px]  font-normal  gap-3"
                    >
                      <span className="text-architect-primary text-2xl">
                        &#x2022;
                      </span>
                      Interview de présentation
                    </Typography>
                  </div>
                  <div className="flex items-center ">
                    <Typography
                      variant="h6"
                      className="text-architect-secondary_text_color flex items-center text-[15px]  font-normal  gap-3"
                    >
                      <span className="text-architect-primary text-2xl">
                        &#x2022;
                      </span>
                      support et accompagnement
                    </Typography>
                  </div>
                  <Button
                    type="submit"
                    size="md"
                    className=" self-start  flex items-center justify-center gap-2 mt-7"

                    //disabled={isLoading}
                  >
                    Demander une démo
                  </Button>
                </div>
              </div>
            </div>
          </MainCard>
        </div>
      </div>
    </PageLayout>
  );
};

export default architectProfilePage;
