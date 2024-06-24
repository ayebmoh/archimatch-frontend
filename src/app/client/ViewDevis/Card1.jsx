"use client";

import caparchi from "@/assets/caparchi.png";
import MainCard from "@/components/MainCard";
import { Avatar, Chip, Typography } from "@/components/RemoteComponents";
import {
  BanknotesIcon,
  BuildingOfficeIcon,
  MapIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";

import { useRouter } from "next/navigation";

const Card1 = () => {
  const router = useRouter();
  const handleClickBack = () => {
    router.back();
  };
  return (
    
    <div className="w-full  lg:w-[500px]  ">
      <div className="w-full   ">
        <MainCard className="relative  self-center p-6">
          <div className="flex flex-col ">
            <div className="flex  items-center justify-between ">
              <Typography className="text-architect-secondary_text_color text-[12px]">
                {" "}
                Publié le 12 Janv. 2024
              </Typography>
              <div className="flex  items-center gap-2 self-end">
                <div className="flex  items-center gap-2 self-end">
                  <Chip
                    size="lg"
                    value="pending"
                    color="green"
                    className="self-center text-[#B76E00] font-extrabold bg-[#FFAB00] bg-opacity-15 border-0 ml-5"
                  />
                </div>
              </div>
            </div>
            <div className="mt-1 items-start">
              <Typography className="text-architect-font_gris text-[16px]  font-bold">
                {" "}
                Construction neuve
              </Typography>
              <div className="flex flex-row items-start pt-[8px] gap-1  ">
                <Image src={caparchi} className="" alt="" />
                <Typography className="text-client-primary text-[14px]">
                  {" "}
                  Architecte de construction
                </Typography>
              </div>

              <div className="flex flex-row items-center pt-[8px] gap-1 ">
                <MapPinIcon className="h-6 w-6 text-architect-font_gris " />
                <Typography className="text-architect-font_gris text-[14px]">
                  {" "}
                  Sousse
                </Typography>
              </div>
            </div>
            <div className="flex flex-row basis-0 flex-grow gap-2 ">
              <div className="flex flex-row items-center pt-[8px] gap-1">
                <BuildingOfficeIcon className="h-6 w-6 text-architect-secondary_text_color cursor-pointer " />
                <Typography className="text-architect-secondary_text_color text-[12px] ">
                  {" "}
                  Maison
                </Typography>
              </div>
              <div className="flex flex-row items-center p-[8px] gap-1 ">
                <MapIcon className="h-6 w-6 text-architect-secondary_text_color  " />
                <Typography className="text-architect-secondary_text_color text-[12px]">
                  {" "}
                  10 m²
                </Typography>
              </div>
              <div className="flex flex-row items-center p-[8px] gap-1  ">
                <BanknotesIcon className="h-6 w-6 text-architect-secondary_text_color " />
                <Typography className="text-architect-secondary_text_color text-[12px]">
                  {" "}
                  10.000dt - 20.000dt
                </Typography>
              </div>
            </div>
            <div className="flex flex-row gap-4 items-center  mt-4   mb-2">
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
                3 Architectes intéressés par le projet
              </Typography>
            </div>
          </div>
        </MainCard>
      </div>
    </div>
  );
};

export default Card1
