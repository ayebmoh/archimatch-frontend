"use client";

import Confirm from "@/assets/Confirm.svg";
import Reject from "@/assets/Reject.svg";
import MainCard from "@/components/MainCard";
import {
  Avatar,
  Button,
  Chip,
  Radio,
  Typography,
} from "@/components/RemoteComponents";
import { MdFileDownload } from "react-icons/md";

import { Popup } from "@/components";
import Image from "next/image";
import { useState } from "react";
const SelectDevis = () => {
  const [open, setOpen] = useState(false);
  const [isopen, setisopen] = useState(false);

  const handleMainCardClick = () => {
    // Si la popup est ouverte, la fermer
    if (open) {
      setOpen(false);
    }
    if (isopen) {
      setisopen(false);
    }
  };

  return (
    <div className="w-full flex-wrap flex-row flex m-auto gap-6  justify-center mt-10">
      <div className="w-full   ">
        <MainCard
          className="relative  self-center p-6"
          onClick={handleMainCardClick}
        >
          <div className="flex flex-col ">
            <div className="flex  items-center justify-between pb-5 ">
              <Avatar
                variant="circular"
                alt="user 2"
                size="sm"
                className="border-2 border-white "
                src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1061&q=80"
              />
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
            <Button size="sm" className=" bg-[#344054] self-start text-[12px]">
              <span className="flex felx-row items-center gap-1 ">
                <MdFileDownload className="size-4" />
                PDF
              </span>
            </Button>
            <div className="flex flex-row gap-2 w-full md:justify-end  justify-center mt-14">
              <Button
                onClick={() => setisopen(true)}
                className="self-end bg-white text-client-primary text-[12px] border-solid border border-client-primary "
                size="sm"
              >
                Refuser
              </Button>
              <Button
                onClick={() => setOpen(true)}
                size="sm"
                className=" self-end text-[12px] "
              >
                Accepter
              </Button>
            </div>
          </div>
          <Popup
            open={open}
            handler={() => setOpen(!open)}
            size="sm"
            bodyClassName="w-full flex flex-col items-center  "
            className="  bg-[#E5EBFF] "
            onClick={(e) => e.stopPropagation()}
          >
            <div className="  justify-center z-0 absolute  ">
              <Image src={Confirm} alt="" className=" w-full" />
            </div>
            <div className=" w-full  bg-white  mt-20 ">
              {" "}
              {/* Added flexbox for layout */}
              <div className=" w-full relative mt-28 ">
                <Typography className="text-[19px] font-semibold ml-20 text-[#344054]">
                  Confirmez votre engagement
                </Typography>
                <Typography className="mt-4 text-[#344054] text-[14px]">
                  En acceptant ce devis, vous confirmez votre engagement envers
                  cet architecte pour la réalisation de votre projet. Une fois
                  accepté, le projet sera considéré comme clôturé.
                </Typography>
                <Typography className="text-[14px] ml-20 text-[#344054] mt-2">
                  Êtes-vous sûr(e) de vouloir procéder ?
                </Typography>
              </div>
              <div className="flex flex-row gap-4 w-full justify-center px-4 mt-5">
                <Button
                  onClick={() => setOpen(false)}
                  className="bg-[#E7E7E7] text-architect-font_gris  border-none flex-grow"
                  size="sm"
                >
                  Ignorer
                </Button>
                <Button
                  onClick={() => setOpen(false)}
                  className="bg-[#11ABEC] text-white border-solid border border-[#11ABEC] flex-grow "
                  size="sm"
                >
                  Confirmer
                </Button>
              </div>
            </div>
          </Popup>

          <Popup
            open={isopen}
            handler={() => setisopen(!isopen)}
            size="sm"
            bodyClassName="flex flex-col items-center   "
            className="  bg-[#E5EBFF] ">
            <div className="  justify-center z-0 absolute  ">
              <Image src={Reject} className="" alt="" />
            </div>
            <div className=" w-full flex flex-col  bg-white mt-28 ">
              {" "}
             
              <div className="mt-20 px-6   ">
                <Typography className="text-[19px] font-semibold ml-20 text-[#344054]">
                  Confirmez votre Refus
                </Typography>
                <Typography className="mt-4 text-[#344054] text-[15px] pb-2">
                  chaque projet est unique et nous voulons vous offrir la
                  meilleure expérience possible. Si ce devis ne répond pas
                  entièrement à vos attentes, pas de souci !
                </Typography>
                <Radio
                  name="description"
                  className="w-5 h-5"
                  color="blue"
                  label={
                    <Typography className="text-[14px] text-[#344054]">
                      Demander une autre proposition de devis
                    </Typography>
                  }
                />
                <Radio
                  name="description"
                  className="w-5 h-5"
                  color="blue"
                  label={
                    <Typography className="text-[14px] text-[#344054]">
                      Arrêter la négociation avec l' architecte
                    </Typography>
                  }
                />
              </div>
              <div className="flex flex-row gap-4 w-full justify-center px-4 mt-7">
                <Button
                  onClick={() => setisopen(false)}
                  className="bg-[#E7E7E7] text-architect-font_gris  border-none flex-grow"
                  size="sm"
                >
                  Ignorer
                </Button>
                <Button
                  onClick={() => setisopen(false)}
                  className="bg-[#11ABEC] text-white border-solid border border-[#11ABEC] flex-grow "
                  size="sm"
                >
                  Confirmer
                </Button>
              </div>
            </div>
          </Popup>
        </MainCard>
      </div>
    </div>
  );
};

export default SelectDevis
