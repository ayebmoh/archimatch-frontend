"use client";
import Architectconstr from "@/assets/Architectconstr.svg";
import Architectinter from "@/assets/Architectinter.svg";
import Frame1 from "@/assets/Frame1.svg";
import bestworker from "@/assets/bestworker.svg";
import commercial from "@/assets/commercial.svg";
import employment from "@/assets/employment.svg";
import handhelmet from "@/assets/handhelmet.svg";
import immobilier from "@/assets/immobilier.svg";
import indistruel from "@/assets/indistruel.svg";
import offre from "@/assets/offre.svg";
import pics from "@/assets/pics.svg";
import resedentiel from "@/assets/resedentiel.svg";
import safetyv from "@/assets/safetyv.svg";
import { PageLayout } from "@/components";
import MainCard from "@/components/MainCard";
import { Button, Typography } from "@/components/RemoteComponents";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { IoPlayCircleOutline } from "react-icons/io5";
const page = () => {
  const router = useRouter();
  return (
    <PageLayout className="pb-12 lg:min-h-screen lg:pb-0">
      <div className="flex px-4 flex-col  w-full m-auto items-center md:items-center">
        <div className="mt-14 ">
          <Typography className="font-bold text-[16px] text-architect-dark_blue lg:text-4xl">
            Construisez vos rêves gratuitement
          </Typography>

          <Typography className="font-bold text-[16px] mt-1 ml-5 text-architect-dark_blue lg:text-4xl">
            grâce à nos{" "}
            <span className=" text-client-primary ">architectes qualifiés</span>{" "}
          </Typography>
        </div>
        <div className="flex flex-row gap-6 items-center lg:mt-52 lg:absolute lg:z-10 mt-4 ">
          <Button
            onClick={() =>
              router.push(
                "/clientVisitor/LandingPage/ExplorationArchitecturale",
              )
            }
            size="sm"
            className=" self-start lg:text-[16px]  "
          >
            Trouver mon Architect
          </Button>
          <div className="flex flex-row gap-2 items-center">
            <IoPlayCircleOutline className=" cursor-pointer size-8 lg:size-12 text-client-primary " />
            <Typography className=" text-[12px] lg:text-[14px] font-semibold">
              Watch a Promo
            </Typography>
          </div>
        </div>
        <Image
          alt=""
          className="  w-full h-full lg:top-[47%] object-cover  "
          src={pics}
          priority={true}
        />

        <MainCard className=" mt-4 relative lg:mt-[-30px]  lg:flex flex-row  grid grid-cols-2 gap-2  w-full items-start  justify-between lg:w-[1150px]  shadow-md  border  border-gray-300 pr-4 pl-4  ">
          <div className="flex flex-row gap-1 items-center">
            <Image alt="" className="  " src={employment} priority={true} />
            <div className="flex flex-col items-start">
              <Typography className="text-[14px] font-semibold">
                Devis gratuit
              </Typography>
              <Typography className="text-[13px] font-semibold text-architect-secondary_text_color">
                Lorem Ipsum is simply
              </Typography>
            </div>
          </div>
          <div className="flex flex-row gap-1 items-center">
            <Image alt="" className="  " src={bestworker} priority={true} />
            <div className="flex flex-col items-start">
              <Typography className="text-[14px] font-semibold">
                Architect professionnel
              </Typography>
              <Typography className="text-[13px] font-semibold text-architect-secondary_text_color">
                Lorem Ipsum is simply
              </Typography>
            </div>
          </div>
          <div className="flex flex-row gap-1 items-center">
            <Image alt="" className="  " src={safetyv} priority={true} />
            <div className="flex flex-col items-start">
              <Typography className="text-[14px] font-semibold">
                Accompagnement
              </Typography>
              <Typography className="text-[13px] font-semibold text-architect-secondary_text_color">
                Lorem Ipsum is simply
              </Typography>
            </div>
          </div>
          <div className="flex flex-row gap-1 items-center">
            <Image alt="" className="  " src={handhelmet} priority={true} />
            <div className="flex flex-col items-start">
              <Typography className="text-[14px] font-semibold">
                Conseils
              </Typography>
              <Typography className="text-[13px] font-semibold text-architect-secondary_text_color">
                Lorem Ipsum is simply{" "}
              </Typography>
            </div>
          </div>
          <div className="flex flex-row gap-1 items-center">
            <Image alt="" className="  " priority={true} />
            <div className="flex flex-col  items-start">
              <Typography className="text-[14px] font-semibold">
                Inspirations et tendances
              </Typography>
              <Typography className="text-[13px] font-semibold text-architect-secondary_text_color">
                Lorem Ipsum is simply
              </Typography>
            </div>
          </div>
        </MainCard>

        <Typography className=" mt-14 font-bold text-[16px]  text-architect-dark_blue lg:text-2xl ">
          Découvrez l'excellence architecturale pour{" "}
          <span className=" text-client-primary ">tous vos projets!</span>{" "}
        </Typography>
        <Typography className="mt-1  text-[14px] text-architect-secondary_text_color  lg:text-lg">
          Trouvez des spécialistes pour les projets commerciaux, résidentiels et
          industriels
        </Typography>
        <div className=" flex flex-row  lg:flex-col gap-2 mt-7 lg:ml-52">
          <div className="flex flex-col lg:flex-row gap-2 ">
            <Image
              src={commercial}
              alt=""
              className="cursor-pointer lg:w-[35%]  "
              priority={true}
            />
            <Image
              src={resedentiel}
              alt=""
              className="cursor-pointer lg:w-[45%]  "
              priority={true}
            />
          </div>
          <div className="flex lg:flex-row gap-3 flex-col  ">
            <Image
              src={immobilier}
              alt=""
              className="cursor-pointer  lg:w-[44%] "
              priority={true}
            />
            <Image
              src={indistruel}
              alt=""
              className="cursor-pointer lg:w-[35%] "
              priority={true}
            />
          </div>
        </div>
      </div>
      <div className=" min-h-[140px] lg:w-[1000px] lg:ml-96">
        <Image src={offre} alt="" className="   " priority={true} />
      </div>

      <div className="flex px-4 flex-col  w-full m-auto items-center md:items-center">
        <div className="mt-14  lg:flex flex-col items-center">
          <Typography className=" font-bold text-[16px]  text-architect-dark_blue lg:text-2xl">
            Des architectes de construction et d'intérieurs experts, à votre
          </Typography>

          <Typography className="  font-bold text-[16px]  text-architect-dark_blue lg:text-2xl">
            service,{" "}
            <span className=" text-client-primary ">
              dans toute la Tunisie !
            </span>
          </Typography>
          <Typography className="mt-1  text-[13px] text-architect-secondary_text_color  lg:text-lg">
            Où que vous soyez, votre projet prendra vie
          </Typography>
        </div>
        <div className=" mt-5  flex lg:flex-row   flex-col gap-5   ">
          <Image
            src={Architectconstr}
            alt=""
            className=" shadow-xl  shadow-blue-gray-900/50 lg:w-[400px] w-48 rounded-lg  "
            priority={true}
          />
          <Image
            src={Architectinter}
            alt=""
            className=" shadow-xl  shadow-blue-gray-900/50 lg:w-[400px]  w-48 rounded-lg "
            priority={true}
          />
        </div>

        <div className="  mr-6  ">
          <Image
            src={Frame1}
            alt=""
            className=" lg:w-[1500px]  lg:h-[400px]   "
            priority={true}
          />
        </div>
      </div>
    </PageLayout>
  );
};

export default page;
