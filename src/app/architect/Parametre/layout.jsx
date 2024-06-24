"use client";

import AvatarPhoto from "@/assets/avatar.svg";
import Friends from "@/assets/Friends.svg";
import GiftBlack from "@/assets/GiftBlack.svg";
import JetonBlue from "@/assets/JetonBlue.svg";
import JetonRouge from "@/assets/JetonRouge.svg";
import Queen from "@/assets/Queen.svg";
import { MainCard, PageLayout } from "@/components";
import {
  useFindArchi,
  useUpdateArchiProfilPic,
  useViewavatar,
} from "@/services/queries";
import { cn } from "@/utils";
import {
  AdjustmentsHorizontalIcon,
  ArrowRightEndOnRectangleIcon,
  BuildingOfficeIcon,
  Cog6ToothIcon,
  CreditCardIcon,
  CurrencyDollarIcon,
  DocumentTextIcon,
  LockClosedIcon,
  PencilSquareIcon,
  UserIcon,
  WalletIcon,
} from "@heroicons/react/24/outline";
import { Avatar, Button, Spinner, Typography } from "@material-tailwind/react";
import Cookies from "js-cookie";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
const architectParametrePage = (props) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [Loading, setIsLoading] = useState(false);
  const [avatarUrl, setAvatarUrl] = useState("");
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const pathname = usePathname();
  const router = useRouter();
  const { children } = props;
  const [index, setIndex] = useState(0);
  const cookiesdata = Cookies.get("id");
  const { data: architect, isLoading } = useFindArchi(cookiesdata);
  const { data: avatar, isloading } = useViewavatar(cookiesdata);
  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const PdpMutation = useUpdateArchiProfilPic("", {});

  const handlePP = async (file) => {
    try {
      const formData = new FormData(); // Create a FormData object
      formData.append("id", cookiesdata); // Append the user ID
      formData.append("architect_avatar", file); // Append the selected file

      const response = await PdpMutation.mutateAsync(formData); // Send the FormData to the API

      console.log("Profile Picture Updated successfully", response);
    } catch (error) {
      console.error("Error updating Profile Picture:", error);
    }
  };
  return (
    <PageLayout className="p-10">
      <MainCard className=" max-w-screen-xl m-auto p-10 ">
        <div className="flex flex-col  ">
          <Typography className="font-semibold text-[25px]">
            Paramètres du compte
          </Typography>
          <Typography className="text-architect-secondary_text_color text-[15px]">
            Modifier les informations et les paramètres du compte
          </Typography>
        </div>
      </MainCard>

      <div className="flex flex-row max-w-screen-xl  w-full m-auto gap-3 mt-4 ">
        <MainCard className="!px-0 hidden xl:flex self-start">
          <div className="flex flex-col w-64 ">
            <div className="p-4">
              <div className=" gap-6 self-center md:max-w-[400px]  ">
                <div className="flex justify-start gap-4">
                  {isloading || isLoading ? (
                    <Spinner />
                  ) : (
                    <Avatar
                      className="h-[30%] w-[30%]"
                      src={
                        avatar.data.image_url
                          ? avatar?.data?.image_url
                          : AvatarPhoto.src
                      }
                      alt="avatar"
                    />
                  )}
                  <div className="self-end">
                    <form className="flex items-center  ">
                      <label
                        htmlFor="upload-photo"
                        className="flex font-bold items-center text-[12px] mb-5 gap-2 cursor-pointer"
                      >
                        <PencilSquareIcon className="h-5 w-5" />
                        <input
                          type="file"
                          id="upload-photo"
                          onChange={(e) => {
                            const file = e.target.files[0]; // Get the selected file
                            handlePP(file); // Call the handlePP function with the selected file
                          }}
                          className="hidden"
                        />{" "}
                        Changer photo
                      </label>
                    </form>
                  </div>
                </div>
              </div>
              {isLoading ? (
                <Spinner />
              ) : (
                <Typography className=" text-[14px] font-semibold mt-2">
                  {architect.data.architect.user.first_name}{" "}
                  {architect.data.architect.user.last_name}
                </Typography>
              )}
              <div className="border-dashed border-t-2   border-y-5  mt-3  ">
                <div className="space-y-4 mt-3">
                  <div
                    className="flex items-center "
                    onClick={() => {
                      router.push("/architect/Parametre");
                      setIndex(0);
                    }}
                  >
                    <Typography
                      className={cn(
                        "  flex items-center gap-2 cursor-pointer ",
                        index == 0 && "text-architect-primary",
                      )}
                    >
                      <UserIcon className="h-6 w-6" />
                      Informations du base
                    </Typography>
                  </div>
                  <div
                    className="flex items-center "
                    onClick={() => {
                      router.push("/architect/Parametre/InformationEntreprise");
                      setIndex(1);
                    }}
                  >
                    <Typography
                      className={cn(
                        "  flex items-center gap-2 cursor-pointer ",
                        index == 1 && "text-architect-primary",
                      )}
                    >
                      <BuildingOfficeIcon className="h-6 w-6" />
                      Informations entreprise
                    </Typography>
                  </div>

                  <div
                    className="flex items-center "
                    onClick={() => {
                      router.push("/architect/Parametre/Services");
                      setIndex(2);
                    }}
                  >
                    <Typography
                      className={cn(
                        "  flex items-center gap-2 cursor-pointer ",
                        index == 2 && "text-architect-primary",
                      )}
                    >
                      <Cog6ToothIcon className="h-6 w-6" />
                      Services
                    </Typography>
                  </div>
                  <div className="flex flex-row justify-between">
                    <div
                      className="flex items-center "
                      onClick={() => {
                        router.push("/architect/Parametre/Preference");
                        setIndex(3);
                      }}
                    >
                      <Typography
                        className={cn(
                          "  flex items-center gap-2 cursor-pointer ",
                          index == 3 && "text-architect-primary",
                        )}
                      >
                        <AdjustmentsHorizontalIcon className="h-6 w-6" />
                        Préférences
                      </Typography>
                    </div>
                    <img
                      className="w-[15px] cursor-pointer py-0.5 "
                      src={Queen.src}
                    />
                  </div>
                  <div
                    className="flex items-center "
                    onClick={() => {
                      router.push("/architect/Parametre/MotDePasse");
                      setIndex(4);
                    }}
                  >
                    <Typography
                      className={cn(
                        "  flex items-center gap-2 cursor-pointer ",
                        index == 4 && "text-architect-primary",
                      )}
                    >
                      <LockClosedIcon className="h-6 w-6" />
                      Mot de passe
                    </Typography>
                  </div>
                  <div
                    className="flex items-center "
                    onClick={() => {
                      router.push("/architect/Parametre/Portefeuille");
                      setIndex(5);
                    }}
                  >
                    <Typography
                      className={cn(
                        "  flex items-center gap-2 cursor-pointer ",
                        index == 5 && "text-architect-primary",
                      )}
                    >
                      <WalletIcon className="h-6 w-6" />
                      portefeuille jetons
                    </Typography>
                  </div>
                  <div
                    className="flex items-center "
                    onClick={() => {
                      router.push("/architect/Parametre/GestionAbonnement");
                      setIndex(6);
                    }}
                  >
                    <Typography
                      className={cn(
                        "  flex items-center gap-2 cursor-pointer ",
                        index == 6 && "text-architect-primary",
                      )}
                    >
                      <DocumentTextIcon className="h-6 w-6" />
                      Gestion d'abonnement
                    </Typography>
                  </div>
                  <div
                    className="flex items-center "
                    onClick={() => {
                      router.push("/architect/Parametre/Facturation");
                      setIndex(7);
                    }}
                  >
                    <Typography
                      className={cn(
                        "  flex items-center gap-2 cursor-pointer ",
                        index == 7 && "text-architect-primary",
                      )}
                    >
                      <CurrencyDollarIcon className="h-6 w-6" />
                      Facturation
                    </Typography>
                  </div>
                  <div
                    className="flex items-center "
                    onClick={() => {
                      router.push("/architect/Parametre/BankCard");
                      setIndex(8);
                    }}
                  >
                    <Typography
                      className={cn(
                        "  flex items-center gap-2 cursor-pointer ",
                        index == 8 && "text-architect-primary",
                      )}
                    >
                      <CreditCardIcon className="h-6 w-6" />
                      Compte bancaire
                    </Typography>
                  </div>
                  <div
                    className="flex items-center "
                    onClick={() => {
                      router.push("/architect/Parametre/Invitation");
                      setIndex(9);
                    }}
                  >
                    <Typography
                      className={cn(
                        "  flex items-center gap-2 cursor-pointer ",
                        index == 9 && "text-architect-primary",
                      )}
                    >
                      <img className="h-7 w-7" src={Friends.src} />
                      Inviter des amis
                    </Typography>
                  </div>
                  <div className="border-dashed border-t-2   border-y-5  mt-3  ">
                    <div className="space-y-4 mt-3">
                      <div className="flex items-center ">
                        <Typography className="  flex items-center gap-2 ">
                          <ArrowRightEndOnRectangleIcon className="h-6 w-6" />
                          Déconnexion
                        </Typography>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </MainCard>
        {pathname.includes("Portefeuille") ? (
          <div className="w-full"> {children}</div>
        ) : (
          <MainCard className="w-full p-4">{children}</MainCard>
        )}
      </div>
      {pathname.includes("Portefeuille") && (
        <div>
          <div className="flex flex-col lg:mx-auto mt-16  items-center">
            <Typography
              variant="h1"
              className="text-architect-font_gris text-[25px] lg:w-[900px] text-center lg:text-[36px] font-extrabold flex justify-center   "
            >
              Découvrez nos Offres de Packs de Jetons !
            </Typography>
            <Typography
              variant="paragraph"
              className="text-architect-secondary_text_color  text-[15px] text-center lg:text-[20px] lg:w-[700px]   flex justify-center"
            >
              Des options variées, des avantages exclusifs. Choisissez dès
              maintenant et plongez dans l'action !
            </Typography>
          </div>
          <div className="flex flex-col lg:flex-row  gap-6 mt-8 items-center justify-center">
            <MainCard className="shadow-lg w-[270px] h-[330px]">
              <div className="flex  flex-row   items-center gap-2  ">
                <img
                  className=" cursor-pointer  w-[50px]  flex items-center  "
                  src={JetonBlue.src}
                />
                <Typography className=" font-extrabold text-[21px] self-center text-architect-main_blue   ">
                  10 jetons
                </Typography>
              </div>
              <div className="flex flex-row  gap-2">
                <Typography
                  variant="paragraph"
                  className="text-architect-font_gris text-[28px] font-extrabold flex justify-center  "
                >
                  99
                </Typography>
                <div className=" flex-row flex items-center">
                  <Typography
                    variant="paragraph"
                    className="text-architect-font_gris font-extrabold text-[15px] mt-3   "
                  >
                    DT
                  </Typography>
                  <Typography
                    variant="paragraph"
                    className="text-architect-secondary_text_color text-[15px]   mt-3 "
                  >
                    /mois
                  </Typography>
                </div>
              </div>
              <div className="flex  flex-row   items-center gap-2 mt-9 ">
                <img
                  className=" cursor-pointer  w-[40px]  flex items-center  "
                  src={JetonRouge.src}
                />
                <Typography className=" font-semibold text-[15px] self-center text-architect-main_blue   ">
                  7 jetons
                </Typography>
              </div>
              <div className="flex  flex-row   items-center gap-2 ">
                <img
                  className=" cursor-pointer  w-[30px]  flex items-center  "
                  src={GiftBlack.src}
                />
                <Typography className=" font-semibold text-[15px] self-center text-architect-main_blue   ">
                  3 jetons gratuits
                </Typography>
              </div>
              <Button
                type="submit"
                size="md"
                className=" w-full h-[40px] self-center flex items-center justify-center  text-[15px] mt-6 "
                color="architect-font_gris"
              >
                Démarrer
              </Button>
            </MainCard>
            <MainCard className="shadow-lg w-[270px] h-[330px]">
              <div className="flex  flex-row   items-center gap-2  ">
                <img
                  className=" cursor-pointer  w-[50px]  flex items-center  "
                  src={JetonBlue.src}
                />
                <Typography className=" font-extrabold text-[21px] self-center text-architect-main_blue   ">
                  19 jetons
                </Typography>
              </div>
              <div className="flex flex-row  gap-2">
                <Typography
                  variant="paragraph"
                  className="text-architect-font_gris text-[28px] font-extrabold flex justify-center  "
                >
                  199
                </Typography>
                <div className=" flex-row flex items-center">
                  <Typography
                    variant="paragraph"
                    className="text-architect-font_gris font-extrabold text-[15px] mt-3   "
                  >
                    DT
                  </Typography>
                  <Typography
                    variant="paragraph"
                    className="text-architect-secondary_text_color text-[15px]   mt-3 "
                  >
                    /mois
                  </Typography>
                </div>
              </div>
              <div className="flex  flex-row   items-center gap-2 mt-9 ">
                <img
                  className=" cursor-pointer  w-[40px]  flex items-center  "
                  src={JetonRouge.src}
                />
                <Typography className=" font-semibold text-[15px] self-center text-architect-main_blue   ">
                  14 jetons
                </Typography>
              </div>
              <div className="flex  flex-row   items-center gap-2 ">
                <img
                  className=" cursor-pointer  w-[30px]  flex items-center  "
                  src={GiftBlack.src}
                />
                <Typography className=" font-semibold text-[15px] self-center text-architect-main_blue   ">
                  5 jetons gratuits
                </Typography>
              </div>
              <Button
                type="submit"
                size="md"
                className=" w-full h-[40px] self-center flex items-center justify-center  text-[15px] mt-6 "
                color="architect-font_gris"
              >
                Démarrer
              </Button>
            </MainCard>
            <MainCard className="shadow-lg w-[270px] h-[330px]">
              <div className="flex  flex-row   items-center gap-2  ">
                <img
                  className=" cursor-pointer  w-[50px]  flex items-center  "
                  src={JetonBlue.src}
                />
                <Typography className=" font-extrabold text-[21px] self-center text-architect-main_blue   ">
                  31 jetons
                </Typography>
              </div>
              <div className="flex flex-row  gap-2">
                <Typography
                  variant="paragraph"
                  className="text-architect-font_gris text-[28px] font-extrabold flex justify-center  "
                >
                  299
                </Typography>
                <div className=" flex-row flex items-center">
                  <Typography
                    variant="paragraph"
                    className="text-architect-font_gris font-extrabold text-[15px] mt-3   "
                  >
                    DT
                  </Typography>
                  <Typography
                    variant="paragraph"
                    className="text-architect-secondary_text_color text-[15px]   mt-3 "
                  >
                    /mois
                  </Typography>
                </div>
              </div>
              <div className="flex  flex-row   items-center gap-2 mt-9 ">
                <img
                  className=" cursor-pointer  w-[40px]  flex items-center  "
                  src={JetonRouge.src}
                />
                <Typography className=" font-semibold text-[15px] self-center text-architect-main_blue   ">
                  24 jetons
                </Typography>
              </div>
              <div className="flex  flex-row   items-center gap-2 ">
                <img
                  className=" cursor-pointer  w-[30px]  flex items-center  "
                  src={GiftBlack.src}
                />
                <Typography className=" font-semibold text-[15px] self-center text-architect-main_blue   ">
                  7 jetons gratuits
                </Typography>
              </div>
              <Button
                type="submit"
                size="md"
                className=" w-full h-[40px] self-center flex items-center justify-center  text-[15px] mt-6 "
                color="architect-font_gris"
              >
                Démarrer
              </Button>
            </MainCard>
            <MainCard className="shadow-lg w-[270px] h-[330px]">
              <div className="flex  flex-row   items-center gap-2  ">
                <img
                  className=" cursor-pointer  w-[50px]  flex items-center  "
                  src={JetonBlue.src}
                />
                <Typography className=" font-extrabold text-[21px] self-center text-architect-main_blue   ">
                  44 jetons
                </Typography>
              </div>
              <div className="flex flex-row  gap-2">
                <Typography
                  variant="paragraph"
                  className="text-architect-font_gris text-[28px] font-extrabold flex justify-center  "
                >
                  369
                </Typography>
                <div className=" flex-row flex items-center">
                  <Typography
                    variant="paragraph"
                    className="text-architect-font_gris font-extrabold text-[15px] mt-3   "
                  >
                    DT
                  </Typography>
                  <Typography
                    variant="paragraph"
                    className="text-architect-secondary_text_color text-[15px]   mt-3 "
                  >
                    /mois
                  </Typography>
                </div>
              </div>
              <div className="flex  flex-row   items-center gap-2 mt-9 ">
                <img
                  className=" cursor-pointer  w-[40px]  flex items-center  "
                  src={JetonRouge.src}
                />
                <Typography className=" font-semibold text-[15px] self-center text-architect-main_blue   ">
                  34 jetons
                </Typography>
              </div>
              <div className="flex  flex-row   items-center gap-2 ">
                <img
                  className=" cursor-pointer  w-[30px]  flex items-center  "
                  src={GiftBlack.src}
                />
                <Typography className=" font-semibold text-[15px] self-center text-architect-main_blue   ">
                  10 jetons gratuits
                </Typography>
              </div>
              <Button
                type="submit"
                size="md"
                className=" w-full h-[40px] self-center flex items-center justify-center  text-[15px] mt-6 "
                color="architect-font_gris"
              >
                Démarrer
              </Button>
            </MainCard>
          </div>
        </div>
      )}
    </PageLayout>
  );
};

export default architectParametrePage;
