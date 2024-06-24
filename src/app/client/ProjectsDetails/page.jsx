"use client";
import Background from "@/assets/background.svg";
import { PageLayout } from "@/components";
import { Typography } from "@/components/RemoteComponents";

import Image from "next/image";
import { useRouter } from 'next/navigation';
import CategoriDetails from "./CategoriDetails";
import ConstructionCard from "./ConstructionCard";

import Pieces from "./Pieces";

const page = () => {

 

  const router = useRouter();
  return (

<PageLayout className="">
<div className=" w-full flex flex-col bg-[#FAFBFF]  ">
    <Image
        alt="hero image"
        className=" w-full"
        src={Background}
        priority={true}
      />
    <div className=" w-full flex flex-col  items-center max-w-screen-xl m-auto md:mt-[-45px] ">
    <div className="flex flex-col  md:flex-row  gap-6  ">
    <div className="flex flex-col max-w-screen-xl m-auto md:mt-[-48px] gap-5">
    <Typography className=" text-[18px] font-semibold text-architect-font_gris self-start ">Détails projet</Typography>
      <ConstructionCard/></div>
     <div className="flex flex-col gap-3">
      <CategoriDetails/>
     <Pieces/>
     </div>
    </div>
      </div>
</div> 
</PageLayout>     
   
  )}
export default page