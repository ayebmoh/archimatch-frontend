"use client";

import { LuDot } from "react-icons/lu";
import MainCard from "@/components/MainCard";
import { Button,Typography } from "@/components/RemoteComponents";
import { IoIosArrowBack } from "react-icons/io";
import {Popup} from "@/components";
import { useState } from "react";
import { useFetchData } from "@/services/queries";

const CategoriDetails = () => {

const { data: announcements, isLoading } = useFetchData(
    "/archimatch_app/announcement/",
    );


    const [open, setOpen] = useState(false);
  
    const handleMainCardClick = () => {
      // Si la popup est ouverte, la fermer
      if (open) {
        setOpen(false);
      }
      
      
    };
  return (
    <div className=" w-full min-w-72   ">
    <MainCard className="relative self-center p-6 " onClick={handleMainCardClick}>
    {isLoading ? (
          <p>Loading...</p>
        ) : (
          <>

{announcements?.data?.map((announcement) => (
      

    <div key={announcement.id} className="flex flex-col gap-3">

    <div className="flex flex-col gap-2 ">
<Typography className=" text-[14px] font-semibold text-architect-font_gris">Catégorie</Typography>
<Typography className=" text-[12px] text-architect-secondary_text_color ">{announcement.categories}</Typography>
<div className=" flex flex-col border-b-[1px] border-dashed  "></div>
    </div>
   
    <div className="flex flex-col gap-2 ">
<Typography className=" text-[14px] font-semibold text-architect-font_gris">Type de bien</Typography>
<Typography className=" text-[12px] text-architect-secondary_text_color ">{announcement.work_style}</Typography>
<div className=" flex flex-col border-b-[1px] border-dashed  "></div>
    </div>
    <div className="flex flex-col gap-2 ">
<Typography className=" text-[14px] font-semibold text-architect-font_gris">Style</Typography>
<Typography className=" text-[12px] text-architect-secondary_text_color ">{announcement.house_type} </Typography>
<div className=" flex flex-col border-b-[1px] border-dashed  "></div>
    </div>

    {announcement.extra && (
  <div className="flex flex-col gap-2">
    <Typography className="text-[14px] font-semibold text-architect-font_gris">Options de Projet</Typography>
    <Typography className="text-[12px] text-architect-secondary_text_color">{announcement.house_type}</Typography>
    <div className="flex flex-col gap-1">
      {Array.isArray(announcement.extra) ? (
        announcement.extra.map((extraItem) => (
          <div key={extraItem} className="flex flex-row items-center gap-2">
            <LuDot className="size-6 text-architect-secondary_text_color"/>
            <Typography className="text-[12px] text-architect-secondary_text_color">{extraItem}</Typography>
          </div>
        ))
      ) : (
        <div key={announcement.extra} className="flex flex-row items-center gap-2">
          <LuDot className="size-6 text-architect-secondary_text_color"/>
          <Typography className="text-[12px] text-architect-secondary_text_color">{announcement.extra}</Typography>
        </div>
      )}
    </div>
  </div>
)}
<Button onClick={() => setOpen(true)} className="w-full " size = "sm">Annuler le projet</Button >
   </div>     ))}
       </>
     )}
    


   <Popup
        open={open}
        handler={() =>setOpen(!open)}
        size="sm"
        bodyClassName="flex flex-col items-center ">
          <div className=" flex flex-col gap-3 px-3  " onClick={(e) => e.stopPropagation()}>
          <div className=" flex flex-col items-start  ">
            <div className="flex flex-row items-center absolute top-2 gap-2">
              <div onClick={() => setOpen(false)} className="cursor-pointer ">
                <IoIosArrowBack  className="size-5 text-[#344054]" /></div>
                <Typography className="text-[#344054] text-[14px] ">Retour</Typography>
             </div>
             <div className="mt-6">
               <h1 className="text-[25px] text-[#344054] font-bold  ">Annulation projet</h1>
                <Typography className="text-architect-secondary_text_color text-[16px] mt-4  ">
                   Pour confirmer l’annulation du projet Veuillez Sélectionner le Statut du Projet
                </Typography>
                </div>
         </div> 
         <div className=" flex flex-col gap-1">
        
         <div class="inline-flex items-center">
           
           <label class="relative flex items-center p-2 rounded-full cursor-pointer" htmlFor="black">    
       
             <input name="color" type="radio"
               class="before:content[''] peer relative h-3.5 w-3.5 cursor-pointer appearance-none rounded-full border border-blue-gray-200 text-client-primary  transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-10 before:w-10 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-client-primary checked:before:bg-client-primary hover:before:opacity-10"
               id="black" />
             <span
               class="absolute text-client-primary transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
               <svg xmlns="http://www.w3.org/2000/svg" class=" h-1.5  w-1.5" viewBox="0 0 16 16" fill="currentColor">
                 <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
               </svg>
              </span>
           </label>
           <label className="text-architect-font_gris text-[13px] font-semibold"> L’ Architecte ne me correspond pas</label>
         </div>
         <div class="inline-flex items-center">
           
           <label class="relative flex items-center p-2 rounded-full cursor-pointer" htmlFor="black">    
       
             <input name="color" type="radio"
               class="before:content[''] peer relative h-3.5 w-3.5 cursor-pointer appearance-none rounded-full border border-blue-gray-200 text-client-primary  transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-10 before:w-10 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-client-primary checked:before:bg-client-primary hover:before:opacity-10"
               id="black" />
             <span
               class="absolute text-client-primary transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
               <svg xmlns="http://www.w3.org/2000/svg" class=" h-1.5  w-1.5" viewBox="0 0 16 16" fill="currentColor">
                 <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
               </svg>
              </span>
           </label>
           <label className="text-architect-font_gris text-[13px] font-semibold">J’ai trouvé un architecte</label>
         </div>

         <div class="inline-flex items-center">
           
           <label class="relative flex items-center p-2 rounded-full cursor-pointer" htmlFor="black">    
       
             <input name="color" type="radio"
               class="before:content[''] peer relative h-3.5 w-3.5 cursor-pointer appearance-none rounded-full border border-blue-gray-200 text-client-primary  transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-10 before:w-10 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-client-primary checked:before:bg-client-primary hover:before:opacity-10"
               id="black" />
             <span
               class="absolute text-client-primary transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
               <svg xmlns="http://www.w3.org/2000/svg" class=" h-1.5  w-1.5" viewBox="0 0 16 16" fill="currentColor">
                 <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
               </svg>
              </span>
           </label>
           <label className="text-architect-font_gris text-[13px] font-semibold"> Aucun architecte m’a contacté</label>
         </div>
         <div class="inline-flex items-center">
           
           <label class="relative flex items-center p-2 rounded-full cursor-pointer" htmlFor="black">    
       
             <input name="color" type="radio"
               class="before:content[''] peer relative h-3.5 w-3.5 cursor-pointer appearance-none rounded-full border border-blue-gray-200 text-client-primary  transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-10 before:w-10 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-client-primary checked:before:bg-client-primary hover:before:opacity-10"
               id="black" />
             <span
               class="absolute text-client-primary transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
               <svg xmlns="http://www.w3.org/2000/svg" class=" h-1.5  w-1.5" viewBox="0 0 16 16" fill="currentColor">
                 <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
               </svg>
              </span>
           </label>
           <label className="text-architect-font_gris text-[13px] font-semibold"> L’ Architecte ne me correspond pas</label>
         </div>
         <div class="inline-flex items-center">
           
           <label class="relative flex items-center p-2 rounded-full cursor-pointer" htmlFor="black">    
       
             <input name="color" type="radio"
               class="before:content[''] peer relative h-3.5 w-3.5 cursor-pointer appearance-none rounded-full border border-blue-gray-200 text-client-primary  transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-10 before:w-10 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-client-primary checked:before:bg-client-primary hover:before:opacity-10"
               id="black" />
             <span
               class="absolute text-client-primary transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
               <svg xmlns="http://www.w3.org/2000/svg" class=" h-1.5  w-1.5" viewBox="0 0 16 16" fill="currentColor">
                 <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
               </svg>
              </span>
           </label>
           <label className="text-architect-font_gris text-[13px] font-semibold"> J’ai annulé le projet</label>
         </div>
               
    </div>
        <div className="flex flex-row gap-2  justify-end mt-4   ">
<Button onClick={() => setOpen(false)} className="bg-white text-architect-font_gris  border-none " size = "sm">Ignorer</Button>
<Button onClick={() => setOpen(false)} className="bg-[#11ABEC] text-white border-solid border border-[#11ABEC]" size = "sm">Confirmer</Button>
          </div>
              </div>
      </Popup>


     </MainCard></div>
  )
}

export default CategoriDetails