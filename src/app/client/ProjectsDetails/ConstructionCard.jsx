"use client";
import caparchi from "@/assets/caparchi.png";
import Projectphoto1 from "@/assets/Projectphoto1.svg";
import Projectphoto2 from "@/assets/Projectphoto2.svg";
import Projectphoto3 from "@/assets/Projectphoto3.svg";
import Projectphoto4 from "@/assets/Projectphoto4.svg";
import Projectphoto5 from "@/assets/Projectphoto5.svg";
import Projectphoto6 from "@/assets/Projectphoto6.svg";
import Etages from "@/assets/Etages.svg";
import Budget from "@/assets/Budget.svg";
import Surface from "@/assets/Surface.svg";
import Suite from "@/assets/Suite.svg";
import Couch1 from "@/assets/Couch1.svg";

import { useFetchData } from "@/services/queries";

import Wallpaper from "@/assets/Wallpaper.svg"
import Couch from "@/assets/Couch.svg"
import Image from "next/image";
import livingroom from "@/assets/livingroom.svg"
import MainCard from "@/components/MainCard";
import {
    MapIcon,
    MapPinIcon,
} from "@heroicons/react/24/outline";
import { Chip, Typography } from "@/components/RemoteComponents";

const ConstructionCard = () => {

 const { data: announcements, isLoading } = useFetchData(
  "/archimatch_app/announcement/",
  );
// State to store the selected announcement

  



  {console.log('Announcements:', announcements)}


  return (
    <div className="w-full">
    <MainCard className="relative w-full sm:w-[470px] self-center" >
    {isLoading ? (
          <p>Loading...</p>
        ) : (
          <>

{announcements?.data?.map((announcement) => (
       <div key={announcement.id} className="flex flex-col ">
          {console.log('id:', announcement.id)}
      <div className="flex  items-center justify-between ml-6 ">
     <Typography className="text-architect-secondary_text_color text-[12px]">
        {" "}
        {new Date(announcement.created_at).toLocaleDateString()}
      </Typography>
      <div className="flex  items-center gap-2 self-end mr-6">
      <Chip
      size="lg"
      value="pending"
      color="green"
      className="self-center text-[#B76E00] font-extrabold bg-[#FFAB00] bg-opacity-15 border-0 ml-5"
    />
      </div>
      </div>
      
      <div className="mt-1 ml-6 ">
        <Typography className="text-architect-font_gris text-[16px] font-bold">
          {" "}
         {announcement.work_type}
        </Typography>
        <div className="flex flex-row items-start pt-[8px] gap-1  ">
          <Image src={caparchi} className="" alt="" />
          <Typography className="text-client-primary text-[14px]">
            {" "}
            {announcement.architect_type.display} 
          </Typography>
          
          </div>
          <Typography className="text-architect-font_gris text-[14px] mt-4">
           {announcement.details}
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, perspiciatis unde omnis iste natus erro. At vero eos et accusamus et iusto odio dignissimos  laudantium, totam rem aperiam.
          </Typography>
        <div className="flex flex-row items-center mt-3 pl-1 gap-1  ">
            <MapPinIcon className="h-6 w-6 text-architect-font_gris " />
            <Typography className="text-architect-font_gris text-[14px]">
              {" "}
              {announcement.town}  
            </Typography>
          </div>
      </div>
      <div className=" flex flex-col border-b-[1px] border-dashed  pb-5"></div>
      <div className="flex flex-col gap-2  px-6 py-4">
        <Typography className="text-architect-font_gris text-[16px] font-semibold">
          {" "}
          Les services
        </Typography>
        <div className="flex flex-row  justify-between">
        <Typography className="text-architect-secondary_text_color text-[14px] ">
          {" "}
          Services requis pour le projet :  
        </Typography>
    </div>
        </div>
       
    <div className="flex flex-col basis-0 mt-1 ml-8  ">
    <div className="flex flex-row items-center gap-6">
        
        <Image src={Couch}  alt="" /> 
        
    <Typography className="text-architect-font_gris text-[12px] ">
          {" "}
          Choisir le mobilier et les accessoires
        </Typography>
      </div>
      <div className="flex flex-row items-center mt-3 gap-7">
        
        <Image src={Wallpaper}  alt="" /> 
        
    <Typography className="text-architect-font_gris text-[12px] ">
          {" "}
          {announcement.need}   
        </Typography>
      </div>
    
      <div className="flex flex-row items-center mt-3 gap-6">
        
     <Image src={livingroom}  alt="" /> 
        
    <Typography className="text-architect-font_gris text-[12px] ">
          {" "}
          Créer un design moderne et fonctionnel
        </Typography>
      </div>
     </div>
  
     <div className="flex flex-col gap-2 px-6 py-7">
        <Typography className="text-architect-font_gris text-[16px] font-semibold">
          {" "}
          Détails d’exécution 
        </Typography>
        <div className="flex flex-row  justify-between">
        <Typography className="text-architect-secondary_text_color text-[14px] ">
          {" "}
          les informations essentielles concernant la réalisation du projet : 
        </Typography>
    </div>
        </div>

<div className="flex flex-row mb-5 ml-6  ">
    <div className="flex flex-col basis-0 flex-grow">
    <div className="flex flex-col items-start gap-2 ">
        
        <Typography className="text-architect-font_gris text-[12px]">
          {" "}
          Surface totale du terrain  
        </Typography>
        <div className="flex flex-row items-center gap-2">
    <MapIcon className="h-6 w-6 text-architect-font_gris  " />
        <Typography className="text-architect-font_gris  text-[12px]">
          {" "}
          {announcement.surface_terrain}
        </Typography>
        </div>
        
      </div>
    
      <div className="flex flex-col items-start gap-2 mt-5">
    <Typography className="text-architect-font_gris  text-[12px] ">
          {" "}
        Surface des travaux  
        </Typography>
        <div className="flex flex-row items-center gap-2">
        <Image src={Surface}  alt="" /> 
        <Typography className="text-architect-font_gris  text-[12px]">
          {" "}
          {announcement.surface_travaux}
        </Typography>
        </div>
   </div>
     </div>
<div className="flex flex-col basis-0 flex-grow">
    <div className="flex flex-col items-start gap-2 ">
        
        <Typography className="text-architect-font_gris text-[12px]">
          {" "}
          Nombre d’étage 
        </Typography>
        <div className="flex flex-row items-center gap-2">
        <Image src={Etages}  alt="" /> 
        <Typography className="text-architect-font_gris  text-[12px]">
          {" "}
          2 étage
        </Typography>
        </div>
        
      </div>
    
      <div className="flex flex-col items-start gap-2 mt-7">
    <Typography className="text-architect-font_gris  text-[12px] ">
          {" "}
          budget maximum  
        </Typography>
        <div className="flex flex-row items-center gap-2">
        <Image src={Budget}  alt="" /> 
        <Typography className="text-architect-font_gris  text-[12px]">
          {" "}
          {announcement.budget}
        </Typography>
        </div>
   </div>
     </div>
  </div>
<div className=" flex flex-col ">
    <div className="flex flex-col gap-2  px-6 py-4">
        <Typography className="text-architect-font_gris text-[16px] font-semibold">
          {" "}
          Photos
        </Typography>
        <div className="flex flex-row  justify-between">
        <Typography className="text-architect-secondary_text_color text-[14px] ">
          {" "}
          des photos pour le projet : 
        </Typography></div>
        </div>

        <div className="grid grid-cols-3  mt-2">

 <Image src={Projectphoto1}  alt="" /> 
 <Image src={Projectphoto2}  alt="" /> 
 <Image src={Projectphoto3}  alt="" /> 
 <Image src={Projectphoto4}  alt="" /> 
 <Image src={Projectphoto5}  alt="" /> 
 <Image src={Projectphoto6}  alt="" /> 

 </div>


</div>


    </div>
       ))}
       </>
     )}
    
      </MainCard></div>
  )
}

export default ConstructionCard