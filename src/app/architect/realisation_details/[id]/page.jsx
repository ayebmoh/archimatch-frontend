"use client";
import Chaise from "@/assets/Chaise.svg";
import Right from "@/assets/Right.svg";
import { MainCard } from "@/components";
import { Button, Typography } from "@/components/RemoteComponents";
import { useFetchData } from "@/services/queries";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { Spinner } from "@material-tailwind/react";
import Cookies from "js-cookie";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

const Step7 = (props) => {
  const router = useRouter();
  const pathname = usePathname();
  const cookiesdata = Cookies.get("id");

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
    "realisations",
  );
  useEffect(() => {
    // console.log(isLoading);
    console.log("aaaaaaaaaaaaa", isSuccess);
    console.log(realisation?.data);
    console.log(pathname.split("/")[3]);
    // console.log(isPending);
  });

  // Function to convert data URL to File object
  const backend = "http://localhost:8000";

  return (
    <>
      <div>
        <>
          <div className="flex flex-col lg:mx-auto  max-w-screen-2xl w-[100%]">
            <div className="flex  mt-9">
              <Typography
                variant="paragraph"
                className="text-architect-font_gris text-[15px] font-semibold flex items-center gap-2 cursor-pointer"
                onClick={() => router.push("/architect/Profile")}
              >
                <ArrowLeftIcon className="h-4 w-4" />
                retour
              </Typography>
            </div>
            <Typography
              variant="h1"
              className="text-architect-font_gris text-[25px] lg:text-[30px] font-semibold   mt-5"
            >
              Details du projet{" "}
            </Typography>
          </div>

          <MainCard className="max-w-screen-2xl w-[100%] basis-0 mx-auto mt-[38px] py-8 z-50 mb-24 shadow-xl">
            {Array.isArray(realisation?.data?.realization) ? (
              <Spinner />
            ) : (
              <div className=" w-[90%] m-auto">
                <div>
                  <img
                    className=" cursor-pointer self-start w-[50px] "
                    src={Right.src}
                  />{" "}
                  <Typography
                    variant="h1"
                    className="text-architect-font_gris text-[20px]  lg:text-[35px] font-bold mt-5 "
                  >
                    Terminé !
                  </Typography>
                  <Typography
                    variant="paragraph"
                    className="text-architect-secondary_text_color  text-[10px] lg:text-[15px]  "
                  >
                    Voici un aperçu de votre projet nouvellement créée{" "}
                  </Typography>
                  <Typography
                    variant="h1"
                    className="text-architect-font_gris text-[10px]  lg:text-[25px] font-bold mt-10 "
                  >
                    {realisation?.data.realization.project_title}
                  </Typography>
                  <div className="flex lg:flex-row flex-col  justify-between mt-4 ">
                    <div className="flex flex-col gap-8 lg:w-[60%] w-full ">
                      <Typography
                        variant="paragraph"
                        className="text-architect-font_gris text-justify text-[15px] lg:text-[17px]  "
                      >
                        {realisation?.data.realization.description}
                      </Typography>
                    </div>
                    <MainCard className="flex flex-col  lg:w-[30%] w-full self-start !p-3">
                      <Typography className="self-start font-semibold text-[18px] text-architect-dark_blue ">
                        Catégorie de projet
                      </Typography>
                      <Typography className=" text-[16px] self-start text-architect-secondary_text_color mt-1 ">
                        {realisation?.data.realization?.categorie?.display}
                      </Typography>
                      <div className="border-dashed border-t-2   border-y-5  mt-4">
                        <Typography className="self-start font-semibold text-[18px] text-architect-dark_blue mt-4">
                          Style
                        </Typography>
                        <Typography className=" text-[16px] self-center text-architect-secondary_text_color mt-1 ">
                          {realisation?.data.realization.style}
                        </Typography>
                      </div>
                      <div className="border-dashed border-t-2   border-y-5  mt-4  ">
                        <Typography className="self-start font-semibold text-[18px] text-architect-dark_blue mt-4">
                          Superficie
                        </Typography>
                        <Typography className=" text-[16px] self-center text-architect-secondary_text_color mt-1 ">
                          {realisation?.data.realization.surface}
                        </Typography>
                      </div>
                      <div className="border-dashed border-t-2   border-y-5  mt-4  ">
                        <Typography className="self-start font-semibold text-[18px] text-architect-dark_blue mt-4">
                          Localisation
                        </Typography>
                        <Typography className=" text-[16px] self-center text-architect-secondary_text_color mt-1 ">
                          {realisation?.data.realization.city}
                        </Typography>
                      </div>
                    </MainCard>
                  </div>
                  <Typography className="font-semibold text-[25px]  text-architect-dark_blue mt-2 ">
                    Les services
                  </Typography>
                  <Typography className=" text-[15px] self-center text-architect-secondary_text_color  ">
                    Services approuvés requis pour le projet :
                  </Typography>
                  <div className="flex flex-col space-y-3 mt-4">
                    <div className="flex  flex-row   items-center gap-3  ">
                      <img
                        className=" cursor-pointer  w-[45px]  flex items-center text-client-primary fill-current- "
                        src={Chaise.src}
                      />
                      <Typography className=" text-[17px] self-center ">
                        {realisation?.data.realization.service}
                      </Typography>
                    </div>
                  </div>
                  <Typography className="font-semibold text-[25px]  text-architect-dark_blue mt-7 ">
                    Galerie
                  </Typography>
                  {realisation && (
                    <div className="flex flex-row   mt-3 w-full gap-6  justify-center">
                      <div className="   rounded-md flex-grow basis-0">
                        {realisation?.data?.realization?.images && (
                          <img
                            className=" cursor-pointer  w-full h-full self-start rounded-lg "
                            src={`${backend}${realisation?.data?.realization?.images[0].image}`}
                          />
                        )}
                      </div>

                      <div className="flex flex-col  gap-2 flex-grow basis-0">
                        <div className="flex flex-row gap-2 flex-wrap">
                          {realisation?.data.realization.images?.map(
                            (element, index) => {
                              if (index !== 0) {
                                return (
                                  <div className="rounded-md md:w-[45%] w-full min-w-[200px] ">
                                    <img
                                      className=" cursor-pointer w-full h-full  self-end rounded-md"
                                      src={`${backend}${element.image}`}
                                    />
                                  </div>
                                );
                              }
                            },
                          )}
                        </div>
                      </div>
                    </div>
                  )}
                  <div className="flex flex-row justify-end self-end gap-3  h-full ">
                    <Button
                      color="gray"
                      variant="outlined"
                      className=" mt-16 font-semibold w-[170px] md:text-[16px] text-[14px]"
                      type="submit"
                      size="md"
                      //   onClick={() => setUpdate(true)}
                    >
                      Modifier
                    </Button>
                    <Button
                      type="submit"
                      size="md"
                      className=" mt-16 w-[170px] font-semibold  md:text-[16px] text-[14px]"
                      //   onClick={async () => await handleData()}
                      //disabled={isLoading}
                    >
                      Publier
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </MainCard>
        </>
      </div>
    </>
  );
};

export default Step7;
