"use client";

import Messg from "@/assets/Messg.svg";
import MainCard from "@/components/MainCard";
import { Avatar, Button, Typography } from "@/components/RemoteComponents";
import Image from "next/image";
import { GrFormNext } from "react-icons/gr";
import { LuSendHorizonal } from "react-icons/lu";


const BoiteMessgerie = () => {
  return (
   
<div className="w-full mt-5 ">
<MainCard className="flex flex-col gap-2  shadow-md border  border-gray-300 p-[18px]  ">
       
       <div className="flex flex-row gap-3 items-center border-b-[1px] border-dashed pb-1"> 
       <Avatar
              variant="circular"
              size="sm"
              alt="user 1"
              className="border-2 border-white self-center "
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
            />
            <div className="flex flex-col ">
          <Typography className="md:self-start text-extrabold text-[15px] md:w-[210px] self-center text-architect-text_hover ">
          Natalie Dormer
          </Typography>
          <Typography className="md:self-start text-extrabold text-[13px] self-center text-[#888FA7] ">
          Architecte de construction
          </Typography>
          </div>
          </div>
         
          <Image
        alt="hero image"
        className=" h-96 w-full"
        src={Messg}
        priority={true}
      />
     <div className="  flex flex-col items-center pt-2  border-b-[1px] border-solid "  >
     <Typography className="  items-center text-[15px]  text-md  text-architect-font_gris mt-2 ">
     Vous trouverez le devis détaillé, 
     comprenant les coûts estimés pour chaque phase du projet. 
          </Typography>

          <div className="flex flex-row items-center p-[6px] ">
              <Typography className=" text-architect-font_gris  font-semibold text-[13px] cursor-pointer ">
                {" "}
                Consulter Devis
              </Typography>
              <GrFormNext className="text-architect-font_gris size-5"/>
            </div>
          <div className="flex flex-row gap-3  justify-center px-4 mt-2 pb-4 ">
<Button  className="bg-white text-client-primary  border-solid border border-client-primary flex-grow " size = "sm">Refuser</Button>
<Button  size = "sm" className="flex-grow ">Accepter</Button>
    
      </div>

    
          </div>
          <div className="flex flex-row  justify-between p-[8px] ">
              <Typography className=" text-[#888FA7]  text-[14px]  ">
                {" "}
                Type a message
              </Typography>
              <LuSendHorizonal className="text-architect-font_gris size-5 cursor-pointer"/>
            </div>
        </MainCard>
       </div>
  )
}

export default BoiteMessgerie