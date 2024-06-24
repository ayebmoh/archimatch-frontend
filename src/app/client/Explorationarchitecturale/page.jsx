"use client";
import Archi from "@/assets/Archi.svg";
import clientLogo from "@/assets/ClientLogo.svg";
import Group2 from "@/assets/Group2.svg";
import Group3 from "@/assets/Group3.svg";
import Group4 from "@/assets/Group4.svg";
import { FaEnvelopeOpenText } from "react-icons/fa";

import footer from "@/assets/footer.svg";
import pic12 from "@/assets/pic12.png";
import CustomCarousel from "@/components/CustomCarousel";
import { Button, Input, Typography } from "@/components/RemoteComponents";
import Image from "next/image";
import { useState } from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { GrFormNext } from "react-icons/gr";
import { IoLogoGithub } from "react-icons/io5";
import RealizationCard from "./RealizationCards";

const page = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleImageClick = (image, content) => {
    setSelectedImage(image);
    setSelectedCategory(content);
    console.log(content);
  };

  return (
    <div className="pb-10   ">
      <div className=" flex  flex-col w-full m-auto    ">
        <div className="flex lg:flex-row  mt-14 ">
          <Image
            alt=""
            className=" lg:w-[38%] h-full  object-cover mr-96  "
            src={Archi}
            priority={true}
          />
          <div className=" flex mt-4 flex-col items-center absolute w-full  ">
            <Typography className=" font-bold text-[16px]  text-architect-dark_blue lg:text-2xl">
              Exploration Architecturale
            </Typography>

            <Typography className="mt-1  text-[13px] text-architect-secondary_text_color  lg:text-lg">
              Révélez l'Art de l'Espace ! Contactez nos architectes
              professionnels pour
            </Typography>
            <Typography className="mt-1  text-[13px] text-architect-secondary_text_color  lg:text-lg">
              concrétiser votre projet de rêve
            </Typography>
          </div>
        </div>
        <div className=" flex px-2 flex-col w-full   items-center ">
          <div className="h-auto flex flex-col items-center xl:flex-row xl:gap-6  gap-5  mt-0 ">
            <Image
              src={pic12}
              alt=""
              onClick={() => handleImageClick(pic12, "Construction logement")}
              className={`cursor-pointer w-full md:w-full lg:w-full  h-72 rounded-lg transition duration-300 ease-in-out hover:scale-110 ${
                selectedImage === pic12 ? "border-4 border-client-primary" : ""
              }`}
              priority={true}
            />
            <div className="flex xl:flex-row gap-4 xl:gap-5 flex-col ">
              <div className=" w-52 h-72 relative">
                <Image
                  src={Group2}
                  alt=""
                  onClick={() =>
                    handleImageClick(Group2, "Point vente et comercial")
                  }
                  className={`${
                    selectedImage === Group2
                      ? "border-4 border-client-primary"
                      : ""
                  } cursor-pointer rounded-lg transition duration-300 ease-in-out hover:scale-110`}
                  priority={true}
                  layout="fill"
                  objectFit="cover"
                />
              </div>

              <div className=" w-52 h-72 relative">
                <Image
                  src={Group3}
                  alt=""
                  onClick={() =>
                    handleImageClick(Group3, "Grand oevre immobilier")
                  }
                  className={`${
                    selectedImage === Group3
                      ? "border-4 border-client-primary"
                      : ""
                  } cursor-pointer rounded-lg transition duration-300 ease-in-out hover:scale-110`}
                  priority={true}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className=" w-52 h-72 relative">
                <Image
                  src={Group4}
                  alt=""
                  onClick={() => handleImageClick(Group4, "Industruelle")}
                  className={`${
                    selectedImage === Group4
                      ? "border-4 border-client-primary"
                      : ""
                  } cursor-pointer rounded-lg transition duration-300 ease-in-out hover:scale-110`}
                  priority={true}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>
          </div>
          {selectedCategory ? (
            <>
              <Typography className=" font-bold text-[16px]  text-architect-dark_blue lg:text-2xl mt-14">
                Intérêts connexes
              </Typography>

              <div className="flex sm:h-auto justify-center items-center">
                <div className="w-3/4   xl:w-[800px]">
                  {" "}
                  <CustomCarousel content={selectedCategory} />
                </div>
              </div>
            </>
          ) : null}
          {/* <div className="flex flex-col gap-1 items-start p-3">
            <Image
              src={pic12}
              alt=""
              className="cursor-pointer rounded-3xl lg:w-96"
              priority={true}
            />
            <div className="flex flex-col items-start gap-1">
              <Typography className="mt-1  text-[13px] text-client-primary  lg:text-lg">
                Architecture intérieur
              </Typography>
              <Typography className=" text-[13px] font-semibold text-[#212B36] lg:text-lg">
                Maison lac
              </Typography>
            </div>
          </div> */}
          {selectedCategory ? (
            <RealizationCard content={selectedCategory} />
          ) : null}
        </div>
      </div>

      {/*NEWSLETTER */}

      <div className="w-full items-center">
        <div className=" absolute lg:mt-[-5px]  justify-end w-full left-[50%]  gap-4 lg:pt-28  flex flex-col items-center lg:items-start pr-16   ">
          <FaEnvelopeOpenText className=" text-gray-300 lg:size-12 size-10 " />
          <Typography variant="h1" className="font-bold  text-white">
            Newsletter
          </Typography>
          <div className="lg:mt-2 flex flex-col items-start">
            <Typography
              variant="paragraph"
              className=" pt-5 font-semibold text-white "
            >
              Sign up now to receive hot special offers
            </Typography>
            <Typography
              variant="paragraph"
              className=" pb-5 font-semibold text-white "
            >
              and information about the best tours!
            </Typography>
          </div>
          <div className=" flex flex-row items-start gap-2">
            <div className="w-72">
              <Input
                type="email"
                placeholder="Entrer votre email"
                className="!border !border-gray-300 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 placeholder:opacity-100 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
                containerProps={{ className: "min-w-[100px]" }}
              />
            </div>
            <Button size="sm" className=" py-3 bg-[#11ABEC] rounded-[9px]   ">
              <GrFormNext className="text-white lg:size-6 font-bold size-5   " />
            </Button>{" "}
          </div>
        </div>
        <Image
          src={footer}
          alt=""
          className="mt-14 w-full lg:h-full h-48  object-cover  "
          priority={true}
        />
      </div>
      {/* FOOTER */}
      <div className=" mt-14 pl-4 w-full  lg:px-60  ">
        <div className="flex flex-col gap-3 md:flex-row md:space-x-14 lg:items-start border-b-[1px] border-dashed pb-8  items-center ">
          <div className="flex flex-col gap-2 md:items-start items-center">
            <Image
              src={clientLogo}
              alt=""
              className="cursor-pointer "
              priority={true}
            />
            <Typography className="  text-[12px] text-architect-secondary_text_color lg:text-sm">
              Design amazing digital experiences
            </Typography>
            <Typography className=" text-[12px] text-architect-secondary_text_color lg:text-sm">
              that create more happy in the world.
            </Typography>
          </div>
          <div className="flex flex-col gap-2 md:items-start items-center">
            <Typography className=" text-[12px] text-client-primary   lg:text-sm">
              Je suis Client
            </Typography>
            <Typography className=" text-[12px] text-[#667085] lg:text-sm">
              Trouver un architect
            </Typography>
            <Typography className=" text-[12px] text-[#667085] lg:text-sm">
              Gere mes projets
            </Typography>
            <Typography className=" text-[12px] text-[#667085] lg:text-sm">
              Article de blog
            </Typography>
            <Typography className=" text-[12px] text-[#667085] lg:text-sm">
              Guide client
            </Typography>
            <Typography className=" text-[12px] text-[#667085] lg:text-sm">
              Contact & FAQ
            </Typography>
          </div>
          <div className="flex flex-col gap-2 md:items-start items-center ">
            <Typography className=" text-[12px] text-client-primary   lg:text-sm">
              Je suis Architect
            </Typography>
            <Typography className=" text-[12px] text-[#667085] lg:text-sm">
              Rejoindre Archimatch
            </Typography>
            <Typography className=" text-[12px] text-[#667085] lg:text-sm">
              Espace architect
            </Typography>
            <Typography className=" text-[12px] text-[#667085] lg:text-sm">
              Mon compte
            </Typography>
            <Typography className=" text-[12px] text-[#667085] lg:text-sm">
              Abonnement
            </Typography>
            <Typography className=" text-[12px] text-[#667085] lg:text-sm">
              Guide architect
            </Typography>
            <Typography className=" text-[12px] text-[#667085] lg:text-sm">
              Contact & FAQ
            </Typography>
          </div>
          <div className="flex flex-col gap-2 md:items-start items-center   ">
            <Typography className=" text-[12px] text-client-primary   lg:text-sm">
              Rejoinnez nous
            </Typography>
            <Typography className=" text-[12px] text-[#667085] lg:text-sm">
              Twitter
            </Typography>
            <Typography className=" text-[12px] text-[#667085] lg:text-sm">
              LinkedIn
            </Typography>
            <Typography className=" text-[12px] text-[#667085] lg:text-sm">
              Facebook
            </Typography>
            <Typography className=" text-[12px] text-[#667085] lg:text-sm">
              Instagram
            </Typography>
          </div>
          <div className="flex flex-col gap-2 md:items-start items-center ">
            <Typography className=" text-[12px] text-client-primary   lg:text-sm">
              ArchiMatch
            </Typography>
            <Typography className=" text-[12px] text-[#667085] lg:text-sm">
              A propos de nous
            </Typography>
            <Typography className=" text-[12px] text-[#667085] lg:text-sm">
              CGU & CGV
            </Typography>
            <Typography className=" text-[12px] text-[#667085] lg:text-sm">
              Protection des données
            </Typography>
          </div>
        </div>

        <div className="flex flex-col gap-3 lg:flex-row justify-between mt-2 items-center">
          <Typography className=" text-[12px] text-[#667085] lg:text-sm">
            2023 ArchiMatch. All rights reserved.
          </Typography>

          <div className="flex flex-row gap-2">
            <FaTwitter className=" text-[#667085] size-5" />
            <FaInstagram className=" text-[#667085] size-5" />
            <IoLogoGithub className=" text-[#667085] size-5" />
            <FaFacebook className=" text-[#667085] size-5" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
